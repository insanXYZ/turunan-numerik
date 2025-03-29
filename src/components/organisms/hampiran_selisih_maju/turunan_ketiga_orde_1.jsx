import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanKetigaOrde1(f0, f1, f2, f3, h) {
  return (f3 - 3 * f2 + 3 * f1 - f0) / Math.pow(h, 3);
}

function FormTurunanKetigaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [f3, setf3] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      f2: f2,
      f3: f3,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setf3(v)} formula={"\\(f_3\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKetigaOrde1({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <td>
            <Render formula={"\\(f_0'''\\)"} />
          </td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{f_3 - 3f_2 + 3f_1 - f_0}{h^3} + O(h)\\)`}
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
                formula={`\\(\\frac{${stateVal.f3} - 3*${stateVal.f2} + 3*${stateVal.f1} - ${stateVal.f0}}{${stateVal.h}^3}\\)`}
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
                formula={`\\(\\frac{${stateVal.f3} - ${3 * stateVal.f2} + ${
                  3 * stateVal.f1
                } - ${stateVal.f0}}{${Math.pow(stateVal.h, 3)}}\\)`}
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
                  stateVal.f3 - 3 * stateVal.f2 + 3 * stateVal.f1 - stateVal.f0
                }}{${Math.pow(stateVal.h, 3)}}\\)`}
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
                formula={turunanKetigaOrde1(
                  stateVal.f0,
                  stateVal.f1,
                  stateVal.f2,
                  stateVal.f3,
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

export { FormTurunanKetigaOrde1, ResultTurunanKetigaOrde1 };
