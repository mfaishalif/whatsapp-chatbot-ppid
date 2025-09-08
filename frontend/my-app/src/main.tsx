import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/LayoutNavbar'
import './index.css'
import Template from './pages/Template'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navbar />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
