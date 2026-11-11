import About from "./components/About"
import Clients from "./components/Clients"
import Do from "./components/Do"
import Footers from "./components/Footers"
import Project from "./components/Project"
import TouchPoint from "./components/TouchPoint"
import Work from "./components/Work"

const Hero = () => {
  return (
    <main>
      <About />
      <TouchPoint />
      <Do />
      <Work />
      <Clients />
      <Project/>
      <Footers/>
    </main>
  )
}

export default Hero