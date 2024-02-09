import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "./Typography";
export const TypographyH1 = (props) => {
    return (_jsx(Typography, { as: "h1", baseClassName: "scroll-m-20 text-3xl xs:text-4xl text-balance font-bold tracking-tight lg:text-5xl", ...props }));
};
