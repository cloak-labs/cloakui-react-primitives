import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "./Typography";
export const TypographyP = (props) => {
    return (_jsx(Typography, { as: "p", baseClassName: "text-base leading-7 [&:not(:first-child)]:mt-6", ...props }));
};
