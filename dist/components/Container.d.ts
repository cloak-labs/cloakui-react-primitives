/// <reference types="react" />
import { ContainerProps } from "@cloakui/types";
export type ReactContainerProps = ContainerProps<React.CSSProperties, React.ReactNode, keyof JSX.IntrinsicElements>;
export declare function Container({ className, cntrClassName, children, as, ...props }: ReactContainerProps): import("react/jsx-runtime").JSX.Element;
