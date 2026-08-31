import React from "react";
type WithChildren = {
    children?: React.ReactNode;
};
type AnyComponent = React.ForwardRefExoticComponent<any> | React.FunctionComponent<any> | React.ComponentClass<any>;
type PropsOf<C> = C extends React.ForwardRefExoticComponent<infer P> ? React.PropsWithoutRef<P> : C extends React.FunctionComponent<infer P> ? P : C extends React.ComponentClass<infer P> ? P : never;
/**
 * HOC that conditionally renders children as HTML or React nodes.
 * If `children` is a string and contains HTML, it gets rendered via dangerouslySetInnerHTML
 * Otherwise, the `children` are rendered directly.
 */
export declare function withStringToHtml<C extends AnyComponent>(Component: C): React.ForwardRefExoticComponent<React.PropsWithoutRef<PropsOf<C> & WithChildren> & React.RefAttributes<any>>;
export {};
//# sourceMappingURL=withStringToHtml.d.ts.map