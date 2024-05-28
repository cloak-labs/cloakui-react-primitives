export const ConditionalWrapper = ({ condition, wrapper, children, }) => {
    const passesCondition = typeof condition === "function" ? condition() : condition;
    return passesCondition ? wrapper(children) : children;
};
