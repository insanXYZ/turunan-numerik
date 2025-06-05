import { Link } from "react-router-dom";

export default () => {
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };

  return (
    <div className="drawer z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl gap-5">
          <li>
            <Link onClick={closeDrawer} to={"/"}>
              Beranda
            </Link>
          </li>
          <li>
            <Link onClick={closeDrawer} to={"cari-nilai-titik"}>
              Cari nilai titik
            </Link>
          </li>
          <li>
            <Link onClick={closeDrawer} to={"hampiran-selisih-maju"}>
              Hampiran Selisih Maju
            </Link>
          </li>
          <li>
            <Link onClick={closeDrawer} to={"hampiran-selisih-mundur"}>
              Hampiran Selisih Mundur
            </Link>
          </li>
          <li>
            <Link onClick={closeDrawer} to={"hampiran-selisih-pusat"}>
              Hampiran Selisih Pusat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
