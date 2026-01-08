import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const Separator = ({ className, ...props }) => (_jsx("div", { className: cx("h-px w-full border-t border-root", className), ...props }));
