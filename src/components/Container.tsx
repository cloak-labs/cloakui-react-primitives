import { cx } from "@cloakui/styles";
import { ReactNode } from "react";

export type ContainerProps = {
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export function Container({
  className,
  innerClassName,
  children,
  as = "div",
  ...props
}: ContainerProps) {
  const Element = as;
  const defaultInnerClassNames =
    "px-4 sm:px-6 lg:px-9 mx-auto max-w-7xl lg:max-w-8xl";
  const hasBgColor = className?.includes("bg-") || false;

  return (
    <Element
      className={cx(
        !hasBgColor && defaultInnerClassNames,
        !hasBgColor && innerClassName,
        className
      )}
      {...props}
    >
      {hasBgColor ? (
        <div className={cx(defaultInnerClassNames, innerClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </Element>
  );
}
