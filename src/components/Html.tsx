import { parseHtml } from "../utils/htmlParserUtils";

export function Html({ content, className, style, ...props }) {
  return (
    <div className={className} style={style} {...props}>
      {parseHtml(content)}
    </div>
  );
}
