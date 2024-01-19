import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH1: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h1"
      baseClassName="scroll-m-20 text-3xl xs:text-4xl text-balance font-bold tracking-tight lg:text-5xl"
      {...props}
    />
  );
};
