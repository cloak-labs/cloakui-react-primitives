import React from "react";
import { cx, cxDeep } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
import { isObject } from "@cloakui/utils";
import type {
  Component,
  DefaultProps,
  WithPropsResult,
  DefaultPropsFunction,
  PropsObject,
} from "../types";

type DeepMergeOptionsSource = Record<string, unknown> & {
  __deepMergeOptions__: {
    invalidValues: unknown[];
  };
};

export function withProps<
  T extends Component,
  D extends DefaultProps<T> = DefaultProps<T>,
>(Component: T, defaultProps: D) {
  const ComponentWithClassName = Component as React.ForwardRefExoticComponent<
    PropsObject<T> & React.RefAttributes<React.ComponentRef<T>>
  >;

  const WithProps = React.forwardRef<
    React.ComponentRef<T>,
    WithPropsResult<T, D>
  >(function ExtendComponent(props, ref) {
    const isDefaultPropsFunction = typeof defaultProps === "function";
    const finalDefaultProps = isDefaultPropsFunction
      ? (defaultProps as DefaultPropsFunction<T>)(props as PropsObject<T>)
      : defaultProps;

    if (
      finalDefaultProps &&
      typeof finalDefaultProps === "object" &&
      "children" in finalDefaultProps
    ) {
      /**
       * Sometimes when the user passes a callback to the default props, the runtime `children` prop
       * is passed in, and `deepMerge` tries to merge it with the default props.children, which can
       * cause a "too much recursion" error.. this prevents that.
       */
      delete (finalDefaultProps as Record<string, unknown>).children;
    }

    // if the default props is a function, we make the defaults override instance-level props, because the intention is for the callback to enable the user to implement their own logic for merging instance-level props into their defaults.
    const target = isDefaultPropsFunction ? props : finalDefaultProps;
    let source = isDefaultPropsFunction ? finalDefaultProps : props;
    if (isObject(source) && source !== undefined) {
      // prevent assignment error by not mutating frozen/non-extensible objects
      // instead, make a shallow clone before adding __deepMergeOptions__
      source = {
        ...(source as Record<string, unknown>),
        __deepMergeOptions__: { invalidValues: [undefined] },
      } as typeof source & DeepMergeOptionsSource;
    }

    // deep merge the default props and instance-level props:
    const finalProps = (
      source ? deepMerge(target, source) : target
    ) as PropsObject<T>;

    const classNameProps = (() => {
      const keys = new Set<string>(["className"]);
      const defaultKeys = Object.keys(finalDefaultProps as any);
      const instanceKeys = Object.keys(props as any);

      for (const key of [...defaultKeys, ...instanceKeys]) {
        if (key.endsWith("ClassName")) keys.add(key);
      }

      // Merge top-level className and *ClassName props
      const merged: Record<string, unknown> = {};
      for (const key of keys) {
        merged[key] = cx((finalDefaultProps as any)[key], (props as any)[key]);
      }

      // Merge nested className inside *Props props
      const propKeys = new Set(
        [...defaultKeys, ...instanceKeys].filter((key) =>
          key.endsWith("Props"),
        ),
      );
      for (const propKey of propKeys) {
        const defaultPropValue = (finalDefaultProps as any)[propKey];
        const instancePropValue = (props as any)[propKey];

        if (
          (defaultPropValue &&
            isObject(defaultPropValue) &&
            "className" in defaultPropValue) ||
          (instancePropValue &&
            isObject(instancePropValue) &&
            "className" in instancePropValue)
        ) {
          merged[propKey] = {
            ...(defaultPropValue || {}),
            ...(instancePropValue || {}),
            className: cx(
              defaultPropValue?.className,
              instancePropValue?.className,
            ),
          };
        }
      }

      return merged as Partial<PropsObject<T>>;
    })();

    // If both defaultProps and instance-level props have classNames objects, deep merge them using cxDeep
    if (
      isObject((finalDefaultProps as any).classNames) &&
      isObject((props as any).classNames)
    ) {
      (finalProps as any).classNames = cxDeep(
        (finalDefaultProps as any).classNames as Record<string, unknown>,
        (props as any).classNames as Record<string, unknown>,
      );
    }

    // Merge style objects so default styles aren't wiped out by instance-level style
    // TODO: test if this is necessary, since the deepMerge above should handle this?
    if (
      isObject((finalDefaultProps as any).style) &&
      isObject((props as any).style)
    ) {
      (finalProps as any).style = isDefaultPropsFunction
        ? { ...(props as any).style, ...(finalDefaultProps as any).style }
        : { ...(finalDefaultProps as any).style, ...(props as any).style };
    }

    return (
      <ComponentWithClassName ref={ref} {...finalProps} {...classNameProps} />
    );
  });

  WithProps.displayName = `withProps(${
    (Component as any)?.displayName || (Component as any)?.name || "Component"
  })`;

  return WithProps;
}
