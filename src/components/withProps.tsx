import React from "react";
import { cx } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
import type { Component, DefaultProps, DefaultPropsFunction } from "../types";

export function withProps<T extends Component>(
  Component: T,
  defaultProps: DefaultProps<T>
) {
  const ComponentWithClassName = Component as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<T> & React.RefAttributes<React.ElementRef<T>>
  >;

  const WithProps = React.forwardRef<
    React.ElementRef<T>,
    React.ComponentProps<T>
  >(function ExtendComponent(props, ref) {
    const isDefaultPropsFunction = typeof defaultProps === "function";
    const finalDefaultProps = isDefaultPropsFunction
      ? (defaultProps as DefaultPropsFunction<T>)(props)
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

    return (
      <ComponentWithClassName
        ref={ref}
        {...finalProps}
        className={cx(
          (finalDefaultProps as any).className,
          (props as any).className
        )}
      />
    );
  });

  WithProps.displayName = `withProps(${
    (Component as any)?.displayName || (Component as any)?.name || "Component"
  })`;

  return WithProps;
}
