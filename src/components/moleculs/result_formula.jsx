export default ({ val, children }) => {
  if (Object.keys(val).length > 1) {
    return children;
  }
};
