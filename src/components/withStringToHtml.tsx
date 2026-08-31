import React from "react";
import { containsHtml } from "@cloakui/utils";

type WithChildren = {
  children?: React.ReactNode;
};

type AnyComponent =
  | React.ForwardRefExoticComponent<any>
  | React.FunctionComponent<any>
  | React.ComponentClass<any>;

type PropsOf<C> = C extends React.ForwardRefExoticComponent<infer P>
  ? React.PropsWithoutRef<P>
  : C extends React.FunctionComponent<infer P>
    ? P
    : C extends React.ComponentClass<infer P>
      ? P
      : never;

/**
 * HOC that conditionally renders children as HTML or React nodes.
 * If `children` is a string and contains HTML, it gets rendered via dangerouslySetInnerHTML
 * Otherwise, the `children` are rendered directly.
 */
export function withStringToHtml<C extends AnyComponent>(
  Component: C
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PropsOf<C> & WithChildren> & React.RefAttributes<any>
> {
  const WithStringToHtml = React.forwardRef<any, PropsOf<C> & WithChildren>(
    (props, ref) => {
    const { children, ...rest } = props;

    const supportsRef =
      typeof Component === "object" &&
      Component !== null &&
      "$$typeof" in (Component as AnyComponent) &&
      (Component as any).$$typeof === Symbol.for("react.forward_ref");

    if (typeof children === "string" && containsHtml(children)) {
      const unescapedString = children
        .replace(/\\n/g, "") // Remove literal \n
        .replace(/\\"/g, '"') // Replace \" with "
        .trim();

      return supportsRef ? (
        <Component
          {...(rest as any)}
          ref={ref}
          dangerouslySetInnerHTML={{
            __html: unescapedString,
          }}
        />
      ) : (
        <Component
          {...(rest as any)}
          dangerouslySetInnerHTML={{
            __html: unescapedString,
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
