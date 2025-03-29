import { useState } from "react";
import FormSelectFormula from "../organisms/form_select_formula";
import ResultFormula from "../organisms/result_form_formula";

export default ({ optionFormulas }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [val, setVal] = useState({ id: selectedIndex });

  function handleChangeSelect(id) {
    setSelectedIndex(id);
    setVal({ id: id });
  }

  return (
    <div className="w-full flex flex-col gap-14">
      <FormSelectFormula
        optionFormulas={optionFormulas}
        selectedIndex={selectedIndex}
        onChangeSelect={handleChangeSelect}
        setValState={setVal}
      />
      <ResultFormula
        optionFormulas={optionFormulas}
        selectedIndex={selectedIndex}
        val={val}
      />
    </div>
  );
};
