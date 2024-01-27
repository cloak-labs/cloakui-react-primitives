import { cx } from "@cloakui/styles";
import { TTypographyListProps } from "@cloakui/types";
import { CSSProperties, FC, ReactNode } from "react";
import { parseHtml } from "../utils/htmlParserUtils";

export const TypographyList: FC<
  TTypographyListProps<CSSProperties, ReactNode>
> = ({ as: Element, className, style, children, ...props }) => {
  return (
    <Element
      className={cx("ml-6 list-disc space-y-3", className)}
      style={style}
      {...props}
    >
      {parseHtml(children)}
    </Element>
  );
};
