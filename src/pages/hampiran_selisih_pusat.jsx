import { useState } from "react";
import Wrapper from "../components/layouts/wrapper";
import FormSelectFormula from "../components/organisms/form_select_formula";
import ResultFormula from "../components/organisms/result_form_formula";
import {
  FormTurunanPertamaOrde2,
  ResultTurunanPertamaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_pertama_orde_2";

import {
  FormTurunanPertamaOrde4,
  ResultTurunanPertamaOrde4,
} from "../components/organisms/hampiran_selisih_pusat/turunan_pertama_orde_4";

import {
  FormTurunanKeduaOrde2,
  ResultTurunanKeduaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_kedua_orde_2";

import {
  FormTurunanKeduaOrde4,
  ResultTurunanKeduaOrde4,
} from "../components/organisms/hampiran_selisih_pusat/turunan_kedua_orde_4";

import {
  FormTurunanKetigaOrde2,
  ResultTurunanKetigaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_ketiga_orde_2";

import {
  FormTurunanKeempatOrde2,
  ResultTurunanKeempatOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_keempat_orde_2";

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 2",
      renderFormHandler: FormTurunanPertamaOrde2,
      renderResultHandler: ResultTurunanPertamaOrde2,
    },
    {
      title: "Turunan pertama orde 4",
      renderFormHandler: FormTurunanPertamaOrde4,
      renderResultHandler: ResultTurunanPertamaOrde4,
    },
    {
      title: "Turunan kedua orde 2",
      renderFormHandler: FormTurunanKeduaOrde2,
      renderResultHandler: ResultTurunanKeduaOrde2,
    },
    {
      title: "Turunan kedua orde 4",
      renderFormHandler: FormTurunanKeduaOrde4,
      renderResultHandler: ResultTurunanKeduaOrde4,
    },
    {
      title: "Turunan ketiga orde 2",
      renderFormHandler: FormTurunanKetigaOrde2,
      renderResultHandler: ResultTurunanKetigaOrde2,
    },
    {
      title: "Turunan keempat orde 2",
      renderFormHandler: FormTurunanKeempatOrde2,
      renderResultHandler: ResultTurunanKeempatOrde2,
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
