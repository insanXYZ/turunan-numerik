import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde4(f1, f2, fn1, fn2, h) {
  return (0 - f2 + 8 * f1 - 8 * fn1 + fn2) / (12 * h);
}

function FormTurunanPertamaOrde4({ setValState }) {
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [fn2, setfn2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f1: f1,
      f2: f2,
      fn1: fn1,
      fn2: fn2,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => setfn2(v)} formula={"\\(f_{-2}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanPertamaOrde4({ stateVal }) {
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
            <Render
              formula={`\\(\\frac{-f_2 + 8f_1 - 8f_{-1} + f_{-2}}{12h} + O(h^4)\\)`}
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
              formula={`\\(\\frac{-${stateVal.f2} + 8.${stateVal.f1} - 8.${stateVal.fn1} + ${stateVal.fn2}}{12.${stateVal.h}}\\)`}
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
              formula={`\\(\\frac{-${stateVal.f2} + ${8 * stateVal.f1} - ${
                8 * stateVal.fn1
              } + ${stateVal.fn2}}{${12 * stateVal.h}}\\)`}
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
              formula={turunanPertamaOrde4(
                stateVal.f1,
                stateVal.f2,
                stateVal.fn1,
                stateVal.fn2,
                stateVal.h
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { FormTurunanPertamaOrde4, ResultTurunanPertamaOrde4 };
