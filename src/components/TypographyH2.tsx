import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH2: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h2"
      baseClassName="scroll-m-20 mt-8 text-xl xs:text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  );
};
