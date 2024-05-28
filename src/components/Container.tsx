import React from "react";
import { cx } from "@cloakui/styles";
import { ContainerProps } from "@cloakui/types";

export type ReactContainerProps = ContainerProps<
  React.CSSProperties,
  React.ReactNode | (() => React.ReactNode),
  "div" | "header" | "main" | "section" | "article" | "aside" | "footer"
>;

export const Container = React.forwardRef<HTMLDivElement, ReactContainerProps>(
  (
    { className = "", cntrClassName = "", children, as = "div", ...props },
    ref
  ) => {
    const Element = as;
    const hasBgColor = className?.includes("bg-") || false;
    const renderedChildren =
      typeof children == "function" ? children() : children;

    return (
      <Element
        ref={ref}
        className={cx(!hasBgColor && cntrClassName, className)}
        {...props}
      >
        {hasBgColor ? (
          <div className={cntrClassName}>{renderedChildren}</div>
        ) : (
          renderedChildren
        )}
      </Element>
    );
  }
);
