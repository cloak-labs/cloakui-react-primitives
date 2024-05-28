import { parseHtml } from "../utils/htmlParserUtils";
export const HtmlParser = ({ options, children, }) => {
    return parseHtml(children, options);
};
