import { DynamicHtmlParser } from "./DynamicHtmlParser";
import { cx } from "@cloakui/styles";
import type { TTypographyListProps } from "@cloakui/types";
import type { CSSProperties, FC, ReactNode } from "react";

export const TypographyList: FC<
  TTypographyListProps<CSSProperties, ReactNode>
> = ({ as: Element, className, children, ...props }) => (
  <Element className={cx("ml-6 list-disc space-y-3", className)} {...props}>
    <DynamicHtmlParser>{children}</DynamicHtmlParser>
  </Element>
);
