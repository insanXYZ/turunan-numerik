import { SlPencil, SlVector } from "react-icons/sl";
import { Link } from "react-router-dom";
export default () => {
  return (
    <Link to={"/"} className="flex items-center">
      <SlVector className="text-4xl" style={{ transform: "rotate(180deg)" }} />
      <SlPencil className="text-2xl" style={{ transform: "rotate(-45deg)" }} />
    </Link>
  );
};
