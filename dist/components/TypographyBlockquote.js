import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const TypographyBlockquote = ({ className, children, citation, citationClassName, ...props }) => (_jsxs("blockquote", { className: cx("mt-6 border-l-2 pl-6 italic flex flex-col", className), ...props, children: [children, citation && _jsx("p", { className: cx("font-medium mt-4", citationClassName), children: citation })] }));
