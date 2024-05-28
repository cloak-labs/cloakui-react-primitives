import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonStyles, ButtonVariants } from "@cloakui/styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variants?: ButtonVariants;
  children?: string | React.ReactNode;
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variants, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={
          variants ? buttonStyles({ ...variants, className }) : className
        }
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonStyles, ButtonProps };
