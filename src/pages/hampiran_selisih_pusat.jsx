import Wrapper from "../components/layouts/wrapper";
import SelectFormInputHampiran from "../components/templates/hampiran";

import {
  FormTurunanPertamaOrde2,
  RowCalculate as RCPertamaOrde2,
  RowFormula as RFPertamaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_pertama_orde_2";

import {
  FormTurunanPertamaOrde4,
  RowCalculate as RCPertamaOrde4,
  RowFormula as RFPertamaOrde4,
} from "../components/organisms/hampiran_selisih_pusat/turunan_pertama_orde_4";

import {
  FormTurunanKeduaOrde2,
  RowCalculate as RCKeduaOrde2,
  RowFormula as RFKeduaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_kedua_orde_2";

import {
  FormTurunanKeduaOrde4,
  RowCalculate as RCKeduaOrde4,
  RowFormula as RFKeduaOrde4,
} from "../components/organisms/hampiran_selisih_pusat/turunan_kedua_orde_4";

import {
  FormTurunanKetigaOrde2,
  RowCalculate as RCKetigaOrde2,
  RowFormula as RFKetigaOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_ketiga_orde_2";

import {
  FormTurunanKeempatOrde2,
  RowCalculate as RCKeempatOrde2,
  RowFormula as RFKeempatOrde2,
} from "../components/organisms/hampiran_selisih_pusat/turunan_keempat_orde_2";

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 2",
      renderFormHandler: FormTurunanPertamaOrde2,
      RowFormula: RFPertamaOrde2,
      RowCalculate: RCPertamaOrde2,
    },
    {
      title: "Turunan pertama orde 4",
      renderFormHandler: FormTurunanPertamaOrde4,
      RowFormula: RFPertamaOrde4,
      RowCalculate: RCPertamaOrde4,
    },
    {
      title: "Turunan kedua orde 2",
      renderFormHandler: FormTurunanKeduaOrde2,
      RowFormula: RFKeduaOrde2,
      RowCalculate: RCKeduaOrde2,
    },
    {
      title: "Turunan kedua orde 4",
      renderFormHandler: FormTurunanKeduaOrde4,
      RowFormula: RFKeduaOrde4,
      RowCalculate: RCKeduaOrde4,
    },
    {
      title: "Turunan ketiga orde 2",
      renderFormHandler: FormTurunanKetigaOrde2,
      RowFormula: RFKetigaOrde2,
      RowCalculate: RCKetigaOrde2,
    },
    {
      title: "Turunan keempat orde 2",
      renderFormHandler: FormTurunanKeempatOrde2,
      RowFormula: RFKeempatOrde2,
      RowCalculate: RCKeempatOrde2,
    },
  ];

  return (
    <Wrapper className={"pt-8 bg-white"}>
      <SelectFormInputHampiran optionFormulas={OptionFormulas} />
    </Wrapper>
  );
};
