import { cx } from "@cloakui/styles";
import { ContainerProps } from "@cloakui/types";

export type ReactContainerProps = ContainerProps<
  React.CSSProperties,
  React.ReactNode,
  keyof JSX.IntrinsicElements
>;

export function Container({
  className = "",
  cntrClassName = "",
  children,
  as = "div",
  ...props
}: ReactContainerProps) {
  const Element = as;
  const hasBgColor = className?.includes("bg-") || false;

  return (
    <Element className={cx(!hasBgColor && cntrClassName, className)} {...props}>
      {hasBgColor ? <div className={cntrClassName}>{children}</div> : children}
    </Element>
  );
}
