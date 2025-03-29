import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanKeempatOrde2(f0, f1, f2, fn1, fn2, h) {
  return (f2 - 4 * f1 + 6 * f0 - 4 * fn1 + fn2) / Math.pow(h, 4);
}

function FormTurunanKeempatOrde2({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [fn2, setfn2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      f2: f2,
      fn1: fn1,
      fn2: fn2,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => setfn2(v)} formula={"\\(f_{-2}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKeempatOrde2({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <td>
            <Render formula={"\\(f_0iv\\)"} />
          </td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{f_2 - 4f_1 + 6f_0 - 4f_{-1} + f_{-2}}{h^4} + O(h^2)\\)`}
            />
          </td>
        </tr>

        <ResultFormula val={stateVal}>
          <tr>
            <td></td>
            <td>
              <Render formula={"\\(=\\)"} />
            </td>
            <td>
              <Render
                formula={`\\(\\frac{${stateVal.f2} - 4*${stateVal.f1} + 6*${stateVal.f0} - 4*${stateVal.fn1} + ${stateVal.fn2}}{${stateVal.h}^4}\\)`}
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
                formula={`\\(\\frac{${stateVal.f2} - ${4 * stateVal.f1} + ${
                  6 * stateVal.f0
                } - ${4 * stateVal.fn1} + ${stateVal.fn2}}{${Math.pow(
                  stateVal.h,
                  4
                )}}\\)`}
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
                formula={`\\(\\frac{${
                  stateVal.f2 -
                  4 * stateVal.f1 +
                  6 * stateVal.f0 -
                  4 * stateVal.fn1 +
                  stateVal.fn2
                }}{${Math.pow(stateVal.h, 4)}}\\)`}
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
                formula={turunanKeempatOrde2(
                  stateVal.f0,
                  stateVal.f1,
                  stateVal.f2,
                  stateVal.fn1,
                  stateVal.fn2,
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

export { FormTurunanKeempatOrde2, ResultTurunanKeempatOrde2 };
