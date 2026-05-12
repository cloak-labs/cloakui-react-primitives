import { type ReactNode } from "react";
export type ConditionalWrapperProps = {
    condition: (() => boolean) | boolean | string;
    wrapper: (children: ReactNode) => ReactNode;
    children: ReactNode;
};
export declare const ConditionalWrapper: ({ condition, wrapper, children, }: ConditionalWrapperProps) => ReactNode;
//# sourceMappingURL=ConditionalWrapper.d.ts.map