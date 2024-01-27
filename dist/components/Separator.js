"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const Separator = ({ className, ...props }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.separatorStyles)({ className }), ...props });
};
exports.Separator = Separator;
