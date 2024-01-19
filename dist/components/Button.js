"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyles = exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = require("react");
const react_slot_1 = require("@radix-ui/react-slot");
const styles_1 = require("@cloakui/styles");
Object.defineProperty(exports, "buttonStyles", { enumerable: true, get: function () { return styles_1.buttonStyles; } });
const Button = React.forwardRef(({ className, variants, asChild = false, ...props }, ref) => {
    const Component = asChild ? react_slot_1.Slot : "button";
    return ((0, jsx_runtime_1.jsx)(Component, { className: variants ? (0, styles_1.buttonStyles)({ ...variants, className }) : className, ref: ref, ...props }));
});
exports.Button = Button;
Button.displayName = "Button";
