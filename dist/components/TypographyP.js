"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyP = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = require("./Typography");
const TypographyP = (props) => {
    return ((0, jsx_runtime_1.jsx)(Typography_1.Typography, { as: "p", baseClassName: "text-base leading-7 [&:not(:first-child)]:mt-6", ...props }));
};
exports.TypographyP = TypographyP;
