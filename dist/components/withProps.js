import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx, cxDeep } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
import { isObject } from "@cloakui/utils";
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
        const classNameProps = (() => {
            const keys = new Set(["className"]);
            const defaultKeys = Object.keys(finalDefaultProps);
            const instanceKeys = Object.keys(props);
            for (const key of [...defaultKeys, ...instanceKeys]) {
                if (key.endsWith("ClassName"))
                    keys.add(key);
            }
            const merged = {};
            for (const key of keys) {
                merged[key] = cx(finalDefaultProps[key], props[key]);
            }
            return merged;
        })();
        // If both defaultProps and instance-level props have classNames objects, deep merge them using cxDeep
        if (isObject(finalDefaultProps.classNames) &&
            isObject(props.classNames)) {
            finalProps.classNames = cxDeep(finalDefaultProps.classNames, props.classNames);
        }
        // Merge style objects so default styles aren't wiped out by instance-level style
        if (isObject(finalDefaultProps.style) && isObject(props.style)) {
            finalProps.style = isDefaultPropsFunction
                ? { ...props.style, ...finalDefaultProps.style }
                : { ...finalDefaultProps.style, ...props.style };
        }
        return (_jsx(ComponentWithClassName, { ref: ref, ...finalProps, ...classNameProps }));
    });
    WithProps.displayName = `withProps(${Component?.displayName || Component?.name || "Component"})`;
    return WithProps;
}
