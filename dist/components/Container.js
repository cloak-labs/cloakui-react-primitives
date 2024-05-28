import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
export const Container = React.forwardRef(({ className = "", cntrClassName = "", children, as = "div", ...props }, ref) => {
    const Element = as;
    const hasBgColor = className?.includes("bg-") || false;
    const renderedChildren = typeof children == "function" ? children() : children;
    return (_jsx(Element, { ref: ref, className: cx(!hasBgColor && cntrClassName, className), ...props, children: hasBgColor ? (_jsx("div", { className: cntrClassName, children: renderedChildren })) : (renderedChildren) }));
});
