import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export function Container({ className = "", cntrClassName = "", children, as = "div", ...props }) {
    const Element = as;
    const hasBgColor = className?.includes("bg-") || false;
    return (_jsx(Element, { className: cx(!hasBgColor && cntrClassName, className), ...props, children: hasBgColor ? _jsx("div", { className: cntrClassName, children: children }) : children }));
}
