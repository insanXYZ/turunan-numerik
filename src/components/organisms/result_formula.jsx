import Label from "../moleculs/label";
import TableResult from "../moleculs/table_result";

export default ({ val, optionFormulas, selectedIndex }) => {
  const ResultHandler = optionFormulas[selectedIndex];

  return (
    <div className="w-full flex flex-col gap-5">
      <Label>Penyelesaian</Label>
      {val.id == selectedIndex && (
        <TableResult
          val={val}
          RowFormula={ResultHandler.RowFormula}
          RowCalculate={ResultHandler.RowCalculate}
        />
      )}
    </div>
  );
};
