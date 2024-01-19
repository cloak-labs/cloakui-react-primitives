import { cx } from "@cloakui/styles";
import type { CSSProperties, FC } from "react";
import type { TTypographyProps } from "@cloakui/types";
import type { ReactNode } from "react";
import { parseHtml } from "../utils/htmlParserUtils";

// Elements that wrap Typography should use `TypographyProps`:
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
  baseClassName?: string;
};

export const Typography: FC<BaseTypographyProps> = ({
  as: Element,
  baseClassName,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <Element className={cx(baseClassName, className)} style={style} {...props}>
      {parseHtml(children)}
    </Element>
  );
};
