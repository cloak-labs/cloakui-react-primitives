import type { FC, ReactNode, CSSProperties, HTMLAttributes } from "react";
import type { TTypographyProps } from "@cloakui/types";
export type TypographyProps<TClassName = string> = TTypographyProps<CSSProperties, TClassName, ReactNode>;
export type BaseTypographyProps = TypographyProps & HTMLAttributes<HTMLElement> & {
    as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "blockquote";
};
export declare const Typography: FC<BaseTypographyProps>;
//# sourceMappingURL=Typography.d.ts.map