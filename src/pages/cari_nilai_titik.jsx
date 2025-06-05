import { useState } from "react";
import Wrapper from "../components/layouts/wrapper";
import FormFormula from "../components/moleculs/form_formula";
import InputFormula from "../components/moleculs/input_formula";
import Label from "../components/moleculs/label";
import { turunanPertamaOrde2 } from "../components/organisms/hampiran_selisih_pusat/turunan_pertama_orde_2";

export default () => {
  const [fx, setFx] = useState("x");
  const [h, setH] = useState(0);
  const [xAwal, setXAwal] = useState(0);
  const [titikYangMauDicari, setTitikYangMauDicari] = useState(0);
  const [barisFx, setBarisFx] = useState(null);

  function handleSubmit() {
    let greater = false;
    let res = [];
    let i = xAwal;

    const f = new Function("x", `return ${fx}`);

    while (greater == false) {
      if (i <= titikYangMauDicari) {
        res.push([i, f(i)]);
        if (i == titikYangMauDicari) {
          break;
        }
      }

      if (i > titikYangMauDicari) {
        greater = true;
        let f1 = f(i);
        res.push(
          [titikYangMauDicari,
          turunanPertamaOrde2(f1, res[res.length - 1][1], h)]
        );
        res.push([i, f1]);
      }

      i += h;
    }

    setBarisFx(res);
    console.log(res)
  }

  return (
    <Wrapper className={"pt-8 bg-white"}>
      <div className="flex flex-col gap-5">
        <Label>Input</Label>
        <FormFormula onSubmit={handleSubmit} onChangeFx={(v) => setFx(v)}>
          <InputFormula onChange={(v) => setH(v)} formula={"\\(h\\)"} />
          <InputFormula onChange={(v) => setXAwal(v)} formula={"x awal"} />
          <InputFormula
            onChange={(v) => setTitikYangMauDicari(v)}
            formula={"titik yang mau dicari"}
          />
        </FormFormula>
      </div>
      {barisFx && (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>X</th>
                <th>F(X)</th>
              </tr>
            </thead>
            <tbody>
              {barisFx.map((v, i) => (
                <tr key={i}>
                  <th>{v[0]}</th>
                  <th>{v[1]}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Wrapper>
  );
};
