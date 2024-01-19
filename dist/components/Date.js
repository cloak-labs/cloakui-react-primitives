"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@cloakui/utils");
const Date = ({ dateTime, locales, options, className, ...props }) => ((0, jsx_runtime_1.jsxs)("dl", { className: className, ...props, children: [(0, jsx_runtime_1.jsx)("dt", { className: "sr-only", children: "Date" }), (0, jsx_runtime_1.jsx)("dd", { className: "text-root-dim text-sm leading-6", children: (0, jsx_runtime_1.jsx)("time", { dateTime: dateTime, children: (0, utils_1.formatDate)({ dateTime, locales, options }) }) })] }));
exports.Date = Date;
