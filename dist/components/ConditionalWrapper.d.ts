import { ReactNode } from "react";
export interface ConditionalWrapperProps {
    condition: (() => boolean) | boolean | string;
    wrapper: (children: ReactNode) => ReactNode;
    children: ReactNode;
}
export declare const ConditionalWrapper: ({ condition, wrapper, children, }: ConditionalWrapperProps) => ReactNode;
//# sourceMappingURL=ConditionalWrapper.d.ts.map