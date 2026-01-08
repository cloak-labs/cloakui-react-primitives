import React from "react";
import { cx } from "@cloakui/styles";
import { deepMerge } from "@kaelan/deep-merge-ts";
import type {
  Component,
  DefaultProps,
  DefaultPropsFunction,
  WithPropsResult,
} from "../types";

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

    return (
      <ComponentWithClassName
        ref={ref}
        {...finalProps}
        className={cx(
          (finalDefaultProps as any).className,
          (props as any).className
        )}
        {...("cntrClassName" in finalDefaultProps
          ? {
              cntrClassName: cx(
                finalDefaultProps.cntrClassName,
                (props as any).cntrClassName
              ),
            }
          : {})}
      />
    );
  });

  WithProps.displayName = `withProps(${
    (Component as any)?.displayName || (Component as any)?.name || "Component"
  })`;

  return WithProps;
}
