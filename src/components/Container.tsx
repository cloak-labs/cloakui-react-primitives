import React from "react";
import type { ContainerProps } from "@cloakui/types";

export type ReactContainerProps = ContainerProps<
  React.CSSProperties,
  string,
  React.ReactNode | (() => React.ReactNode),
  "div" | "header" | "main" | "section" | "article" | "aside" | "footer"
>;

export const Container = React.forwardRef<HTMLDivElement, ReactContainerProps>(
  ({ children, as: Element = "div", ...props }, ref) => {
    const renderedChildren =
      typeof children == "function" ? children() : children;

    return (
      <Element ref={ref} {...props}>
        {renderedChildren}
      </Element>
    );
  }
);

Container.displayName = "Container";
