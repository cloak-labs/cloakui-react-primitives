import type { CSSProperties, FC } from "react";
import type { TTypographyProps } from "@cloakui/types";
import type { ReactNode } from "react";
export type TypographyProps = TTypographyProps<CSSProperties, ReactNode>;
export type BaseTypographyProps = TypographyProps & {
    as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "blockquote";
    baseClassName?: string;
};
export declare const Typography: FC<BaseTypographyProps>;
