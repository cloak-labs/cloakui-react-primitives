import React from "react";
import { parseHtml } from "../utils/htmlParserUtils";
import { type HTMLReactParserOptions } from "html-react-parser";

/**
 * HtmlParser is a simple React component wrapper around the parseHtml utilitiy function.
 * Why? So we can dynamically import it using React-specific lazy imports and avoid all
 * the HTMLParser JS ending up in First Load JS.
 */

export type HtmlParserProps = {
  options?: HTMLReactParserOptions;
  children: string | React.ReactNode;
};

export const HtmlParser: React.FC<HtmlParserProps> = ({
  options,
  children,
}) => {
  return <>{parseHtml(children, options)}</>;
};
