import Label from "../moleculs/label";

export default ({ setValState, optionFormulas, selectedIndex }) => {
  const SelectedForm = optionFormulas[selectedIndex].renderFormHandler;

  function setVal(o) {
    setValState({ id: selectedIndex });
    setTimeout(() => {
      setValState({ ...o, id: selectedIndex });
    }, 200);
  }

  return (
    <>
      <Label>Input</Label>
      <SelectedForm setValState={setVal} />
    </>
  );
};

// setValState={(o) => setValState({ ...o, id: selectedIndex })}
