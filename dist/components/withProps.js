import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
import { deepMerge } from "cloakcms";
export function withProps(Component, defaultProps) {
    const ComponentWithClassName = Component;
    return React.forwardRef(function ExtendComponent(props, ref) {
        const isDefaultPropsFunction = typeof defaultProps == "function";
        const finalDefaultProps = isDefaultPropsFunction
            ? defaultProps(props)
            : defaultProps;
        // if the default props is a function, it means that default props should override instance-level props:
        const finalProps = isDefaultPropsFunction
            ? deepMerge(props, finalDefaultProps)
            : deepMerge(finalDefaultProps, props);
        return (_jsx(ComponentWithClassName, { ref: ref, ...finalProps, className: cx(finalDefaultProps.className, props.className) }));
    });
}
