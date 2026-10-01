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
        if (finalDefaultProps &&
            typeof finalDefaultProps === "object" &&
            "children" in finalDefaultProps) {
            /**
             * Sometimes when the user passes a callback to the default props, the runtime `children` prop
             * is passed in, and `deepMerge` tries to merge it with the default props.children, which can
             * cause a "too much recursion" error.. this prevents that.
             */
            delete finalDefaultProps.children;
        }
        // if the default props is a function, we make the defaults override instance-level props, because the intention is for the callback to enable the user to implement their own logic for merging instance-level props into their defaults.
        const target = isDefaultPropsFunction ? props : finalDefaultProps;
        let source = isDefaultPropsFunction ? finalDefaultProps : props;
        if (isObject(source) && source !== undefined) {
            // prevent assignment error by not mutating frozen/non-extensible objects
            // instead, make a shallow clone before adding __deepMergeOptions__
            source = {
                ...source,
                __deepMergeOptions__: { invalidValues: [undefined] },
            };
        }
        // deep merge the default props and instance-level props:
        const finalProps = (source ? deepMerge(target, source) : target);
        const classNameProps = (() => {
            const keys = new Set(["className"]);
            const defaultKeys = Object.keys(finalDefaultProps);
            const instanceKeys = Object.keys(props);
            for (const key of [...defaultKeys, ...instanceKeys]) {
                if (key.endsWith("ClassName"))
                    keys.add(key);
            }
            // Merge top-level className and *ClassName props
            const merged = {};
            for (const key of keys) {
                merged[key] = cx(finalDefaultProps[key], props[key]);
            }
            // Merge nested className inside *Props props
            const propKeys = new Set([...defaultKeys, ...instanceKeys].filter((key) => key.endsWith("Props")));
            for (const propKey of propKeys) {
                const defaultPropValue = finalDefaultProps[propKey];
                const instancePropValue = props[propKey];
                if ((defaultPropValue &&
                    isObject(defaultPropValue) &&
                    "className" in defaultPropValue) ||
                    (instancePropValue &&
                        isObject(instancePropValue) &&
                        "className" in instancePropValue)) {
                    merged[propKey] = {
                        ...(defaultPropValue || {}),
                        ...(instancePropValue || {}),
                        className: cx(defaultPropValue?.className, instancePropValue?.className),
                    };
                }
            }
            return merged;
        })();
        // If both defaultProps and instance-level props have classNames objects, deep merge them using cxDeep
        if (isObject(finalDefaultProps.classNames) &&
            isObject(props.classNames)) {
            finalProps.classNames = cxDeep(finalDefaultProps.classNames, props.classNames);
        }
        // Merge style objects so default styles aren't wiped out by instance-level style
        // TODO: test if this is necessary, since the deepMerge above should handle this?
        if (isObject(finalDefaultProps.style) &&
            isObject(props.style)) {
            finalProps.style = isDefaultPropsFunction
                ? { ...props.style, ...finalDefaultProps.style }
                : { ...finalDefaultProps.style, ...props.style };
        }
        return (_jsx(ComponentWithClassName, { ref: ref, ...finalProps, ...classNameProps }));
    });
    WithProps.displayName = `withProps(${Component?.displayName || Component?.name || "Component"})`;
    return WithProps;
}
