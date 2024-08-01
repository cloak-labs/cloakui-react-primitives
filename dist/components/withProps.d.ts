import React from "react";
import type { Component, DefaultProps, PropsObject } from "../types";
export declare function withProps<T extends Component>(Component: T, defaultProps: DefaultProps<T>): React.ForwardRefExoticComponent<React.PropsWithoutRef<PropsObject<T>> & React.RefAttributes<React.ElementRef<T>>>;
