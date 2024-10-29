import * as React from "react";
import { buttonStyles, type ButtonVariants, type ClassValue } from "@cloakui/styles";
type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    variants?: ButtonVariants;
    children?: string | React.ReactNode;
    asChild?: boolean;
    className?: ClassValue;
};
declare const Button: React.ForwardRefExoticComponent<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    variants?: ButtonVariants;
    children?: string | React.ReactNode;
    asChild?: boolean;
    className?: ClassValue;
} & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonStyles, ButtonProps };
