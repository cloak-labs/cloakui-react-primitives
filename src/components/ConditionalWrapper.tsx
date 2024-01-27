import { ReactElement } from "react";

export interface ConditionalWrapperProps {
  condition: (() => boolean) | boolean | string;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => {
  const passesCondition =
    typeof condition === "function" ? condition() : condition;
  return passesCondition ? wrapper(children) : children;
};
