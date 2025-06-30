import React from "react";
import { withStringToHtml } from "./withStringToHtml";
import { ReactGenericParentComponent } from "../types";

export const HtmlParser: React.FC<ReactGenericParentComponent> =
  withStringToHtml(({ children }) => <div>{children}</div>);
