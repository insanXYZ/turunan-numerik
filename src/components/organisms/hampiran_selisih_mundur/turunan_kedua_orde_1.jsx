import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanKeduaOrde1(f0, fn1, fn2, h) {
  return (fn2 - 2 * fn1 + f0) / Math.pow(h, 2);
}

function FormTurunanKeduaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [fn2, setfn2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      fn1: fn1,
      fn2: fn2,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => setfn2(v)} formula={"\\(f_{-2}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKeduaOrde1({ stateVal }) {
  return (
    <table className="table text-2xl">
      <tbody>
        <tr>
          <th>
            <Render formula={"\\(f_0''\\)"} />
          </th>
          <td>
            <Render formula={"\\(=\\)"} />
          </td>
          <td>
            <Render
              formula={`\\(\\frac{f_{-2} - 2f_{-1} + f_0}{h^2} + O(h)\\)`}
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
              formula={`\\(\\frac{${stateVal.fn2} - 2.${stateVal.fn1} + ${stateVal.f0}}{${stateVal.h}^2}\\)`}
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
              formula={`\\(\\frac{${stateVal.fn2} - ${2 * stateVal.fn1} + ${
                stateVal.f0
              }}{${Math.pow(stateVal.h, 2)}}\\)`}
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
              formula={turunanKeduaOrde1(
                stateVal.f0,
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

export { FormTurunanKeduaOrde1, ResultTurunanKeduaOrde1 };
