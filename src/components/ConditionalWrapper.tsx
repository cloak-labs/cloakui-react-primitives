import { type ReactNode } from "react";

export type ConditionalWrapperProps = {
  condition: (() => boolean) | boolean | string;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => {
  const valid = typeof condition === "function" ? condition() : condition;
  return valid ? wrapper(children) : children;
};
