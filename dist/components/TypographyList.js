"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const htmlParserUtils_1 = require("../utils/htmlParserUtils");
const TypographyList = ({ as: Element, className, style, children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(Element, { className: (0, styles_1.cx)("ml-6 list-disc space-y-3", className), style: style, ...props, children: (0, htmlParserUtils_1.parseHtml)(children) }));
};
exports.TypographyList = TypographyList;
