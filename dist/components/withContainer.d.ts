import React from "react";
import type { Component, PropsObject } from "../types";
export declare function withContainer<T extends Component>(component: T): React.ForwardRefExoticComponent<React.PropsWithoutRef<PropsObject<T>> & React.RefAttributes<HTMLDivElement>>;
