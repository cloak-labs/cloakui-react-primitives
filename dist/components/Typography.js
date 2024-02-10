import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export const Typography = ({ as: Element, baseClassName, className, style, children, ...props }) => {
    return (_jsx(Element, { className: cx(baseClassName, className), style: style, ...props, children: _jsx(DynamicHtmlParser, { children: children }) }));
};
