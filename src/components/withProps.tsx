import React from "react";
import { cx } from "@cloakui/styles";
import { DeepPartial } from "ts-essentials";
import { deepMerge } from "cloakcms";

/**
 * Set default props with `React.forwardRef`.
 *
 * - Use `withCn` if only setting `className`
 */

type Component = React.ComponentType<any> | keyof HTMLElementTagNameMap;
type PropsObject<T extends Component> = React.ComponentPropsWithoutRef<T>;
type DefaultProps<T extends Component> =
  | DeepPartial<PropsObject<T>>
  | ((props: PropsObject<T>) => DeepPartial<PropsObject<T>>);

export function withProps<T extends Component>(
  Component: T,
  defaultProps: DefaultProps<T>
) {
  const ComponentWithClassName = Component as React.FC<{ className: string }>;

  return React.forwardRef<React.ElementRef<T>, PropsObject<T>>(
    function ExtendComponent(props, ref) {
      const isDefaultPropsFunction = typeof defaultProps == "function";
      const finalDefaultProps = isDefaultPropsFunction
        ? (defaultProps as Function)(props)
        : defaultProps;

      // if the default props is a function, it means that default props should override instance-level props:
      const finalProps = isDefaultPropsFunction
        ? deepMerge(props, finalDefaultProps)
        : deepMerge(finalDefaultProps, props);
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
    }
  );
}
