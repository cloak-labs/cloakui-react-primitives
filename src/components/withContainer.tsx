import React from "react";
import type { Component, PropsObject } from "../types";
import { Container } from "./Container";

export function withContainer<T extends Component>(component: T) {
  const Component = component as React.FC<{ children?: React.ReactNode }>;

  return React.forwardRef<HTMLDivElement, PropsObject<T>>(
    function WrappedComponent(props, ref) {
      const { children, ...rest } = props;
      return (
        <Container ref={ref} {...rest}>
          {children ? <Component>{children}</Component> : <Component />}
        </Container>
      );
    }
  );
}
