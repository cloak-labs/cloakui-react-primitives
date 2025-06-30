import React from "react";
import { containsHtml } from "@cloakui/utils";

// Make children optional in the props type
type WithHtmlContentProps = {
  children?: React.ReactNode;
};

// Accept both ForwardRef components and regular function components
type ComponentType<P = any> =
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<P> & React.RefAttributes<any>
    >
  | React.FunctionComponent<P>
  | React.ComponentClass<P>;

/**
 * HOC that conditionally renders children as HTML or React nodes
 * If children is a string and contains HTML, it uses dangerouslySetInnerHTML
 * Otherwise, it renders children directly
 */
export function withStringToHtml<P extends Partial<WithHtmlContentProps>>(
  Component: ComponentType<P>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<any>
> {
  const WithStringToHtml = React.forwardRef<any, P>((props, ref) => {
    const { children, ...rest } = props;

    const supportsRef =
      typeof Component === "object" &&
      Component !== null &&
      "$$typeof" in (Component as ComponentType<P>) &&
      (Component as any).$$typeof === Symbol.for("react.forward_ref");

    if (typeof children === "string" && containsHtml(children)) {
      return supportsRef ? (
        <Component
          {...(rest as any)}
          ref={ref}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
        />
      ) : (
        <Component
          {...(rest as any)}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
        />
      );
    }

    return supportsRef ? (
      <Component {...(rest as any)} ref={ref}>
        {children}
      </Component>
    ) : (
      <Component {...(rest as any)}>{children}</Component>
    );
  });

  WithStringToHtml.displayName = `withStringToHtml(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithStringToHtml;
}
