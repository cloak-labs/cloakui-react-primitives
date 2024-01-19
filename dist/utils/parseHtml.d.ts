import { HTMLReactParserOptions } from "html-react-parser";
import { ReactNode } from "react";
export declare const parseHtml: (html: string | ReactNode, options?: HTMLReactParserOptions) => string | number | boolean | Iterable<ReactNode> | JSX.Element | JSX.Element[];
