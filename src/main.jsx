import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home"
import Layout from "./components/layouts/layout"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>        
        <Route index element={<HomePage/>} />
        <Route path="/app" element={<p>tes app</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
