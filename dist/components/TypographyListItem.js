import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { withStringToHtml } from "./withStringToHtml";
import { cx } from "@cloakui/styles";
export const TypographyListItem = ({ content, className, children, ...props }) => {
    // Create a minimal wrapper component that can handle dangerouslySetInnerHTML
    const ContentWrapper = withStringToHtml(({ children, ...props }) => (_jsx("span", { ...props, children: children })));
    return (_jsxs("li", { className: cx("leading-7 pl-2 break-inside-avoid", className), ...props, children: [_jsx(ContentWrapper, { children: content }), children] }));
};
