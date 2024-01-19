import type { FC } from "react";
import { cx } from "@cloakui/styles";
import { TTypographyBlockquoteProps } from "@cloakui/types";

export const TypographyBlockquote: FC<TTypographyBlockquoteProps> = ({
  className,
  style,
  children,
  citation,
  citationClassName,
  ...props
}) => {
  return (
    <blockquote
      className={cx("mt-6 border-l-2 pl-6 italic", className)}
      style={style}
      {...props}
    >
      {children}
      <p className={cx("font-medium mt-4", citationClassName)}>{citation}</p>
    </blockquote>
  );
};
