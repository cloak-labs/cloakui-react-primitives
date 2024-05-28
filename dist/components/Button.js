import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonStyles, ButtonVariants } from "@cloakui/styles";
const Button = React.forwardRef(({ className, variants, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (_jsx(Component, { className: variants ? buttonStyles({ ...variants, className }) : className, ref: ref, ...props }));
});
Button.displayName = "Button";
export { Button, buttonStyles, ButtonVariants };
