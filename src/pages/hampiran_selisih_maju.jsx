import Wrapper from "../components/layouts/wrapper";
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

import {
  FormTurunanKetigaOrde1,
  ResultTurunanKetigaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_ketiga_orde_1";

import {
  FormTurunanKeempatOrde1,
  ResultTurunanKeempatOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_keempat_orde_1";

import SelectFormInputHampiran from "../components/templates/hampiran";

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
    {
      title: "Turunan ketiga orde 1",
      renderFormHandler: FormTurunanKetigaOrde1,
      renderResultHandler: ResultTurunanKetigaOrde1,
    },
    {
      title: "Turunan keempat orde 1",
      renderFormHandler: FormTurunanKeempatOrde1,
      renderResultHandler: ResultTurunanKeempatOrde1,
    },
  ];

  return (
    <Wrapper className={"pt-20 bg-white"}>
      <SelectFormInputHampiran optionFormulas={OptionFormulas} />
    </Wrapper>
  );
};
