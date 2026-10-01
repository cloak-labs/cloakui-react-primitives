import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { containsHtml } from "@cloakui/utils";
const VOID_TAGS = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * CMS HTML sometimes includes a closing tag with no matching opener
 * (`</div>` at the end of a wysiwyg field). `dangerouslySetInnerHTML`
 * writes that tag into the document, so the browser closes an ancestor
 * — including a streamed page slot — and the rest of the markup escapes
 * its container. Drop closers that this fragment did not open.
 */
function omitUnmatchedClosingTags(html) {
    const stack = [];
    let out = "";
    let i = 0;
    while (i < html.length) {
        if (html[i] !== "<") {
            const next = html.indexOf("<", i);
            if (next === -1) {
                out += html.slice(i);
                break;
            }
            out += html.slice(i, next);
            i = next;
        }
        if (html.startsWith("<!--", i)) {
            const end = html.indexOf("-->", i + 4);
            const close = end === -1 ? html.length : end + 3;
            out += html.slice(i, close);
            i = close;
            continue;
        }
        const end = findTagEnd(html, i);
        if (end === -1) {
            out += html.slice(i);
            break;
        }
        const raw = html.slice(i, end + 1);
        const nameMatch = /^<\/?\s*([a-zA-Z][a-zA-Z0-9-]*)/.exec(raw);
        if (!nameMatch) {
            out += raw;
            i = end + 1;
            continue;
        }
        const name = nameMatch[1].toLowerCase();
        const isClose = raw[1] === "/";
        const selfClosing = raw.endsWith("/>") || VOID_TAGS.has(name);
        if (isClose) {
            const at = stack.lastIndexOf(name);
            if (at === -1) {
                i = end + 1;
                continue;
            }
            while (stack.length - 1 > at) {
                out += `</${stack.pop()}>`;
            }
            stack.pop();
            out += raw;
        }
        else if (!selfClosing) {
            stack.push(name);
            out += raw;
        }
        else {
            out += raw;
        }
        i = end + 1;
    }
    return out;
}
function findTagEnd(html, start) {
    let quote = null;
    for (let i = start + 1; i < html.length; i++) {
        const char = html[i];
        if (quote) {
            if (char === quote)
                quote = null;
            continue;
        }
        if (char === '"' || char === "'") {
            quote = char;
            continue;
        }
        if (char === ">")
            return i;
    }
    return -1;
}
/**
 * HOC that conditionally renders children as HTML or React nodes.
 * If `children` is a string and contains HTML, it gets rendered via dangerouslySetInnerHTML
 * Otherwise, the `children` are rendered directly.
 */
export function withStringToHtml(Component) {
    const WithStringToHtml = React.forwardRef((props, ref) => {
        const { children, ...rest } = props;
        const supportsRef = typeof Component === "object" &&
            Component !== null &&
            "$$typeof" in Component &&
            Component.$$typeof === Symbol.for("react.forward_ref");
        if (typeof children === "string" && containsHtml(children)) {
            const unescapedString = omitUnmatchedClosingTags(children
                .replace(/\\n/g, "") // Remove literal \n
                .replace(/\\"/g, '"') // Replace \" with "
                .trim());
            return supportsRef ? (_jsx(Component, { ...rest, ref: ref, dangerouslySetInnerHTML: {
                    __html: unescapedString,
                } })) : (_jsx(Component, { ...rest, dangerouslySetInnerHTML: {
                    __html: unescapedString,
                } }));
        }
        return supportsRef ? (_jsx(Component, { ...rest, ref: ref, children: children })) : (_jsx(Component, { ...rest, children: children }));
    });
    WithStringToHtml.displayName = `withStringToHtml(${Component.displayName || Component.name || "Component"})`;
    return WithStringToHtml;
}
