"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
function Container({ className, innerClassName, children, as = "div", ...props }) {
    const Element = as;
    const defaultInnerClassNames = "px-4 sm:px-6 lg:px-9 mx-auto max-w-7xl lg:max-w-8xl";
    const hasBgColor = className?.includes("bg-") || false;
    return ((0, jsx_runtime_1.jsx)(Element, { className: (0, styles_1.cx)(!hasBgColor && defaultInnerClassNames, !hasBgColor && innerClassName, className), ...props, children: hasBgColor ? ((0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)(defaultInnerClassNames, innerClassName), children: children })) : (children) }));
}
exports.Container = Container;
