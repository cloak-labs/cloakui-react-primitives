/// <reference types="node" />
import React from "react";
import { UrlObject } from "url";
type Url = string | UrlObject;
export type LinkProps<TInternalLink extends React.ComponentType<{
    href: Url;
}> = React.ComponentType<{
    href: Url;
}>> = React.ComponentPropsWithoutRef<"a"> & {
    ref?: React.Ref<any>;
    children: string | React.ReactNode;
    openInNewTab?: boolean;
    internalLinkComponent?: "a" | TInternalLink;
};
export declare const Link: any;
export {};
