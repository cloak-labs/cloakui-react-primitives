"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/cjs/styles/prism");
const styles_1 = require("@cloakui/styles");
const CodeBlock = ({ language = "javascript", style = prism_1.nightOwl, className, children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { className: (0, styles_1.cx)("rounded-lg border border-root-dim", className), language: language, style: style, ...props, children: children }));
};
exports.CodeBlock = CodeBlock;
