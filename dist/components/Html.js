import { jsx as _jsx } from "react/jsx-runtime";
import React, { Suspense } from "react";
const DynamicHtmlParser = React.lazy(() => import("./HtmlParser").then((module) => ({ default: module.HtmlParser })));
export function Html({ content, className, style, ...props }) {
    return (_jsx("div", { className: className, style: style, ...props, children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(DynamicHtmlParser, { children: content }) }) }));
}
