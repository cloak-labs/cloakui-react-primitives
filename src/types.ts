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
  TChildren = ReactNode
> = GenericParentComponent<CSSPropertiesAndVariables, TClassName, TChildren>;
export type ReactGenericParentComponentWithCx<TChildren = ReactNode> =
  ReactGenericParentComponent<ClassValue, TChildren>;

// used in `withProps`:
export type Component = React.ComponentType<any> | keyof HTMLElementTagNameMap;
export type PropsObject<T extends Component> =
  React.ComponentPropsWithoutRef<T>;
export type DefaultPropsObject<T extends Component> = DeepPartial<
  PropsObject<T>
>;
export type DefaultPropsFunction<T extends Component> = (
  props: PropsObject<T>
) => DefaultPropsObject<T>;
export type DefaultProps<T extends Component> =
  | DefaultPropsObject<T>
  | DefaultPropsFunction<T>;

// Helper type to make keys optional
type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Extract keys from default props (handles both object and function cases)
type ExtractDefaultPropKeys<
  T extends Component,
  D extends DefaultProps<T>
> = D extends DefaultPropsFunction<T>
  ? keyof ReturnType<D>
  : D extends DefaultPropsObject<T>
  ? keyof D
  : never;

// Result props type where default props become optional
export type WithPropsResult<
  T extends Component,
  D extends DefaultProps<T>
> = MakeOptional<PropsObject<T>, ExtractDefaultPropKeys<T, D>>;
