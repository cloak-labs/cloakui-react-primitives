import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export function Container({ className, innerClassName, children, as = "div", ...props }) {
    const Element = as;
    const defaultInnerClassNames = "px-4 sm:px-6 lg:px-9 mx-auto max-w-7xl lg:max-w-8xl";
    const hasBgColor = className?.includes("bg-") || false;
    return (_jsx(Element, { className: cx(!hasBgColor && defaultInnerClassNames, !hasBgColor && innerClassName, className), ...props, children: hasBgColor ? (_jsx("div", { className: cx(defaultInnerClassNames, innerClassName), children: children })) : (children) }));
}
