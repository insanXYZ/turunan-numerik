import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde1(f0, f1, h) {
  return (f1 - f0) / h;
}

function FormTurunanPertamaOrde1({ setValState }) {
  const [fx, setfx] = useState("x");
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      fx: fx,
      f0: f0,
      f1: f1,
      h: h,
    });
  }

  return (
    <FormFormula onChangeFx={(v) => setfx(v)} onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function RowFormula() {
  return (
    <tr>
      <th>
        <Render formula={"\\(f_0'\\)"} />
      </th>
      <td>
        <Render formula={"\\(=\\)"} />
      </td>
      <td>
        <Render formula={"\\(\\frac{f_1 - f_0}{h}\\)"} />
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
        <th></th>
        <th>
          <Render formula={"\\(=\\)"} />
        </th>
        <th>
          <Render
            formula={`\\(\\frac{(${replaceFx(val.f1)}) - (${replaceFx(
              val.f0
            )})}{${val.h}}\\)`}
          />
        </th>
      </tr>

      <tr>
        <th></th>
        <th>
          <Render formula={"\\(=\\)"} />
        </th>
        <th>
          <Render
            formula={`\\(\\frac{${f(val.f1) - f(val.f0)}}{${val.h}}\\)`}
          />
        </th>
      </tr>

      <tr>
        <th></th>
        <th>
          <Render formula={"\\(=\\)"} />
        </th>
        <th>
          <Render
            formula={`${turunanPertamaOrde1(f(val.f0), f(val.f1), val.h)}`}
          />
        </th>
      </tr>
    </>
  );
}

export { FormTurunanPertamaOrde1, RowFormula, RowCalculate };
