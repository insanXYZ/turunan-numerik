import SelectFormula from "../moleculs/select_formula";

export default ({
  optionFormulas,
  selectedIndex,
  onChangeSelect,
  setValState,
}) => {
  const SelectedForm = optionFormulas[selectedIndex].renderFormHandler;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center gap-5">
          <div className="text-center w-1/5">rumus</div>
          <SelectFormula
            className={"w-4/5"}
            options={optionFormulas}
            onChange={onChangeSelect}
          />
        </div>
      </div>
      <SelectedForm
        setValState={(o) => setValState({ ...o, id: selectedIndex })}
      />
    </div>
  );
};
