import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde2(f1, fn1, h) {
  return (f1 - fn1) / (2 * h);
}

function FormTurunanPertamaOrde2({ setValState }) {
  const [f1, setf1] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f1: f1,
      fn1: fn1,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanPertamaOrde2({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <td>
            <Render formula={"\\(f_0'\\)"} />
          </td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render formula={`\\(\\frac{f_1 - f_{-1}}{2h} + O(h^2)\\)`} />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{${stateVal.f1} - ${stateVal.fn1}}{2.${stateVal.h}}\\)`}
            />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{${stateVal.f1} - ${stateVal.fn1}}{${
                2 * stateVal.h
              }}\\)`}
            />
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={turunanPertamaOrde2(
                stateVal.f1,
                stateVal.fn1,
                stateVal.h
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { FormTurunanPertamaOrde2, ResultTurunanPertamaOrde2 };
