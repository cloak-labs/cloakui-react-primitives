import React from "react";
import { isAnchorLink } from "@cloakui/utils";
export const Link = React.forwardRef(({ href, openInNewTab = true, internalLinkComponent = "a", frontendUrl, fallbackAs: Fallback = "span", children, ...props }, ref) => {
    if (!href || href === "#")
        return React.createElement(Fallback, { ref, ...props }, children);
    let currentURL;
    if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        currentURL = `${url.protocol}//${url.host}`;
    }
    else {
        currentURL = frontendUrl;
    }
    const hrefString = href.toString();
    const isInternalLink = href &&
        (hrefString.startsWith(currentURL || "") ||
            (hrefString.startsWith("/") && !hrefString.startsWith("/api/")));
    if (isAnchorLink(hrefString, currentURL)) {
        return React.createElement("a", { ref, href: hrefString, ...props }, children);
    }
    if (isInternalLink) {
        const Comp = internalLinkComponent;
        return React.createElement(Comp, { ref, href, ...props }, children);
    }
    let finalHref = hrefString;
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
