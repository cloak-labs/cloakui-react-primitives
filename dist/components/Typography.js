import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export const Typography = ({ as: Element, children, ...props }) => (_jsx(Element, { ...props, children: _jsx(DynamicHtmlParser, { children: children }) }));
