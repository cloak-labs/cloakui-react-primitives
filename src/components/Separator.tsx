import React from "react";
import { cx, type ClassValue } from "@cloakui/styles";
import { type TSeparatorProps } from "@cloakui/types";

export const Separator: React.FC<
  TSeparatorProps<React.CSSProperties, ClassValue>
> = ({ className, ...props }) => (
  <div
    className={cx("h-px w-full border-t border-root", className)}
    {...props}
  />
);
