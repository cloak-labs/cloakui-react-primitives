/// <reference types="node" />
import React from "react";
import { type UrlObject } from "url";
type Url = string | UrlObject;
export type LinkProps<TInternalLink extends React.ComponentType<{
    href: Url;
}> = React.ComponentType<{
    href: Url;
}>> = React.ComponentPropsWithoutRef<"a"> & {
    ref?: React.Ref<any>;
    children: string | React.ReactNode;
    openInNewTab?: boolean;
    fallbackAs?: React.ElementType;
    internalLinkComponent?: TInternalLink | keyof JSX.IntrinsicElements;
    /** Provide your site's frontend URL in order for internal links to render properly server-side */
    frontendUrl?: string;
};
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps<React.ComponentType<{
    href: Url;
}>>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
