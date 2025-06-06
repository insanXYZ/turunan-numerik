import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde2(f0, f1, f2, h) {
  return (0 - 3 * f0 + 4 * f1 - f2) / (2 * h);
}

function FormTurunanPertamaOrde2({ setValState }) {
  const [fx, setfx] = useState("x");
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      fx,
      f0,
      f1,
      f2,
      h,
    });
  }

  return (
    <FormFormula onChangeFx={(v) => setfx(v)} onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
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
        <Render formula={"\\(\\frac{-3f_0 + 4f_1 - f_2}{2h} + O(h^2)\\)"} />
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
        <td>
          <Render formula={"\\(=\\)"} />
        </td>
        <td>
          <Render
            formula={`\\(\\frac{-3*(${replaceFx(val.f0)}) + 4*(${replaceFx(
              val.f1
            )}) - (${replaceFx(val.f2)})}{2*${val.h}} \\)`}
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
            formula={`\\(\\frac{${-3 * f(val.f0)} + ${4 * f(val.f1)} - ${f(
              val.f2
            )}}{${2 * val.h}} \\)`}
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
            formula={`\\(\\frac{${-3 * f(val.f0) + 4 * f(val.f1)} - ${f(
              val.f2
            )}}{${2 * val.h}} \\)`}
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
            formula={`\\(\\frac{${
              -3 * f(val.f0) + 4 * f(val.f1) - f(val.f2)
            } }{${2 * val.h}} \\)`}
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
            formula={`${turunanPertamaOrde2(
              f(val.f0),
              f(val.f1),
              f(val.f2),
              val.h
            )}`}
          />
        </td>
      </tr>
    </>
  );
}

export { FormTurunanPertamaOrde2, RowFormula, RowCalculate };
