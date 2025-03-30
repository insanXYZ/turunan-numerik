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

function RowFormula() {
  return (
    <tr>
      <th>
        <Render formula={"\\(f_0''\\)"} />
      </th>
      <td>
        <Render formula={"\\(=\\)"} />
      </td>
      <td>
        <Render formula={`\\(\\frac{f_{-2} - 2f_{-1} + f_0}{h^2} + O(h)\\)`} />
      </td>
    </tr>
  );
}

function RowCalculate({ val }) {
  return (
    <>
      <tr>
        <th></th>
        <td>
          <Render formula={"\\(=\\)"} />
        </td>
        <td>
          <Render
            formula={`\\(\\frac{${val.fn2} - 2.${val.fn1} + ${val.f0}}{${val.h}^2}\\)`}
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
            formula={`\\(\\frac{${val.fn2} - ${2 * val.fn1} + ${
              val.f0
            }}{${Math.pow(val.h, 2)}}\\)`}
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
            formula={`\\(\\frac{${val.fn2 - 2 * val.fn1 + val.f0}}{${Math.pow(
              val.h,
              2
            )}}\\)`}
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
            formula={turunanKeduaOrde1(val.f0, val.fn1, val.fn2, val.h)}
          />
        </td>
      </tr>
    </>
  );
}

export { FormTurunanKeduaOrde1, RowCalculate, RowFormula };
