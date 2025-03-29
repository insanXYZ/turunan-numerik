import SelectFormula from "../moleculs/select_formula";
import Label from "../moleculs/label";

export default ({
  optionFormulas,
  selectedIndex,
  onChangeSelect,
  setValState,
}) => {
  const SelectedForm = optionFormulas[selectedIndex].renderFormHandler;

  return (
    <div className="flex flex-col gap-5">
      <Label>Rumus</Label>
      <SelectFormula
        className={"w-full"}
        options={optionFormulas}
        onChange={onChangeSelect}
      />
      <Label>Input</Label>

      <SelectedForm
        setValState={(o) => setValState({ ...o, id: selectedIndex })}
      />
    </div>
  );
};
