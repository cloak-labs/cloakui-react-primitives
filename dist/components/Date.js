import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatDate } from "@cloakui/utils";
export const Date = ({ dateTime, locales, options, className, ...props }) => (_jsxs("dl", { className: className, ...props, children: [_jsx("dt", { className: "sr-only", children: "Date" }), _jsx("dd", { className: "text-root-dim text-sm leading-6", children: _jsx("time", { dateTime: dateTime, children: formatDate({ dateTime, locales, options }) }) })] }));
