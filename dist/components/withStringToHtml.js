import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { containsHtml } from "@cloakui/utils";
/**
 * HOC that conditionally renders children as HTML or React nodes
 * If children is a string and contains HTML, it uses dangerouslySetInnerHTML
 * Otherwise, it renders children directly
 */
export function withStringToHtml(Component) {
    const WithStringToHtml = React.forwardRef((props, ref) => {
        const { children, ...rest } = props;
        const supportsRef = typeof Component === "object" &&
            Component !== null &&
            "$$typeof" in Component &&
            Component.$$typeof === Symbol.for("react.forward_ref");
        if (typeof children === "string" && containsHtml(children)) {
            return supportsRef ? (_jsx(Component, { ...rest, ref: ref, dangerouslySetInnerHTML: {
                    __html: children,
                } })) : (_jsx(Component, { ...rest, dangerouslySetInnerHTML: {
                    __html: children,
                } }));
        }
        return supportsRef ? (_jsx(Component, { ...rest, ref: ref, children: children })) : (_jsx(Component, { ...rest, children: children }));
    });
    WithStringToHtml.displayName = `withStringToHtml(${Component.displayName || Component.name || "Component"})`;
    return WithStringToHtml;
}
