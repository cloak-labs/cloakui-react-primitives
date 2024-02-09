import { jsx as _jsx } from "react/jsx-runtime";
import { parseHtml } from "../utils/htmlParserUtils";
export function Html({ content, className, style, ...props }) {
    return (_jsx("div", { className: className, style: style, ...props, children: parseHtml(content) }));
}
