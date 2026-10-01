import React from "react";
import { isAnchorLink } from "@cloakui/utils";

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

function stripTrailingSlash(url: string): string {
  if (!url) return "";
  if (url === "/") return url;
  return url.replace(/\/$/, "");
}

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
  fallbackAs?: React.ElementType | null;
  internalLinkComponent?: TInternalLink | keyof React.JSX.IntrinsicElements;
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
    if (!href || href === "#") {
      if (!Fallback) return children;
      if (React.isValidElement(Fallback)) return Fallback;
      // Fragments can't accept refs (React 19 warns / IO consumers crash).
      const fallbackProps =
        Fallback === React.Fragment ? { ...props } : { ref, ...props };
      return React.createElement(Fallback, fallbackProps, children);
    }

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
      return React.createElement(
        Comp,
        { ref, href: stripTrailingSlash(href), ...props },
        children
      );
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
