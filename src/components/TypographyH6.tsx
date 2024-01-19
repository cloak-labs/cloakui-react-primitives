import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH6: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h6"
      baseClassName="scroll-m-20 text-sm font-medium tracking-tight"
      {...props}
    />
  );
};
