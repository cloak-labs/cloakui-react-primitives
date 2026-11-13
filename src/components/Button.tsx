"use client";

import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import {
  cx,
  buttonStyles,
  type ButtonVariants,
  type ClassValue,
} from "@cloakui/styles";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  variants?: ButtonVariants;
  children?: string | React.ReactNode;
  asChild?: boolean;
  className?: ClassValue;
};

/** Server Components hand client children to `asChild` as a lazy element. */
function unwrapLazyChild(children: React.ReactNode) {
  if (
    children &&
    typeof children === "object" &&
    (children as { $$typeof?: symbol }).$$typeof === Symbol.for("react.lazy")
  ) {
    const unwrapped = React.Children.toArray(children)[0];
    return unwrapped ?? children;
  }
  return children;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variants, asChild = false, children, type, ...props }, ref) => {
    const resolvedChildren = asChild ? unwrapLazyChild(children) : children;
    const child =
      asChild && React.isValidElement(resolvedChildren) ? resolvedChildren : null;

    return useRender({
      defaultTagName: "button",
      ref,
      render: child ?? undefined,
      props: mergeProps(
        {
          className: variants
            ? buttonStyles({ ...variants, className })
            : cx(className),
        },
        props,
        child ? {} : { children: resolvedChildren, type: type ?? "button" },
      ),
    });
  },
);
Button.displayName = "Button";

export { Button, buttonStyles, ButtonProps };
