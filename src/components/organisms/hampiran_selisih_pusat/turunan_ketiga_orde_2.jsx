import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanKetigaOrde2(f1, f2, fn1, fn2, h) {
  return (f2 - 2 * f1 + 2 * fn1 - fn2) / (2 * Math.pow(h, 3));
}

function FormTurunanKetigaOrde2({ setValState }) {
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

function ResultTurunanKetigaOrde2({ stateVal }) {
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
              formula={`\\(\\frac{f_2 - 2f_1 + 2f_{-1} - f_{-2}}{2h^3} + O(h^2)\\)`}
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
              formula={`\\(\\frac{${stateVal.f2} - 2.${stateVal.f1} + 2.${stateVal.fn1} - ${stateVal.fn2}}{2.${stateVal.h}^3}\\)`}
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
              formula={`\\(\\frac{${stateVal.f2} - ${2 * stateVal.f1} + ${
                2 * stateVal.fn1
              } - ${stateVal.fn2}}{2.${Math.pow(stateVal.h, 3)}}\\)`}
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
              formula={`\\(\\frac{${stateVal.f2} - ${2 * stateVal.f1} + ${
                2 * stateVal.fn1
              } - ${stateVal.fn2}}{${2 * Math.pow(stateVal.h, 3)}}\\)`}
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
              formula={turunanKetigaOrde2(
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

export { FormTurunanKetigaOrde2, ResultTurunanKetigaOrde2 };
