import { Component, useEffect, useState } from "react";
import FormFormula from "../../moleculs/form_formula";
import InputFormula from "../../moleculs/input_formula";
import Render from "../../moleculs/mathjax";
import ResultFormula from "../../moleculs/result_formula";

function turunanKeduaOrde1(f0, f1, f2, h) {
  return (f2 - 2 * f1 + f0) / Math.pow(h, 2);
}

function FormTurunanKeduaOrde1({ setValState }) {
  const [f0, setf0] = useState(0);
  const [f1, setf1] = useState(0);
  const [f2, setf2] = useState(0);
  const [h, seth] = useState(0);

  function handleSubmit() {
    setValState({
      f0: f0,
      f1: f1,
      f2: f2,
      h: h,
    });
  }

  return (
    <FormFormula onSubmit={handleSubmit}>
      <InputFormula onChange={(v) => setf0(v)} formula={"\\(f_0\\)"} />
      <InputFormula onChange={(v) => setf1(v)} formula={"\\(f_1\\)"} />
      <InputFormula onChange={(v) => setf2(v)} formula={"\\(f_2\\)"} />
      <InputFormula onChange={(v) => seth(v)} formula={"\\(h\\)"} />
    </FormFormula>
  );
}

function ResultTurunanKeduaOrde1({ stateVal }) {
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
            <Render formula={`\\(\\frac{f_2 - 2f_1 + f_0}{h^2} + O(h)\\)`} />
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
                formula={`\\(\\frac{${stateVal.f2} - 2*${stateVal.f1} + ${stateVal.f0}}{${stateVal.h}^2}\\)`}
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
                  stateVal.f0
                }}{${Math.pow(stateVal.h, 2)}}\\)`}
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
                  stateVal.f2 - 2 * stateVal.f1 + stateVal.f0
                }}{${Math.pow(stateVal.h, 2)}}\\)`}
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
                formula={turunanKeduaOrde1(
                  stateVal.f0,
                  stateVal.f1,
                  stateVal.f2,
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

export { FormTurunanKeduaOrde1, ResultTurunanKeduaOrde1 };
