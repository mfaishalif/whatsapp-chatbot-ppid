import { Routes, Route, Link } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'

export default function LayoutWithNavbar() {
  return (
    <>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <nav style={{ marginBottom: "2rem" }}>
          <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
