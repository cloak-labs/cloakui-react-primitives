import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicHtmlParser } from "./DynamicHtmlParser";
export function Html({ content, className, style, ...props }) {
    return (_jsx("div", { className: className, style: style, ...props, children: _jsx(DynamicHtmlParser, { children: content }) }));
}
