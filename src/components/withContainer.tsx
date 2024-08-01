import React from "react";
import type { Component, PropsObject } from "../types";
import { Container } from "./Container";

export function withContainer<T extends Component>(component: T) {
  const Component = component as React.FC;

  return React.forwardRef<HTMLDivElement, PropsObject<T>>(
    function WrappedComponent(props, ref) {
      return (
        <Container ref={ref} {...props}>
          <Component />
        </Container>
      );
    }
  );
}
