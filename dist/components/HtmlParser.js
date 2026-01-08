import { jsx as _jsx } from "react/jsx-runtime";
import { withStringToHtml } from "./withStringToHtml";
export const HtmlParser = withStringToHtml((props) => _jsx("div", { ...props }));
