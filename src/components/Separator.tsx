import React from "react";
import { separatorStyles } from "@cloakui/styles";
import { type TSeparatorProps } from "@cloakui/types";

export const Separator: React.FC<TSeparatorProps<React.CSSProperties>> = ({
  className,
  ...props
}) => <div className={separatorStyles({ className })} {...props} />;
