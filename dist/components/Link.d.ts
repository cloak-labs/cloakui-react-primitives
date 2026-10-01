import React from "react";
type UrlObject = {
    auth?: string | null;
    hash?: string | null;
    host?: string | null;
    hostname?: string | null;
    href?: string | null;
    pathname?: string | null;
    protocol?: string | null;
    search?: string | null;
    slashes?: boolean | null;
    port?: string | number | null;
    query?: string | null | Record<string, unknown>;
};
type Url = string | UrlObject;
export type LinkProps<TInternalLink extends React.ComponentType<{
    href: Url;
}> = React.ComponentType<{
    href: Url;
}>> = React.ComponentPropsWithoutRef<"a"> & {
    ref?: React.Ref<any>;
    children: string | React.ReactNode;
    openInNewTab?: boolean;
    fallbackAs?: React.ElementType | null;
    internalLinkComponent?: TInternalLink | keyof React.JSX.IntrinsicElements;
    /** Provide your site's frontend URL in order for internal links to render properly server-side */
    frontendUrl?: string;
};
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps<React.ComponentType<{
    href: Url;
}>>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};
//# sourceMappingURL=Link.d.ts.map