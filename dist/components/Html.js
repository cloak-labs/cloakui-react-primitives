"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const htmlParserUtils_1 = require("../utils/htmlParserUtils");
function Html({ content, className, style, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: className, style: style, ...props, children: (0, htmlParserUtils_1.parseHtml)(content) }));
}
exports.Html = Html;
