import React, { Suspense } from "react";
import { containsHtml } from "@cloakui/utils";
import type { HtmlParserProps } from "./HtmlParser";

const LazyHtmlParser = React.lazy(() =>
  import("./HtmlParser").then((module) => ({ default: module.HtmlParser }))
);

export const DynamicHtmlParser: React.FC<HtmlParserProps> = ({
  options,
  children,
}) => (
  <>
    {typeof children == "string" && containsHtml(children) ? (
      <Suspense fallback={children}>
        <LazyHtmlParser options={options}>{children}</LazyHtmlParser>
      </Suspense>
    ) : (
      children
    )}
  </>
);
