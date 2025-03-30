import Label from "../moleculs/label";

export default ({ setValState, optionFormulas, selectedIndex }) => {
  const SelectedForm = optionFormulas[selectedIndex].renderFormHandler;

  return (
    <>
      <Label>Input</Label>
      <SelectedForm
        setValState={(o) => setValState({ ...o, id: selectedIndex })}
      />
    </>
  );
};
