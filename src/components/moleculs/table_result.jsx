export default ({ val, RowFormula, RowCalculate }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-2xl ">
        <tbody>
          <RowFormula />
          {Object.keys(val).length > 1 && <RowCalculate val={val} />}
        </tbody>
      </table>
    </div>
  );
};
