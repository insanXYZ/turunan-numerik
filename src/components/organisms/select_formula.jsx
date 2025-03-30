import Label from "../moleculs/label";
import SelectFormula from "../moleculs/select_formula";

export default ({ optionFormulas, onChangeSelect }) => {
  return (
    <>
      <Label>Rumus</Label>
      <SelectFormula
        className={"w-full"}
        options={optionFormulas}
        onChange={onChangeSelect}
      />
    </>
  );
};
