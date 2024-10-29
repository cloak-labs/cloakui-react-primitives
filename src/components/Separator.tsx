import React from "react";
import { separatorStyles, type ClassValue } from "@cloakui/styles";
import { type TSeparatorProps } from "@cloakui/types";

export const Separator: React.FC<
  TSeparatorProps<React.CSSProperties, ClassValue>
> = ({ className, ...props }) => (
  <div className={separatorStyles({ className })} {...props} />
);
