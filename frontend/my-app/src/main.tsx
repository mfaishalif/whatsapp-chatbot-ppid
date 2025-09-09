import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./layouts/LayoutNavbar" // old layout with navbar
import Sidebar from "./layouts/LayoutSidebar" // new layout with sidebar
import KelolaInformasi from "./pages/KelolaInformasi"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* All other routes use Navbar layout */}
        <Route path="/*" element={<Navbar />} />

        {/* Template page uses sidebar layout */}
        <Route element={<Sidebar />}>
          <Route path="/KelolaInformasi" element={<KelolaInformasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
