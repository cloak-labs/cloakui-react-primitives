"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const htmlParserUtils_1 = require("../utils/htmlParserUtils");
const Typography = ({ as: Element, baseClassName, className, style, children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(Element, { className: (0, styles_1.cx)(baseClassName, className), style: style, ...props, children: (0, htmlParserUtils_1.parseHtml)(children) }));
};
exports.Typography = Typography;
