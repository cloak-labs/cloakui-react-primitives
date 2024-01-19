import { getCMSInstance } from "cloakcms";
import React = require("react");
import { LinkProps } from "../types";

export const Link = React.forwardRef<React.ElementRef<"a">, LinkProps>(
  (
    {
      href,
      openInNewTab = true,
      internalLinkComponent = "a",
      children,
      ...props
    },
    ref
  ) => {
    if (!href)
      return (
        <span ref={ref} {...props}>
          {children}
        </span>
      );

    let currentURL;
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      currentURL = `${url.protocol}//${url.host}`;
    } else {
      currentURL = getCMSInstance().url;
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
