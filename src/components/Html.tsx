import { DynamicHtmlParser } from "./DynamicHtmlParser";

export function Html({ content, className, style, ...props }) {
  return (
    <div className={className} style={style} {...props}>
      <DynamicHtmlParser>{content}</DynamicHtmlParser>
    </div>
  );
}
