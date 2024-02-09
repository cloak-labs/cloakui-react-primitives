import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import { parseHtml } from "../utils/htmlParserUtils";
export const TypographyListItem = ({ content, className, style, children, ...props }) => {
    return (_jsxs(_Fragment, { children: [_jsx("li", { className: cx("list-circle leading-7 pl-2", className), style: style, ...props, children: parseHtml(content) }), parseHtml(children)] }));
};
