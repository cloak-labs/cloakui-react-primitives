import type { CSSProperties, FC } from "react";
import type { TTypographyProps } from "@cloakui/types";
import type { ReactNode } from "react";
import { DynamicHtmlParser } from "./DynamicHtmlParser";

export type TypographyProps = TTypographyProps<CSSProperties, ReactNode>;

export type BaseTypographyProps = TypographyProps & {
  as:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "div"
    | "blockquote";
};

export const Typography: FC<BaseTypographyProps> = ({
  as: Element,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <Element className={className} style={style} {...props}>
      <DynamicHtmlParser>{children}</DynamicHtmlParser>
    </Element>
  );
};
