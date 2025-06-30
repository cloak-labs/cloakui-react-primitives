import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
export function withProps(Component, defaultProps) {
    const ComponentWithClassName = Component;
    const WithProps = React.forwardRef(function ExtendComponent(props, ref) {
        const isDefaultPropsFunction = typeof defaultProps === "function";
        const finalDefaultProps = isDefaultPropsFunction
            ? defaultProps(props)
            : defaultProps;
        if ("children" in finalDefaultProps) {
            /**
             * Sometimes when the user passes a callback to the default props, the runtime `children` prop
             * is passed in, and `deepMerge` tries to merge it with the default props.children, which can
             * cause a "too much recursion" error.. this prevents that.
             */
            delete finalDefaultProps.children;
        }
        // if the default props is a function, it means that default props should override instance-level props:
        const finalProps = (isDefaultPropsFunction
            ? deepMerge(props, finalDefaultProps)
            : deepMerge(finalDefaultProps, props));
        return (_jsx(ComponentWithClassName, { ref: ref, ...finalProps, className: cx(finalDefaultProps.className, props.className) }));
    });
    WithProps.displayName = `withProps(${Component?.displayName || Component?.name || "Component"})`;
    return WithProps;
}
