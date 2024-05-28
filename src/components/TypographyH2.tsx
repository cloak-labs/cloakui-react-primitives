import { Typography } from "./Typography";
import { withProps } from "./withProps";

export const TypographyH2 = withProps(Typography, {
  as: "h2",
  className: "mt-8 first:mt-0",
});
