import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanKeduaOrde2(f0, f1, fn1, h) {
  return (f1 - 2 * f0 + fn1) / Math.pow(h, 2);
}

function FormTurunanKeduaOrde2({ setValState }) {
  const [fx, setfx] = useState("x");
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      fx: fx,
      f0: f0,
      f1: f1,
      fn1: fn1,
      h: h,
    });
  }

  return (
    <FormFormula onChangeFx={(v) => setfx(v)} onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function RowFormula() {
  return (
    <tr>
      <td>
        <Render formula={"\\(f_0''\\)"} />
      </td>
      <td>
        <Render formula={"\\(=\\)"} />
      </td>
      <td>
        <Render formula={`\\(\\frac{f_1 - 2f_0 + f_{-1}}{h^2} + O(h^2)\\)`} />
      </td>
    </tr>
  );
}

function RowCalculate({ val }) {
  const f = new Function("x", `return ${val.fx}`);

  function replaceFx(v) {
    return val.fx.replace(/x/g, v);
  }

  return (
    <>
      <tr>
        <td></td>
        <td>
          <Render formula={"\\(=\\)"} />
        </td>
        <td>
          <Render
            formula={`\\(\\frac{(${replaceFx(val.f1)}) - 2*(${replaceFx(
              val.f0
            )}) + (${replaceFx(val.fn1)})}{${val.h}^2}\\)`}
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
            formula={`\\(\\frac{${f(val.f1)} - ${2 * f(val.f0)} + ${f(
              val.fn1
            )}}{${Math.pow(val.h, 2)}}\\)`}
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
              f(val.f1) - 2 * f(val.f0) + f(val.fn1)
            }}{${Math.pow(val.h, 2)}}\\)`}
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
            formula={turunanKeduaOrde2(f(val.f0), f(val.f1), f(val.fn1), val.h)}
          />
        </td>
      </tr>
    </>
  );
}

export { FormTurunanKeduaOrde2, RowCalculate, RowFormula };
