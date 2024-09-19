import type { ComponentStyleProps, GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import { DeepPartial } from "ts-essentials";
import { ClassValue } from "@cloakui/styles";
export type CSSPropertiesAndVariables = CSSProperties & {
    [key: `--${string}`]: string | number;
};
export type ReactStyleProps = ComponentStyleProps<CSSPropertiesAndVariables>;
export type ReactStylePropsWithCx = ComponentStyleProps<CSSPropertiesAndVariables, ClassValue>;
export type ReactGenericParentComponent = GenericParentComponent<CSSPropertiesAndVariables, ReactNode>;
export type Component = React.ComponentType<any> | keyof HTMLElementTagNameMap;
export type PropsObject<T extends Component> = React.ComponentPropsWithoutRef<T>;
export type DefaultProps<T extends Component> = DeepPartial<PropsObject<T>> | ((props: PropsObject<T>) => DeepPartial<PropsObject<T>>);
