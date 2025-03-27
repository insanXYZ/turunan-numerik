import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home"
import HampiranSelisihMajuPage from "./pages/hampiran_selisih_maju"
import HampiranSelisihMundurPage from "./pages/hampiran_selisih_mundur"
import HampiranSelisihPusatPage from "./pages/hampiran_selisih_pusat"
import Layout from "./components/layouts/layout"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>        
        <Route index element={<HomePage/>} />
        <Route path='hampiran-selisih-maju' element={<HampiranSelisihMajuPage/>}></Route>
        <Route path='hampiran-selisih-mundur' element={<HampiranSelisihMundurPage/>}></Route>
        <Route path='hampiran-selisih-pusat' element={<HampiranSelisihPusatPage/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
