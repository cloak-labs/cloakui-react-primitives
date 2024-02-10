import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export const TypographyList = ({ as: Element, className, style, children, ...props }) => {
    return (_jsx(Element, { className: cx("ml-6 list-disc space-y-3", className), style: style, ...props, children: _jsx(DynamicHtmlParser, { children: children }) }));
};
