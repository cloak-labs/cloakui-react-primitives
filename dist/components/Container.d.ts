import React from "react";
import { ContainerProps } from "@cloakui/types";
export type ReactContainerProps = ContainerProps<React.CSSProperties, React.ReactNode | (() => React.ReactNode), "div" | "header" | "main" | "section" | "article" | "aside" | "footer">;
export declare const Container: React.ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<React.CSSProperties> & {
    children?: React.ReactNode | (() => React.ReactNode);
} & {
    cntrClassName?: string;
    as?: "article" | "main" | "aside" | "div" | "footer" | "header" | "section";
} & React.RefAttributes<HTMLDivElement>>;
