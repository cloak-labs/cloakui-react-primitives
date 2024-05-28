import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export const Typography = ({ as: Element, className, style, children, ...props }) => {
    return (_jsx(Element, { className: className, style: style, ...props, children: _jsx(DynamicHtmlParser, { children: children }) }));
};
