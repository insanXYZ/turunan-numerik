import { Link } from "react-router-dom"

export default () => {
    return (
        <div className="drawer z-20">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl gap-5">
                    <li><Link to={"/"}>Beranda</Link></li>
                    <li><Link to={"hampiran-selisih-maju"}>Hampiran Selisih Maju</Link></li>
                    <li><Link to={"hampiran-selisih-mundur"}>Hampiran Selisih Mundur</Link></li>
                    <li><Link to={"hampiran-selisih-pusat"}>Hampiran Selisih Pusat</Link></li>

                    {/* <li className="pb-9 font-medium"><Link to={"/pengantar"}>Pengantar</Link></li>
                    <div className="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title font-medium px-3">Deret Taylor</div>
                        <ul class="collapse-content menu">
                            <li><a>Hampiran Selisih Maju</a></li>
                            <li><a>Hampiran Selisih Mundur</a></li>
                            <li><a>Hampiran Selisih Pusat</a></li>
                        </ul>
                    </div>
                    <div class="collapse collapse-arrow">
                        <input type="checkbox" />
                        <div class="collapse-title font-medium px-3">Polinom Interpolasi</div>
                        <ul class="collapse-content menu">
                            <li><a>Hampiran Selisih Maju</a></li>   
                            <li><a>Hampiran Selisih Mundur</a></li>
                            <li><a>Hampiran Selisih Pusat</a></li>
                        </ul>
                    </div> */}

                </ul>
            </div>
        </div>
    )
}
