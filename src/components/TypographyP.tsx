import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyP: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="p"
      baseClassName="text-base leading-7 [&:not(:first-child)]:mt-6"
      {...props}
    />
  );
};
