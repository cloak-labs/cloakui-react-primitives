import type { FC } from "react";
import { Typography, TypographyProps } from "./Typography";

export const TypographyH5: FC<TypographyProps> = (props) => {
  return (
    <Typography
      as="h5"
      baseClassName="scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    />
  );
};
