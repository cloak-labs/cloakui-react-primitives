import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH4: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h4"
      baseClassName="scroll-m-20 text-base sm:text-lg font-semibold tracking-tight"
      {...props}
    />
  );
};
