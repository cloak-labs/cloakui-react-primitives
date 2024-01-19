"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyBlockquote = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const TypographyBlockquote = ({ className, style, children, citation, citationClassName, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)("blockquote", { className: (0, styles_1.cx)("mt-6 border-l-2 pl-6 italic", className), style: style, ...props, children: [children, (0, jsx_runtime_1.jsx)("p", { className: (0, styles_1.cx)("font-medium mt-4", citationClassName), children: citation })] }));
};
exports.TypographyBlockquote = TypographyBlockquote;
