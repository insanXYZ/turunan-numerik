import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanPertamaOrde1(f0, fn1, h) {
  return (f0 - fn1) / h;
}

function FormTurunanPertamaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      fn1: fn1,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanPertamaOrde1({ stateVal }) {
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
            <Render formula={"\\(\\frac{f_0 - f_{-1}}{h} + O(h)\\)"} />
          </td>
        </tr>

        <ResultFormula val={stateVal}>
          <tr>
            <th></th>
            <td>
              <Render formula={"\\(=\\)"} />
            </td>
            <td>
              <Render
                formula={`\\(\\frac{${stateVal.f0} - ${stateVal.fn1}}{${stateVal.h}}\\)`}
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
                formula={`\\(\\frac{${stateVal.f0 - stateVal.fn1}}{${
                  stateVal.h
                }}\\)`}
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
                formula={turunanPertamaOrde1(
                  stateVal.f0,
                  stateVal.fn1,
                  stateVal.h
                )}
              />
            </td>
          </tr>
        </ResultFormula>
      </tbody>
    </table>
  );
}

export { FormTurunanPertamaOrde1, ResultTurunanPertamaOrde1 };
