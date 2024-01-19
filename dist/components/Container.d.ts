import { ReactNode } from "react";
export type ContainerProps = {
    className?: string;
    innerClassName?: string;
    children: ReactNode;
    as?: keyof JSX.IntrinsicElements;
};
export declare function Container({ className, innerClassName, children, as, ...props }: ContainerProps): import("react/jsx-runtime").JSX.Element;
