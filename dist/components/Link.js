"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cloakcms_1 = require("cloakcms");
const React = require("react");
exports.Link = React.forwardRef(({ href, openInNewTab = true, internalLinkComponent = "a", children, ...props }, ref) => {
    if (!href)
        return ((0, jsx_runtime_1.jsx)("span", { ref: ref, ...props, children: children }));
    let currentURL;
    if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        currentURL = `${url.protocol}//${url.host}`;
    }
    else {
        currentURL = (0, cloakcms_1.getCMSInstance)().url;
    }
    const isInternalLink = href &&
        (href.startsWith(currentURL) ||
            (href.startsWith("/") && !href.startsWith("/api/")));
    const isAnchorLink = href && href.startsWith("#");
    if (isInternalLink) {
        const Comp = internalLinkComponent;
        return React.createElement(Comp, { ref, href, ...props }, children); // using React.createElement because it allows for explicit typing; before the inference was too complex and caused TS error
    }
    if (isAnchorLink) {
        return ((0, jsx_runtime_1.jsx)("a", { ref: ref, href: href, ...props, children: children }));
    }
    if (!href.startsWith("/") &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:"))
        href = `https://${href}`;
    return ((0, jsx_runtime_1.jsx)("a", { target: openInNewTab ? "_blank" : "", rel: "noopener noreferrer", ref: ref, href: href, ...props, children: children }));
});
