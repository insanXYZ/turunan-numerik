import InputFormula from "./input_formula";

export default ({ children, onSubmit, onChangeFx }) => {
  function isValidMathExpression(expr) {
    const allowed = /^[0-9+\-*/^(). x]+$/;
    if (!allowed.test(expr)) return false;

    try {
      const testFunc = new Function("x", `return ${expr}`);
      return true;
    } catch {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const input = document.getElementById("fx-input");
    input.setCustomValidity("");

    const expr = input.value;

    if (!isValidMathExpression(expr)) {
      input.setCustomValidity(
        "invalid expression, only use x and math operator"
      );
    }

    if (input.reportValidity()) {
      onSubmit(); 
    }
  }

  function handleFx(e) {
    onChangeFx(e.replace('^','**'))
  }

  return (
    <form className=" grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      {onChangeFx && (
        <InputFormula
          id="fx-input"
          type="text"
          onChange={handleFx}
          formula={"\\(f_x\\)"}
        />
      )}
      {children}
      <button
        className={`btn btn-primary ${
          children && children.length % 2 == 0 ? "col-span-2" : ""
        }`}
      >
        Hitung
      </button>
    </form>
  );
};
