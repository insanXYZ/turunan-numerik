import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanKeduaOrde2(f0, f1, fn1, h) {
  return (f1 - 2 * f0 + fn1) / Math.pow(h, 2);
}

function FormTurunanKeduaOrde2({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      fn1: fn1,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKeduaOrde2({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <td>
            <Render formula={"\\(f_0''\\)"} />
          </td>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{f_1 - 2f_0 + f_{-1}}{h^2} + O(h^2)\\)`}
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
              formula={`\\(\\frac{${stateVal.f1} - 2.${stateVal.f0} + ${stateVal.fn1}}{${stateVal.h}^2}\\)`}
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
              formula={`\\(\\frac{${stateVal.f1} - ${2 * stateVal.f0} + ${
                stateVal.fn1
              }}{${Math.pow(stateVal.h, 2)}}\\)`}
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
              formula={turunanKeduaOrde2(
                stateVal.f0,
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

export { FormTurunanKeduaOrde2, ResultTurunanKeduaOrde2 };
