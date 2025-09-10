import { Routes, Route } from 'react-router-dom'
import App from '../App'
import About from '../About'

import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu" // Adjust import path as needed

export default function LayoutWithNavbar() {
  return (
    <>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <nav style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className='font-bold'>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className='font-bold'>About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
