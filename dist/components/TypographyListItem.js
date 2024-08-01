import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
import { cx } from "@cloakui/styles";
export const TypographyListItem = ({ content, className, children, ...props }) => (_jsxs("li", { className: cx("list-circle leading-7 pl-2", className), ...props, children: [_jsx(DynamicHtmlParser, { children: content }), _jsx(DynamicHtmlParser, { children: children })] }));
