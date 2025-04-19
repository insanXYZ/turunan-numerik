import { useState } from "react";
import Render from "./mathjax";

export default ({ formula, onChange, type = "number" }) => {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex justify-center items-center w-1/5">
        <Render formula={formula} />
      </div>
      {type == "number" ? (
        <input
          type="number"
          step={"0.1"}
          onChange={(v) => onChange(Number(v.target.value))}
          className="input w-4/5"
          required
        />
      ) : (
        <input
          type="text"
          defaultValue={"x"}
          onChange={(v) => onChange(v.target.value)}
          className="input w-4/5"
          required
        />
      )}
    </div>
  );
};
