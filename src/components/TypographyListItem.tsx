import { DynamicHtmlParser } from "./DynamicHtmlParser";
import { cx, type ClassValue } from "@cloakui/styles";
import type { TTypographyListItemProps } from "@cloakui/types";
import type { CSSProperties, FC, ReactNode } from "react";

export const TypographyListItem: FC<
  TTypographyListItemProps<CSSProperties, ClassValue, ReactNode>
> = ({ content, className, children, ...props }) => (
  <li className={cx("list-circle leading-7 pl-2", className)} {...props}>
    <DynamicHtmlParser>{content}</DynamicHtmlParser>
    <DynamicHtmlParser>{children}</DynamicHtmlParser>
  </li>
);
