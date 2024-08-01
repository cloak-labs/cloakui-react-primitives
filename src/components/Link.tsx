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
  internalLinkComponent?: "a" | TInternalLink; // keyof JSX.IntrinsicElements
  /** Provide your site's frontend URL in order for internal links to render properly server-side */
  frontendUrl?: string;
};

export const Link = React.forwardRef<React.ElementRef<"a">, LinkProps>(
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
    if (!href || href == "#")
      return (
        <Fallback ref={ref} {...props}>
          {children}
        </Fallback>
      );

    let currentURL;
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      currentURL = `${url.protocol}//${url.host}`;
    } else {
      // when rendering server-side, we resort to user manually providing their frontend URL via prop:
      currentURL = frontendUrl;
    }

    const isInternalLink =
      href &&
      (href.startsWith(currentURL) ||
        (href.startsWith("/") && !href.startsWith("/api/")));

    const isAnchorLink = href && href.startsWith("#");

    if (isInternalLink) {
      const Comp = internalLinkComponent;
      return React.createElement(Comp, { ref, href, ...props }, children); // using React.createElement because it allows for explicit typing; before the inference was too complex and caused TS error
    }

    if (isAnchorLink) {
      return (
        <a ref={ref} href={href} {...props}>
          {children}
        </a>
      );
    }

    if (
      !href.startsWith("/") &&
      !href.startsWith("http") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:")
    )
      href = `https://${href}`;

    return (
      <a
        target={openInNewTab ? "_blank" : ""}
        rel="noopener noreferrer"
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
