import React from "react";
import { type UrlObject } from "url";

type Url = string | UrlObject;
export type LinkProps<
  TInternalLink extends React.ComponentType<{
    href: Url;
  }> = React.ComponentType<{
    href: Url;
  }>
> = React.ComponentPropsWithoutRef<"a"> & {
  ref?: React.Ref<any>;
  children: string | React.ReactNode;
  openInNewTab?: boolean;
  fallbackAs?: React.ElementType;
  internalLinkComponent?: TInternalLink | keyof JSX.IntrinsicElements;
  /** Provide your site's frontend URL in order for internal links to render properly server-side */
  frontendUrl?: string;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      openInNewTab = true,
      internalLinkComponent = "a",
      frontendUrl,
      fallbackAs: Fallback = "span",
      children,
      ...props
    },
    ref
  ) => {
    if (!href || href === "#")
      return React.createElement(Fallback, { ref, ...props }, children);

    let currentURL: string | undefined;
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      currentURL = `${url.protocol}//${url.host}`;
    } else {
      // when rendering server-side, we resort to user manually providing their frontend URL via prop:
      currentURL = frontendUrl;
    }

    const isInternalLink =
      href &&
      (href.toString().startsWith(currentURL || "") ||
        (href.toString().startsWith("/") &&
          !href.toString().startsWith("/api/")));

    const isAnchorLink = href && href.toString().startsWith("#");

    if (isInternalLink) {
      const Comp = internalLinkComponent as React.ElementType;
      return React.createElement(Comp, { ref, href, ...props }, children);
    }

    if (isAnchorLink) {
      return React.createElement("a", { ref, href, ...props }, children);
    }

    let finalHref = href.toString();
    if (
      !finalHref.startsWith("/") &&
      !finalHref.startsWith("http") &&
      !finalHref.startsWith("mailto:") &&
      !finalHref.startsWith("tel:")
    )
      finalHref = `https://${finalHref}`;

    return React.createElement(
      "a",
      {
        target: openInNewTab ? "_blank" : undefined,
        rel: "noopener noreferrer",
        ref,
        href: finalHref,
        ...props,
      },
      children
    );
  }
);

Link.displayName = "Link";
