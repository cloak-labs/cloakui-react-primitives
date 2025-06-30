import React from "react";
import { cx, type ClassValue } from "@cloakui/styles";
import type { TTypographyListProps } from "@cloakui/types";

// Create a generic version that handles the conditional ref type
export const TypographyList = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  TTypographyListProps<React.CSSProperties, ClassValue, React.ReactNode>
>(({ as: Element = "ul", className, children, ...props }, ref) => {
  return (
    <Element
      ref={ref as any}
      className={cx("ml-6 list-disc space-y-3", className)}
      {...props}
    >
      {children}
    </Element>
  );
});

TypographyList.displayName = "TypographyList";
