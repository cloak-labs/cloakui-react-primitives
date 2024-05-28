import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Suspense } from "react";
import { containsHtml } from "@cloakui/utils";
const LazyHtmlParser = React.lazy(() => import("./HtmlParser").then((module) => ({ default: module.HtmlParser })));
export const DynamicHtmlParser = ({ options, children, }) => (_jsx(_Fragment, { children: typeof children == "string" && containsHtml(children) ? (_jsx(Suspense, { fallback: children, children: _jsx(LazyHtmlParser, { options: options, children: children }) })) : (children) }));
