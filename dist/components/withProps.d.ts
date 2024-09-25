import React from "react";
import type { Component, DefaultProps } from "../types";
export declare function withProps<T extends Component>(Component: T, defaultProps: DefaultProps<T>): React.ForwardRefExoticComponent<React.PropsWithoutRef<React.ComponentProps<T>> & React.RefAttributes<React.ElementRef<T>>>;
