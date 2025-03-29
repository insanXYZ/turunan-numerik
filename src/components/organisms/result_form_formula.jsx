import Label from "../moleculs/label";

export default ({ val, optionFormulas, selectedIndex }) => {
  const ResultHandler = optionFormulas[selectedIndex].renderResultHandler;

  // return (
  //   <div className="w-full flex flex-col">
  //     <Label>Penyelesaian</Label>
  //     {val != null && val.id == selectedIndex && (
  //       <ResultHandler stateVal={val} />
  //     )}
  //   </div>
  // );

  return (
    <div className="w-full flex flex-col">
      <Label>Penyelesaian</Label>
      {val.id == selectedIndex && <ResultHandler stateVal={val} />}
    </div>
  );
};
