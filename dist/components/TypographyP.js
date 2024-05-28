import { Typography } from "./Typography";
import { withProps } from "./withProps";
export const TypographyP = withProps(Typography, {
    as: "p",
    className: "[&:not(:first-child)]:mt-4",
});
