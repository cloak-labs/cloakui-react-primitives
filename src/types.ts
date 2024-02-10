import type {
  ComponentStyleProps,
  GenericParentComponent,
} from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";

export type ReactStyleProps = ComponentStyleProps<CSSProperties>;
export type ReactGenericParentComponent = GenericParentComponent<
  CSSProperties,
  ReactNode
>;
