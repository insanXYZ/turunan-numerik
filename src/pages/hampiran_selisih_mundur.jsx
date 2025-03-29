import { useState } from "react";
import Wrapper from "../components/layouts/wrapper";
import FormSelectFormula from "../components/organisms/form_select_formula";
import ResultFormula from "../components/organisms/result_form_formula";
import {
  FormTurunanPertamaOrde1,
  ResultTurunanPertamaOrde1,
} from "../components/organisms/hampiran_selisih_mundur/turunan_pertama_orde_1";

import {
  FormTurunanKeduaOrde1,
  ResultTurunanKeduaOrde1,
} from "../components/organisms/hampiran_selisih_mundur/turunan_kedua_orde_1";

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 1",
      renderFormHandler: FormTurunanPertamaOrde1,
      renderResultHandler: ResultTurunanPertamaOrde1,
    },
    {
      title: "Turunan kedua orde 1",
      renderFormHandler: FormTurunanKeduaOrde1,
      renderResultHandler: ResultTurunanKeduaOrde1,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [val, setVal] = useState(null);

  return (
    <Wrapper className={"pt-20 bg-white"}>
      <FormSelectFormula
        optionFormulas={OptionFormulas}
        selectedIndex={selectedIndex}
        onChangeSelect={setSelectedIndex}
        setValState={setVal}
      />
      <ResultFormula
        optionFormulas={OptionFormulas}
        selectedIndex={selectedIndex}
        val={val}
      />
    </Wrapper>
  );
};
