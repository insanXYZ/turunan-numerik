import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde1(f0, fn1, h) {
  return (f0 - fn1) / h;
}

function FormTurunanPertamaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [fn1, setfn1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      fn1: fn1,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setfn1(v)} formula={"\\(f_{-1}\\)"} />
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
        <Render formula={"\\(\\frac{f_0 - f_{-1}}{h} + O(h)\\)"} />
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
          <Render formula={`\\(\\frac{${val.f0} - ${val.fn1}}{${val.h}}\\)`} />
        </td>
      </tr>

      <tr>
        <th></th>
        <td>
          <Render formula={"\\(=\\)"} />
        </td>
        <td>
          <Render formula={`\\(\\frac{${val.f0 - val.fn1}}{${val.h}}\\)`} />
        </td>
      </tr>

      <tr>
        <th></th>
        <td>
          <Render formula={"\\(=\\)"} />
        </td>
        <td>
          <Render formula={turunanPertamaOrde1(val.f0, val.fn1, val.h)} />
        </td>
      </tr>
    </>
  );
}

export { FormTurunanPertamaOrde1, RowFormula, RowCalculate };
