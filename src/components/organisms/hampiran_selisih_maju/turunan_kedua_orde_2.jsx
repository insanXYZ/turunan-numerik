import { Component, useEffect, useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanKeduaOrde2(f0, f1, f2, f3, h) {
  return (0 - f3 + 4 * f2 - 5 * f1 + 2 * f0) / (12 * h);
}

function FormTurunanKeduaOrde2({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [f3, setf3] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      f2: f2,
      f3: f3,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => setf3(v)} formula={"\\(f_3\\)"} />
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
              formula={`\\(\\frac{-f_3 + 4f_2 - 5f_1 + 2f_0}{12h} + O(h^2)\\)`}
            />
          </td>
        </tr>

        <ResultFormula val={stateVal}>
          <tr>
            <td></td>
            <td>
              <Render formula={"\\(=\\)"} />
            </td>
            <td>
              <Render
                formula={`\\(\\frac{-${stateVal.f3} + 4*${stateVal.f2} - 5*${stateVal.f1} + 2*${stateVal.f0}}{12*${stateVal.h}}\\)`}
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
                formula={`\\(\\frac{-${stateVal.f3} + ${4 * stateVal.f2} - ${
                  5 * stateVal.f1
                } + ${2 * stateVal.f0}}{${12 * stateVal.h}}\\)`}
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
                  -stateVal.f3 +
                  4 * stateVal.f2 -
                  5 * stateVal.f1 +
                  2 * stateVal.f0
                }}{${12 * stateVal.h}}\\)`}
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
                  stateVal.f2,
                  stateVal.f3,
                  stateVal.h
                )}
              />
            </td>
          </tr>
        </ResultFormula>
      </tbody>
    </table>
  );
}

export { FormTurunanKeduaOrde2, ResultTurunanKeduaOrde2 };
