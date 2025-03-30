import Wrapper from "../components/layouts/wrapper";
import SelectFormInputHampiran from "../components/templates/hampiran";

import {
  FormTurunanPertamaOrde1,
  RowCalculate as RCPertamaOrde1,
  RowFormula as RFPertamaOrde1,
} from "../components/organisms/hampiran_selisih_mundur/turunan_pertama_orde_1";

import {
  FormTurunanKeduaOrde1,
  RowCalculate as RCKeduaOrde1,
  RowFormula as RFKeduaOrde1,
} from "../components/organisms/hampiran_selisih_mundur/turunan_kedua_orde_1";

export default () => {
  const OptionFormulas = [
    {
      title: "Turunan pertama orde 1",
      renderFormHandler: FormTurunanPertamaOrde1,
      RowFormula: RFPertamaOrde1,
      RowCalculate: RCPertamaOrde1,
    },
    {
      title: "Turunan kedua orde 1",
      renderFormHandler: FormTurunanKeduaOrde1,
      RowFormula: RFKeduaOrde1,
      RowCalculate: RCKeduaOrde1,
    },
  ];

  return (
    <Wrapper className={"pt-20 bg-white"}>
      <SelectFormInputHampiran optionFormulas={OptionFormulas} />
    </Wrapper>
  );
};
