import Wrapper from "../components/layouts/wrapper";
import SelectFormInputHampiran from "../components/templates/hampiran";

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

  return (
    <Wrapper className={"pt-20 bg-white"}>
      <SelectFormInputHampiran optionFormulas={OptionFormulas} />
    </Wrapper>
  );
};
