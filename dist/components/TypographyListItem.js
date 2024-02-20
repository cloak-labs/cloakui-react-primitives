import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export const TypographyListItem = ({ content, className, style, children, ...props }) => {
    return (_jsx(_Fragment, { children: _jsxs("li", { className: cx("list-circle leading-7 pl-2", className), style: style, ...props, children: [_jsx(DynamicHtmlParser, { children: content }), _jsx(DynamicHtmlParser, { children: children })] }) }));
};
