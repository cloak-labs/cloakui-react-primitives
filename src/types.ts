import type {
  ComponentStyleProps,
  GenericParentComponent,
} from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import { DeepPartial } from "ts-essentials";
import { ClassValue } from "@cloakui/styles";

export type CSSPropertiesAndVariables = CSSProperties & {
  [key: `--${string}`]: string | number;
};
export type ReactStyleProps = ComponentStyleProps<CSSPropertiesAndVariables>;
export type ReactStylePropsWithCx = ComponentStyleProps<
  CSSPropertiesAndVariables,
  ClassValue
>;
export type ReactGenericParentComponent<
  TClassName = string,
  TChildren = ReactNode,
> = GenericParentComponent<CSSPropertiesAndVariables, TClassName, TChildren>;
export type ReactGenericParentComponentWithCx<TChildren = ReactNode> =
  ReactGenericParentComponent<ClassValue, TChildren>;

// used in `withProps`:
// Must extend React.ElementType so React.ComponentRef<T> is valid (React 19).
export type Component = React.ElementType;

export type PropsObject<T extends Component> =
  T extends React.ForwardRefExoticComponent<infer P>
    ? React.PropsWithoutRef<P>
    : T extends React.FunctionComponent<infer P>
      ? P
      : T extends keyof HTMLElementTagNameMap
        ? React.ComponentPropsWithoutRef<T>
        : T extends React.ComponentType<infer P>
          ? P
          : never;
export type DefaultPropsObject<T extends Component> = DeepPartial<
  PropsObject<T>
>;
export type DefaultPropsFunction<T extends Component> = (
  props: PropsObject<T>,
) => DefaultPropsObject<T>;
export type DefaultProps<T extends Component> =
  | DefaultPropsObject<T>
  | DefaultPropsFunction<T>;

// Helper type to make keys optional.
// Important: this must distribute over unions to preserve discriminated unions
// (e.g. GridComponentProps = GridTypeProps | MasonryTypeProps).
type MakeOptional<T, K extends PropertyKey> = T extends any
  ? Omit<T, Extract<K, keyof T>> & Partial<Pick<T, Extract<K, keyof T>>>
  : never;

// Extract keys from default props (handles both object and function cases)
type ExtractDefaultPropKeys<T extends Component, D extends DefaultProps<T>> =
  D extends DefaultPropsFunction<T>
    ? keyof ReturnType<D>
    : D extends DefaultPropsObject<T>
      ? keyof D
      : never;

// Result props type where default props become optional
export type WithPropsResult<
  T extends Component,
  D extends DefaultProps<T>,
> = MakeOptional<PropsObject<T>, ExtractDefaultPropKeys<T, D>>;
