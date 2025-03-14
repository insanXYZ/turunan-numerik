import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
)
