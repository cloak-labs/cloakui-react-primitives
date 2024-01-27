import { ReactElement } from "react";
export interface ConditionalWrapperProps {
    condition: (() => boolean) | boolean | string;
    wrapper: (children: ReactElement) => ReactElement;
    children: ReactElement;
}
export declare const ConditionalWrapper: ({ condition, wrapper, children, }: ConditionalWrapperProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
