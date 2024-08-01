import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "./Container";
export function withContainer(component) {
    const Component = component;
    return React.forwardRef(function WrappedComponent(props, ref) {
        return (_jsx(Container, { ref: ref, ...props, children: _jsx(Component, {}) }));
    });
}
