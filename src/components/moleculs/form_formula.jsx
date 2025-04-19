import InputFormula from "./input_formula";

export default ({ children, onSubmit, onChangeFx }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className=" grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <InputFormula type="text" onChange={onChangeFx} formula={"\\(f_x\\)"} />
      {children}
      <button
        className={`btn btn-primary ${
          children.length % 2 == 0 ? "col-span-2" : ""
        }`}
      >
        Hitung
      </button>
    </form>
  );
};
