import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
import { cx } from "@cloakui/styles";
export const TypographyList = ({ as: Element, className, children, ...props }) => (_jsx(Element, { className: cx("ml-6 list-disc space-y-3", className), ...props, children: _jsx(DynamicHtmlParser, { children: children }) }));
