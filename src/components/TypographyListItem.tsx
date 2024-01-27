import { cx } from "@cloakui/styles";
import { TTypographyListItemProps } from "@cloakui/types";
import { CSSProperties, FC, ReactNode } from "react";
import { parseHtml } from "../utils/htmlParserUtils";

export const TypographyListItem: FC<
  TTypographyListItemProps<CSSProperties, ReactNode>
> = ({ content, className, style, children, ...props }) => {
  return (
    <>
      <li
        className={cx("list-circle leading-7 pl-2", className)}
        style={style}
        {...props}
      >
        {parseHtml(content)}
      </li>
      {parseHtml(children)}
    </>
  );
};
