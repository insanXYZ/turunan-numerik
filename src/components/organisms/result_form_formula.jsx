export default ({ val, optionFormulas, selectedIndex }) => {
  const ResultHandler = optionFormulas[selectedIndex].renderResultHandler;

  return (
    val != null && val.id == selectedIndex && <ResultHandler stateVal={val} />
  );
};
