import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde2(f0, f1, f2, h) {
  return (0 - 3 * f0 + 4 * f1 - f2) / (2 * h);
}

function FormTurunanPertamaOrde2({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0,
      f1,
      f2,
      h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanPertamaOrde2({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <th>
            <Render formula={"\\(f_0'\\)"} />
          </th>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render formula={"\\(\\frac{-3f_0 + 4f_1 - f_2}{2h} + O(h^2)\\)"} />
          </td>
        </tr>

        <tr>
          <th></th>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{-3.${stateVal.f0} + 4.${stateVal.f1} - ${stateVal.f2}}{2.${stateVal.h}} \\)`}
            />
          </td>
        </tr>

        <tr>
          <th></th>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{-${3 * stateVal.f0} + ${4 * stateVal.f1} - ${
                stateVal.f2
              }}{${2 * stateVal.h}} \\)`}
            />
          </td>
        </tr>

        <tr>
          <th></th>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`${turunanPertamaOrde2(
                stateVal.f0,
                stateVal.f1,
                stateVal.f2,
                stateVal.h
              )}`}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export { FormTurunanPertamaOrde2, ResultTurunanPertamaOrde2 };
