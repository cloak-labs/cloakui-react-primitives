import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const TypographyBlockquote = ({ className, style, children, citation, citationClassName, ...props }) => {
    return (_jsxs("blockquote", { className: cx("mt-6 border-l-2 pl-6 italic", className), style: style, ...props, children: [children, _jsx("p", { className: cx("font-medium mt-4", citationClassName), children: citation })] }));
};
