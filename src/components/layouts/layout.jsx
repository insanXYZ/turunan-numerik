import Topbar from "../organisms/topbar";
import Sidebar from "../organisms/sidebar";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="w-full h-screen bg-white">
      <Topbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};
