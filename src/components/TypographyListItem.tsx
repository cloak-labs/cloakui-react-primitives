import { cx } from "@cloakui/styles";
import { TTypographyListItemProps } from "@cloakui/types";
import { CSSProperties, FC, ReactNode } from "react";

export const TypographyListItem: FC<
  TTypographyListItemProps<CSSProperties, ReactNode>
> = ({ content, className, style, children, ...props }) => {
  return (
    <>
      <li
        className={cx("list-circle pl-2", className)}
        style={style}
        {...props}
      >
        {content}
      </li>
      {children}
    </>
  );
};
