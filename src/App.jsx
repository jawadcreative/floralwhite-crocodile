import { Route, Routes } from "react-router"
import Hero from "./pages/hero/Hero"
import Building from "./pages/building/Building"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Project from "./pages/projects/Project"
import Contact from "./pages/contact/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Building />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App