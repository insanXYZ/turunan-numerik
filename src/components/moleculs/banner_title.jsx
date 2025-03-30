import { SlPencil, SlVector } from "react-icons/sl";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex text-6xl md:text-9xl items-end font-extrabold">
        T
        <SlVector
          className="text-5xl md:text-8xl text-red-600"
          style={{ transform: "rotate(180deg)" }}
        />
        urunan
      </div>
      <div className="flex text-4xl md:text-7xl items-center font-light">
        Numer
        <SlPencil
          className="text-2xl md:text-5xl text-red-600 mx-[-5px] md:mx-[-10px]"
          style={{ transform: "rotate(-45deg)" }}
        />
        k
      </div>
    </div>
  );
};
