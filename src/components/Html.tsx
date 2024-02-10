import React, { Suspense } from "react";

const DynamicHtmlParser = React.lazy(() =>
  import("./HtmlParser").then((module) => ({ default: module.HtmlParser }))
);

export function Html({ content, className, style, ...props }) {
  return (
    <div className={className} style={style} {...props}>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicHtmlParser>{content}</DynamicHtmlParser>
      </Suspense>
    </div>
  );
}
