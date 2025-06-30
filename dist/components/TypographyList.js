import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
// Create a generic version that handles the conditional ref type
export const TypographyList = React.forwardRef(({ as: Element = "ul", className, children, ...props }, ref) => {
    return (_jsx(Element, { ref: ref, className: cx("ml-6 list-disc space-y-3", className), ...props, children: children }));
});
TypographyList.displayName = "TypographyList";
