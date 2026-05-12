import React from "react";
import { cx, cxDeep } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
import type {
  Component,
  DefaultProps,
  DefaultPropsFunction,
  WithPropsResult,
} from "../types";
import { isObject } from "@cloakui/utils";

export function withProps<
  T extends Component,
  D extends DefaultProps<T> = DefaultProps<T>
>(Component: T, defaultProps: D) {
  const ComponentWithClassName = Component as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<T> & React.RefAttributes<React.ElementRef<T>>
  >;

  const WithProps = React.forwardRef<
    React.ElementRef<T>,
    WithPropsResult<T, D>
  >(function ExtendComponent(props, ref) {
    const isDefaultPropsFunction = typeof defaultProps === "function";
    const finalDefaultProps = isDefaultPropsFunction
      ? (defaultProps as DefaultPropsFunction<T>)(
          props as React.ComponentPropsWithoutRef<T>
        )
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
    const finalProps = (
      isDefaultPropsFunction
        ? deepMerge(props, finalDefaultProps)
        : deepMerge(finalDefaultProps, props)
    ) as React.ComponentPropsWithoutRef<T>;

    const classNameProps = (() => {
      const keys = new Set<string>(["className"]);
      const defaultKeys = Object.keys(finalDefaultProps as any);
      const instanceKeys = Object.keys(props as any);

      for (const key of [...defaultKeys, ...instanceKeys]) {
        if (key.endsWith("ClassName")) keys.add(key);
      }

      const merged: Record<string, unknown> = {};
      for (const key of keys) {
        merged[key] = cx((finalDefaultProps as any)[key], (props as any)[key]);
      }

      return merged as Partial<React.ComponentPropsWithoutRef<T>>;
    })();

    // If both defaultProps and instance-level props have classNames objects, deep merge them using cxDeep
    if (
      isObject((finalDefaultProps as any).classNames) &&
      isObject((props as any).classNames)
    ) {
      (finalProps as any).classNames = cxDeep(
        (finalDefaultProps as any).classNames as Record<string, unknown>,
        (props as any).classNames as Record<string, unknown>
      );
    }

    // Merge style objects so default styles aren't wiped out by instance-level style
    if (isObject((finalDefaultProps as any).style) && isObject((props as any).style)) {
      (finalProps as any).style = isDefaultPropsFunction
        ? { ...(props as any).style, ...(finalDefaultProps as any).style }
        : { ...(finalDefaultProps as any).style, ...(props as any).style };
    }

    return (
      <ComponentWithClassName
        ref={ref}
        {...finalProps}
        {...classNameProps}
      />
    );
  });

  WithProps.displayName = `withProps(${
    (Component as any)?.displayName || (Component as any)?.name || "Component"
  })`;

  return WithProps;
}
