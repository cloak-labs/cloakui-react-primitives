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
function omitUnmatchedClosingTags(html: string): string {
  const stack: string[] = [];
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
    } else if (!selfClosing) {
      stack.push(name);
      out += raw;
    } else {
      out += raw;
    }

    i = end + 1;
  }

  return out;
}

function findTagEnd(html: string, start: number): number {
  let quote: '"' | "'" | null = null;
  for (let i = start + 1; i < html.length; i++) {
    const char = html[i];
    if (quote) {
      if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === ">") return i;
  }
  return -1;
}

type WithChildren = {
  children?: React.ReactNode;
};

type AnyComponent =
  | React.ForwardRefExoticComponent<any>
  | React.FunctionComponent<any>
  | React.ComponentClass<any>;

type PropsOf<C> = C extends React.ForwardRefExoticComponent<infer P>
  ? React.PropsWithoutRef<P>
  : C extends React.FunctionComponent<infer P>
    ? P
    : C extends React.ComponentClass<infer P>
      ? P
      : never;

/**
 * HOC that conditionally renders children as HTML or React nodes.
 * If `children` is a string and contains HTML, it gets rendered via dangerouslySetInnerHTML
 * Otherwise, the `children` are rendered directly.
 */
export function withStringToHtml<C extends AnyComponent>(
  Component: C
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PropsOf<C> & WithChildren> & React.RefAttributes<any>
> {
  const WithStringToHtml = React.forwardRef<any, PropsOf<C> & WithChildren>(
    (props, ref) => {
    const { children, ...rest } = props;

    const supportsRef =
      typeof Component === "object" &&
      Component !== null &&
      "$$typeof" in (Component as AnyComponent) &&
      (Component as any).$$typeof === Symbol.for("react.forward_ref");

    if (typeof children === "string" && containsHtml(children)) {
      const unescapedString = omitUnmatchedClosingTags(
        children
          .replace(/\\n/g, "") // Remove literal \n
          .replace(/\\"/g, '"') // Replace \" with "
          .trim(),
      );

      return supportsRef ? (
        <Component
          {...(rest as any)}
          ref={ref}
          dangerouslySetInnerHTML={{
            __html: unescapedString,
          }}
        />
      ) : (
        <Component
          {...(rest as any)}
          dangerouslySetInnerHTML={{
            __html: unescapedString,
          }}
        />
      );
    }

    return supportsRef ? (
      <Component {...(rest as any)} ref={ref}>
        {children}
      </Component>
    ) : (
      <Component {...(rest as any)}>{children}</Component>
    );
  });

  WithStringToHtml.displayName = `withStringToHtml(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithStringToHtml;
}
