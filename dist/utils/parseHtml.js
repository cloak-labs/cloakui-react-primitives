"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
const html_react_parser_1 = require("html-react-parser");
const parseHtml = (html, options) => (typeof html == "string" ? (0, html_react_parser_1.default)(html, options) : html);
exports.parseHtml = parseHtml;
