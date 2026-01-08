import React from "react";
import type { Component, DefaultProps, WithPropsResult } from "../types";
export declare function withProps<T extends Component, D extends DefaultProps<T> = DefaultProps<T>>(Component: T, defaultProps: D): React.ForwardRefExoticComponent<React.PropsWithoutRef<WithPropsResult<T, D>> & React.RefAttributes<React.ElementRef<T>>>;
//# sourceMappingURL=withProps.d.ts.map