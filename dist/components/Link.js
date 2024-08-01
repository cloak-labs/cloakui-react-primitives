import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Link = React.forwardRef(({ href, openInNewTab = true, internalLinkComponent = "a", frontendUrl, fallbackAs: Fallback = "span", children, ...props }, ref) => {
    if (!href || href == "#")
        return (_jsx(Fallback, { ref: ref, ...props, children: children }));
    let currentURL;
    if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        currentURL = `${url.protocol}//${url.host}`;
    }
    else {
        // when rendering server-side, we resort to user manually providing their frontend URL via prop:
        currentURL = frontendUrl;
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
        return (_jsx("a", { ref: ref, href: href, ...props, children: children }));
    }
    if (!href.startsWith("/") &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:"))
        href = `https://${href}`;
    return (_jsx("a", { target: openInNewTab ? "_blank" : "", rel: "noopener noreferrer", ref: ref, href: href, ...props, children: children }));
});
Link.displayName = "Link";
