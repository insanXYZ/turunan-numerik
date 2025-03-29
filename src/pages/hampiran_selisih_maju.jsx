import { useEffect, useState } from "react";
import Wrapper from "../components/layouts/wrapper";
import FormSelectFormula from "../components/organisms/form_select_formula";
import ResultFormula from "../components/organisms/result_form_formula";
import {
  FormTurunanPertamaOrde1,
  ResultTurunanPertamaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_pertama_orde_1";
import {
  FormTurunanPertamaOrde2,
  ResultTurunanPertamaOrde2,
} from "../components/organisms/hampiran_selisih_maju/turunan_pertama_orde_2";

import {
  FormTurunanKeduaOrde1,
  ResultTurunanKeduaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_kedua_orde_1";

import {
  FormTurunanKeduaOrde2,
  ResultTurunanKeduaOrde2,
} from "../components/organisms/hampiran_selisih_maju/turunan_kedua_orde_2";

// //TURUNAN KETIGA

// function turunanKetigaOrde1(f0,f1,f2,f3,h) {
//     return (f3 - (3 * f2) + (3 * f1) - f0) / (Math.pow(h , 3))
// }

// // TURUNAN KEEMPAT
// function turunanKeempatOrde1(f0,f1,f2,f3,f4,h) {
//     return (f4 - (4 * f3) + (6 *f2) - (4 *f1) + f0) / Math.pow(h,4)
// }

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 1",
      renderFormHandler: FormTurunanPertamaOrde1,
      renderResultHandler: ResultTurunanPertamaOrde1,
    },
    {
      title: "Turunan pertama orde 2",
      renderFormHandler: FormTurunanPertamaOrde2,
      renderResultHandler: ResultTurunanPertamaOrde2,
    },
    {
      title: "Turunan kedua orde 1",
      renderFormHandler: FormTurunanKeduaOrde1,
      renderResultHandler: ResultTurunanKeduaOrde1,
    },
    {
      title: "Turunan kedua orde 2",
      renderFormHandler: FormTurunanKeduaOrde2,
      renderResultHandler: ResultTurunanKeduaOrde2,
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
