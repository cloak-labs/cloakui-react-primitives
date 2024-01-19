import type {
  ComponentStyleProps,
  GenericParentComponent,
} from "@cloakui/types";
import type { CSSProperties, ComponentType, ReactNode } from "react";
import { UrlObject } from "url";

type Url = string | UrlObject;
export type LinkProps<
  TInternalLink extends ComponentType<{ href: Url }> = ComponentType<{
    href: Url;
  }>
> = React.ComponentPropsWithoutRef<"a"> & {
  // href?: string;
  ref?: React.Ref<any>;
  // className?: string;
  children: string | React.ReactNode;
  openInNewTab?: boolean;
  internalLinkComponent?: "a" | TInternalLink; // keyof JSX.IntrinsicElements
};

export type ReactStyleProps = ComponentStyleProps<CSSProperties>;
export type ReactGenericParentComponent = GenericParentComponent<
  CSSProperties,
  ReactNode
>;
