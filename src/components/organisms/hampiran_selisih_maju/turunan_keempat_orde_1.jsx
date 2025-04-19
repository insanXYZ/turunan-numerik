import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanKeempatOrde1(f0, f1, f2, f3, f4, h) {
  return (f4 - 4 * f3 + 6 * f2 - 4 * f1 + f0) / Math.pow(h, 4);
}

function FormTurunanKeempatOrde1({ setValState }) {
  const [fx, setfx] = useState("x");
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [f3, setf3] = useState(0);
  const [f4, setf4] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      fx: fx,
      f0: f0,
      f1: f1,
      f2: f2,
      f3: f3,
      f4: f4,
      h: h,
    });
  }

  return (
    <FormFormula onChangeFx={(v) => setfx(v)} onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setf3(v)} formula={"\\(f_3\\)"} />
      <InputFormula onChange={(v) => setf4(v)} formula={"\\(f_4\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function RowFormula() {
  return (
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
            formula={`\\(\\frac{(${replaceFx(val.f4)}) - 4*(${replaceFx(
              val.f3
            )}) + 6*(${replaceFx(val.f2)}) - 4*(${replaceFx(
              val.f1
            )}) + (${replaceFx(val.f0)})}{${val.h}^4} \\)`}
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
            formula={`\\(\\frac{${f(val.f4)} - ${4 * f(val.f3)} + ${
              6 * f(val.f2)
            } - ${4 * f(val.f1)} + ${f(val.f0)}}{${Math.pow(val.h, 4)}} \\)`}
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
              f(val.f4) -
              4 * f(val.f3) +
              6 * f(val.f2) -
              4 * f(val.f1) +
              f(val.f0)
            } }{${Math.pow(val.h, 4)}} \\)`}
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
              f(val.f0),
              f(val.f1),
              f(val.f2),
              f(val.f3),
              f(val.f4),
              val.h
            )}
          />
        </td>
      </tr>
    </>
  );
}

export { FormTurunanKeempatOrde1, RowFormula, RowCalculate };
