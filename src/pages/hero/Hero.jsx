import About from "./components/About"
import Clients from "./components/Clients"
import Do from "./components/Do"
import Footers from "./components/Footers"
import Model from "./components/Model"
import Project from "./components/Project"
import TouchPoint from "./components/TouchPoint"
import Work from "./components/Work"

const Hero = () => {
  return (
    <main className="h-full w-full">
      <About />
      <TouchPoint />
      <Do />
      <Work />
      <Clients />
      <Project />
      <Footers />
    </main>
  )
}

export default Hero