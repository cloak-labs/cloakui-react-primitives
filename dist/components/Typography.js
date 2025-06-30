import { jsx as _jsx } from "react/jsx-runtime";
export const Typography = ({ as: Element, children, ...props }) => {
    return _jsx(Element, { ...props, children: children });
};
