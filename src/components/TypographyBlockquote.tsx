import type { FC } from "react";
import { cx } from "@cloakui/styles";
import type { TTypographyBlockquoteProps } from "@cloakui/types";

export const TypographyBlockquote: FC<TTypographyBlockquoteProps> = ({
  className,
  children,
  citation,
  citationClassName,
  ...props
}) => (
  <blockquote
    className={cx("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  >
    {children}
    <p className={cx("font-medium mt-4", citationClassName)}>{citation}</p>
  </blockquote>
);
