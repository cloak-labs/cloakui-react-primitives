export const ConditionalWrapper = ({ condition, wrapper, children, }) => {
    const valid = typeof condition === "function" ? condition() : condition;
    return valid ? wrapper(children) : children;
};
