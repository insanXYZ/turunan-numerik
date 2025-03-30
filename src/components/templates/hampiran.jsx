import { useState } from "react";
import ResultFormula from "../organisms/result_formula";
import SelectFormula from "../organisms/select_formula";
import FormFormula from "../organisms/form_formula";

export default ({ optionFormulas }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [val, setVal] = useState({ id: selectedIndex });

  function handleChangeSelect(id) {
    setSelectedIndex(id);
    setVal({ id: id });
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <SelectFormula
          onChangeSelect={handleChangeSelect}
          optionFormulas={optionFormulas}
        />
        <FormFormula
          optionFormulas={optionFormulas}
          selectedIndex={selectedIndex}
          setValState={setVal}
        />
      </div>
      <ResultFormula
        optionFormulas={optionFormulas}
        selectedIndex={selectedIndex}
        val={val}
      />
    </div>
  );
};
