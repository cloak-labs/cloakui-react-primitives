import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Container = React.forwardRef(({ children, as: Element = "div", ...props }, ref) => {
    const renderedChildren = typeof children == "function" ? children() : children;
    return (_jsx(Element, { ref: ref, ...props, children: renderedChildren }));
});
Container.displayName = "Container";
