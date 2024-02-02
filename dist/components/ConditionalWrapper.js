"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalWrapper = void 0;
const ConditionalWrapper = ({ condition, wrapper, children, }) => {
    const passesCondition = typeof condition === "function" ? condition() : condition;
    return passesCondition ? wrapper(children) : children;
};
exports.ConditionalWrapper = ConditionalWrapper;