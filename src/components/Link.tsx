import React from "react";
import { isAnchorLink } from "@cloakui/utils";
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
      currentURL = frontendUrl;
    }

    const hrefString = href.toString();

    const isInternalLink =
      href &&
      (hrefString.startsWith(currentURL || "") ||
        (hrefString.startsWith("/") && !hrefString.startsWith("/api/")));

    if (isAnchorLink(hrefString, currentURL)) {
      return React.createElement(
        "a",
        { ref, href: hrefString, ...props },
        children
      );
    }

    if (isInternalLink) {
      const Comp = internalLinkComponent as React.ElementType;
      return React.createElement(Comp, { ref, href, ...props }, children);
    }

    let finalHref = hrefString;
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
