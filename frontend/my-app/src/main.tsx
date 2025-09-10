import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/LayoutNavbar" // old layout with navbar
import Sidebar from "./layouts/LayoutSidebar" // new layout with sidebar
import KelolaInformasi from "./pages/KelolaInformasi"
import "./index.css"
import AntrianPermohonan from "./pages/AntrianPermohonan"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* All other routes use Navbar layout */}
        <Route path="/*" element={
          <div className="centered-navbar">
            <Navbar />
          </div>
        } />

        {/* All routes in pages directory uses sidebar layout */}
        <Route element={<Sidebar />}>
          <Route path="/KelolaInformasi" element={<KelolaInformasi />} />
          <Route path="/AntrianPermohonan" element={<AntrianPermohonan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
