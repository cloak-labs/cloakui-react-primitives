import type { ComponentStyleProps, GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import { DeepPartial } from "ts-essentials";
import { ClassValue } from "@cloakui/styles";
export type CSSPropertiesAndVariables = CSSProperties & {
    [key: `--${string}`]: string | number;
};
export type ReactStyleProps = ComponentStyleProps<CSSPropertiesAndVariables>;
export type ReactStylePropsWithCx = ComponentStyleProps<CSSPropertiesAndVariables, ClassValue>;
export type ReactGenericParentComponent<TClassName = string, TChildren = ReactNode> = GenericParentComponent<CSSPropertiesAndVariables, TClassName, TChildren>;
export type ReactGenericParentComponentWithCx<TChildren = ReactNode> = ReactGenericParentComponent<ClassValue, TChildren>;
export type Component = React.ComponentType<any> | keyof HTMLElementTagNameMap;
export type PropsObject<T extends Component> = React.ComponentPropsWithoutRef<T>;
export type DefaultPropsObject<T extends Component> = DeepPartial<PropsObject<T>>;
export type DefaultPropsFunction<T extends Component> = (props: PropsObject<T>) => DefaultPropsObject<T>;
export type DefaultProps<T extends Component> = DefaultPropsObject<T> | DefaultPropsFunction<T>;
