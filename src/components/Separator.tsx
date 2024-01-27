import * as React from "react";
import { separatorStyles } from "@cloakui/styles";
import { TSeparatorProps } from "@cloakui/types";

export const Separator: React.FC<TSeparatorProps<React.CSSProperties>> = ({
  className,
  ...props
}) => {
  return <div className={separatorStyles({ className })} {...props} />;
};
