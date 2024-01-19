"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const TypographyListItem = ({ content, className, style, children, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("li", { className: (0, styles_1.cx)("list-circle pl-2", className), style: style, ...props, children: content }), children] }));
};
exports.TypographyListItem = TypographyListItem;
