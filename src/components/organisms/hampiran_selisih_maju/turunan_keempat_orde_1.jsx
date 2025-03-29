import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanKeempatOrde1(f0, f1, f2, f3, f4, h) {
  return (f4 - 4 * f3 + 6 * f2 - 4 * f1 + f0) / Math.pow(h, 4);
}

function FormTurunanKeempatOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [f3, setf3] = useState(0);
  const [f4, setf4] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      f2: f2,
      f3: f3,
      f4: f4,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setf3(v)} formula={"\\(f_3\\)"} />
      <InputFormula onChange={(v) => setf4(v)} formula={"\\(f_4\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKeempatOrde1({ stateVal }) {
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
              formula={`\\(\\frac{f_4 - 4f_3 + 6f_2 - 4f_1 + f_0}{h^4} + O(h)\\)`}
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
                formula={`\\(\\frac{${stateVal.f4} - 4*${stateVal.f3} + 6*${stateVal.f2} - 4*${stateVal.f1} + ${stateVal.f0}}{${stateVal.h}^4} \\)`}
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
                formula={`\\(\\frac{${stateVal.f4} - ${4 * stateVal.f3} + ${
                  6 * stateVal.f2
                } - ${4 * stateVal.f1} + ${stateVal.f0}}{${Math.pow(
                  stateVal.h,
                  4
                )}} \\)`}
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
                  stateVal.f4 -
                  4 * stateVal.f3 +
                  6 * stateVal.f2 -
                  4 * stateVal.f1 +
                  stateVal.f0
                } }{${Math.pow(stateVal.h, 4)}} \\)`}
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
                formula={turunanKeempatOrde1(
                  stateVal.f0,
                  stateVal.f1,
                  stateVal.f2,
                  stateVal.f3,
                  stateVal.f4,
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

export { FormTurunanKeempatOrde1, ResultTurunanKeempatOrde1 };
