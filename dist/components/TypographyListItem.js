"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const htmlParserUtils_1 = require("../utils/htmlParserUtils");
const TypographyListItem = ({ content, className, style, children, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("li", { className: (0, styles_1.cx)("list-circle leading-7 pl-2", className), style: style, ...props, children: (0, htmlParserUtils_1.parseHtml)(content) }), (0, htmlParserUtils_1.parseHtml)(children)] }));
};
exports.TypographyListItem = TypographyListItem;
