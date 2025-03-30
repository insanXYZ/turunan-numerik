import { useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";

function turunanPertamaOrde1(f0, f1, h) {
  return (f1 - f0) / h;
}

function FormTurunanPertamaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
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
  return (
    <>
      <tr>
        <th></th>
        <th>
          <Render formula={"\\(=\\)"} />
        </th>
        <th>
          <Render
            formula={`\\(\\frac{${stateVal.f1} - ${stateVal.f0}}{${stateVal.h}}\\)`}
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
            formula={`\\(\\frac{${stateVal.f1 - stateVal.f0}}{${
              stateVal.h
            }}\\)`}
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
            formula={`${turunanPertamaOrde1(
              stateVal.f0,
              stateVal.f1,
              stateVal.h
            )}`}
          />
        </th>
      </tr>
    </>
  );
}

export { FormTurunanPertamaOrde1, RowFormula, RowCalculate };
