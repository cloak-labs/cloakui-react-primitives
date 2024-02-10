import { cx } from "@cloakui/styles";
import { TTypographyListProps } from "@cloakui/types";
import { CSSProperties, FC, ReactNode } from "react";
import { DynamicHtmlParser } from "./DynamicHtmlParser";

export const TypographyList: FC<
  TTypographyListProps<CSSProperties, ReactNode>
> = ({ as: Element, className, style, children, ...props }) => {
  return (
    <Element
      className={cx("ml-6 list-disc space-y-3", className)}
      style={style}
      {...props}
    >
      <DynamicHtmlParser>{children}</DynamicHtmlParser>
    </Element>
  );
};
