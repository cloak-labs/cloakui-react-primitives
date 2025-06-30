import React from "react";
type WithHtmlContentProps = {
    children?: React.ReactNode;
};
type ComponentType<P = any> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>> | React.FunctionComponent<P> | React.ComponentClass<P>;
/**
 * HOC that conditionally renders children as HTML or React nodes
 * If children is a string and contains HTML, it uses dangerouslySetInnerHTML
 * Otherwise, it renders children directly
 */
export declare function withStringToHtml<P extends Partial<WithHtmlContentProps>>(Component: ComponentType<P>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<any>>;
export {};
