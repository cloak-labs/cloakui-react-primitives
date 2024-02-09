import parse, {
  type Element,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import { type ReactNode } from "react";

/**
 * A simple wrapper around html-react-parser's `parse` function, where we
 * first check if the input is actually a string, and if not we don't parse it.
 */
export const parseHtml = (
  html: string | ReactNode,
  options?: HTMLReactParserOptions
) => (typeof html == "string" ? parse(html, options) : html);

/**
 * Solution for html-react-parser `replace` method to check if domNode is
 * an Element and type assert it if so (using a type predicate)
 * --> solution taken from: https://github.com/remarkablemark/html-react-parser/issues/633#issuecomment-1485590066
 */
export const isElement = (domNode: DOMNode): domNode is Element => {
  const isTag = ["tag", "script"].includes(domNode.type);
  const hasAttributes = (domNode as Element).attribs !== undefined;

  return isTag && hasAttributes;
};

export type HTMLTagNames = keyof JSX.IntrinsicElements;

/**
 * A useful helper to check if a html-react-parser DOMNode is a certain HTML tag, such as "p" or "div",
 * also calling `isElement` under-the-hood to type assert and solve TS issues.
 */
export const isTag = (
  domNode: DOMNode,
  tagName: HTMLTagNames
): domNode is Element => {
  if (!isElement(domNode)) return false;
  if (domNode.name === tagName) return true;
};
