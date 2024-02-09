import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import { parseHtml } from "../utils/htmlParserUtils";
export const Typography = ({ as: Element, baseClassName, className, style, children, ...props }) => {
    return (_jsx(Element, { className: cx(baseClassName, className), style: style, ...props, children: parseHtml(children) }));
};
