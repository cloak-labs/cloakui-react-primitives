/// <reference types="node" />
import type { ComponentStyleProps, GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ComponentType, ReactNode } from "react";
import { UrlObject } from "url";
type Url = string | UrlObject;
export type LinkProps<TInternalLink extends ComponentType<{
    href: Url;
}> = ComponentType<{
    href: Url;
}>> = React.ComponentPropsWithoutRef<"a"> & {
    ref?: React.Ref<any>;
    children: string | React.ReactNode;
    openInNewTab?: boolean;
    internalLinkComponent?: "a" | TInternalLink;
};
export type ReactStyleProps = ComponentStyleProps<CSSProperties>;
export type ReactGenericParentComponent = GenericParentComponent<CSSProperties, ReactNode>;
export {};
