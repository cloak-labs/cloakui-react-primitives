import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { parseHtml } from "../utils/htmlParserUtils";
export const HtmlParser = ({ options, children, }) => {
    return _jsx(_Fragment, { children: parseHtml(children, options) });
};
