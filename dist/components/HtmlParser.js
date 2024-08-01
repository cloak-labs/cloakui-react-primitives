import { parseHtml } from "../utils/htmlParserUtils";
export const HtmlParser = ({ options, children }) => parseHtml(children, options);
