import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home"
import HampiranSelisihMajuPage from "./pages/hampiran_selisih_maju"
import HampiranSelisihMundurPage from "./pages/hampiran_selisih_mundur"
import HampiranSelisihPusatPage from "./pages/hampiran_selisih_pusat"
import CariNilaiTitik from "./pages/cari_nilai_titik"
import Layout from "./components/layouts/layout"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='cari-nilai-titik' element={<CariNilaiTitik />} />
        <Route path='hampiran-selisih-maju' element={<HampiranSelisihMajuPage />} />
        <Route path='hampiran-selisih-mundur' element={<HampiranSelisihMundurPage />} />
        <Route path='hampiran-selisih-pusat' element={<HampiranSelisihPusatPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
