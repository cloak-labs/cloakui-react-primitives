"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTag = exports.isElement = exports.parseHtml = void 0;
const html_react_parser_1 = require("html-react-parser");
/**
 * A simple wrapper around html-react-parser's `parse` function, where we
 * first check if the input is actually a string, and if not we don't parse it.
 */
const parseHtml = (html, options) => (typeof html == "string" ? (0, html_react_parser_1.default)(html, options) : html);
exports.parseHtml = parseHtml;
/**
 * Solution for html-react-parser `replace` method to check if domNode is
 * an Element and type assert it if so (using a type predicate)
 * --> solution taken from: https://github.com/remarkablemark/html-react-parser/issues/633#issuecomment-1485590066
 */
const isElement = (domNode) => {
    const isTag = ["tag", "script"].includes(domNode.type);
    const hasAttributes = domNode.attribs !== undefined;
    return isTag && hasAttributes;
};
exports.isElement = isElement;
/**
 * A useful helper to check if a html-react-parser DOMNode is a certain HTML tag, such as "p" or "div",
 * also calling `isElement` under-the-hood to type assert and solve TS issues.
 */
const isTag = (domNode, tagName) => {
    if (!(0, exports.isElement)(domNode))
        return false;
    if (domNode.name === tagName)
        return true;
};
exports.isTag = isTag;
