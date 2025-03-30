import Wrapper from "../components/layouts/wrapper";
import {
  FormTurunanPertamaOrde1,
  RowCalculate as RCPertamaOrde1,
  RowFormula as RFPertamaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_pertama_orde_1";
import {
  FormTurunanPertamaOrde2,
  RowCalculate as RCPertamaOrde2,
  RowFormula as RFPertamaOrde2,
} from "../components/organisms/hampiran_selisih_maju/turunan_pertama_orde_2";

import {
  FormTurunanKeduaOrde1,
  RowCalculate as RCKeduaOrde1,
  RowFormula as RFKeduaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_kedua_orde_1";

import {
  FormTurunanKeduaOrde2,
  RowCalculate as RCKeduaOrde2,
  RowFormula as RFKeduaOrde2,
} from "../components/organisms/hampiran_selisih_maju/turunan_kedua_orde_2";

import {
  FormTurunanKetigaOrde1,
  RowCalculate as RCKetigaOrde1,
  RowFormula as RFKetigaOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_ketiga_orde_1";

import {
  FormTurunanKeempatOrde1,
  RowCalculate as RCKeempatOrde1,
  RowFormula as RFKeempatOrde1,
} from "../components/organisms/hampiran_selisih_maju/turunan_keempat_orde_1";

import SelectFormInputHampiran from "../components/templates/hampiran";

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 1",
      renderFormHandler: FormTurunanPertamaOrde1,
      RowFormula: RFPertamaOrde1,
      RowCalculate: RCPertamaOrde1,
    },
    {
      title: "Turunan pertama orde 2",
      renderFormHandler: FormTurunanPertamaOrde2,
      RowFormula: RFPertamaOrde2,
      RowCalculate: RCPertamaOrde2,
    },
    {
      title: "Turunan kedua orde 1",
      renderFormHandler: FormTurunanKeduaOrde1,
      RowFormula: RFKeduaOrde1,
      RowCalculate: RCKeduaOrde1,
    },
    {
      title: "Turunan kedua orde 2",
      renderFormHandler: FormTurunanKeduaOrde2,
      RowFormula: RFKeduaOrde2,
      RowCalculate: RCKeduaOrde2,
    },
    {
      title: "Turunan ketiga orde 1",
      renderFormHandler: FormTurunanKetigaOrde1,
      RowFormula: RFKetigaOrde1,
      RowCalculate: RCKetigaOrde1,
    },
    {
      title: "Turunan keempat orde 1",
      renderFormHandler: FormTurunanKeempatOrde1,
      RowFormula: RFKeempatOrde1,
      RowCalculate: RCKeempatOrde1,
    },
  ];

  return (
    <Wrapper className={"pt-20 bg-white"}>
      <SelectFormInputHampiran optionFormulas={OptionFormulas} />
    </Wrapper>
  );
};
