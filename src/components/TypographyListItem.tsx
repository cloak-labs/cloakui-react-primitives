import { withStringToHtml } from "./withStringToHtml";
import { cx, type ClassValue } from "@cloakui/styles";
import type { TTypographyListItemProps } from "@cloakui/types";
import type { CSSProperties, FC, ReactNode } from "react";

// Create a minimal wrapper component that can handle HTML content
const ContentWrapper = withStringToHtml(({ children, ...props }) => (
  <span {...props}>{children}</span>
));

export const TypographyListItem: FC<
  TTypographyListItemProps<CSSProperties, ClassValue, ReactNode>
> = ({ content, className, children, ...props }) => {
  return (
    <li
      className={cx("leading-7 pl-2 break-inside-avoid", className)}
      {...props}
    >
      <ContentWrapper>{content}</ContentWrapper>
      {children}
    </li>
  );
};
