import { jsx as _jsx } from "react/jsx-runtime";
import { separatorStyles } from "@cloakui/styles";
export const Separator = ({ className, ...props }) => {
    return _jsx("div", { className: separatorStyles({ className }), ...props });
};
