import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH3: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h3"
      baseClassName="scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight"
      {...props}
    />
  );
};
