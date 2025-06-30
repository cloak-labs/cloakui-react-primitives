import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  cx,
  buttonStyles,
  type ButtonVariants,
  type ClassValue,
} from "@cloakui/styles";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  variants?: ButtonVariants;
  children?: string | React.ReactNode;
  asChild?: boolean;
  className?: ClassValue;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variants, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={
          variants ? buttonStyles({ ...variants, className }) : cx(className)
        }
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyles, ButtonProps };
