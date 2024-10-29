import { DynamicHtmlParser } from "./DynamicHtmlParser";
import type { CSSProperties, FC } from "react";
import type { TTypographyProps } from "@cloakui/types";
import type { ReactNode } from "react";

export type TypographyProps<TClassName = string> = TTypographyProps<
  CSSProperties,
  TClassName,
  ReactNode
>;

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
  children,
  ...props
}) => (
  <Element {...props}>
    <DynamicHtmlParser>{children}</DynamicHtmlParser>
  </Element>
);
