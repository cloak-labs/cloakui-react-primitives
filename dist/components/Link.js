import React from "react";
export const Link = React.forwardRef(({ href, openInNewTab = true, internalLinkComponent = "a", frontendUrl, fallbackAs: Fallback = "span", children, ...props }, ref) => {
    if (!href || href === "#")
        return React.createElement(Fallback, { ref, ...props }, children);
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
        (href.toString().startsWith(currentURL || "") ||
            (href.toString().startsWith("/") &&
                !href.toString().startsWith("/api/")));
    const isAnchorLink = href && href.toString().startsWith("#");
    if (isInternalLink) {
        const Comp = internalLinkComponent;
        return React.createElement(Comp, { ref, href, ...props }, children);
    }
    if (isAnchorLink) {
        return React.createElement("a", { ref, href, ...props }, children);
    }
    let finalHref = href.toString();
    if (!finalHref.startsWith("/") &&
        !finalHref.startsWith("http") &&
        !finalHref.startsWith("mailto:") &&
        !finalHref.startsWith("tel:"))
        finalHref = `https://${finalHref}`;
    return React.createElement("a", {
        target: openInNewTab ? "_blank" : undefined,
        rel: "noopener noreferrer",
        ref,
        href: finalHref,
        ...props,
    }, children);
});
Link.displayName = "Link";
