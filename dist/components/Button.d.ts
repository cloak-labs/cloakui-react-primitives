import * as React from "react";
import { buttonStyles, ButtonVariants } from "@cloakui/styles";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variants?: ButtonVariants;
    children?: string | React.ReactNode;
    asChild?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variants?: ButtonVariants;
    children?: string | React.ReactNode;
    asChild?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonStyles, ButtonProps };
