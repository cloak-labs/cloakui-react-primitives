import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
const RefreshIcon = ({ className, ...props }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: cx("size-4", className), viewBox: "0 0 24 24", ...props, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" }) }));
export const SoftPageRefreshButton = ({ isRefreshing, onClick, className, ...props }) => {
    return (_jsx("div", { className: cx("fixed bottom-3 right-2 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-root-invert p-1.5 text-root-invert shadow-md hover:bg-root-invert/80", className), onClick: onClick, ...props, children: _jsx(RefreshIcon, { className: ["pointer-events-none", isRefreshing && "animate-spin"] }) }));
};
