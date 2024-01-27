"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const iconStyles = (0, styles_1.cva)({
    base: "size-5 text-root",
    variants: {
        style: {
            default: "",
            circle: "p-3 bg-primary/30 text-primary",
        },
    },
    defaultVariants: {
        style: "default",
    },
});
const Icon = ({ icon: Icon, style, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(Icon, { className: iconStyles({ style, className }), "aria-hidden": "true", ...props }));
};
exports.Icon = Icon;
