import React from "react";
import { DeepPartial } from "ts-essentials";
/**
 * Set default props with `React.forwardRef`.
 *
 * - Use `withCn` if only setting `className`
 */
type Component = React.ComponentType<any> | keyof HTMLElementTagNameMap;
type PropsObject<T extends Component> = React.ComponentPropsWithoutRef<T>;
type DefaultProps<T extends Component> = DeepPartial<PropsObject<T>> | ((props: PropsObject<T>) => DeepPartial<PropsObject<T>>);
export declare function withProps<T extends Component>(Component: T, defaultProps: DefaultProps<T>): any;
export {};
