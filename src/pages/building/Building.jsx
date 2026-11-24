import About from "../hero/components/About"
import Clients from "../hero/components/Clients"
import Do from "../hero/components/Do"
import Footers from "../hero/components/Footers"
import Project from "../hero/components/Project"
import TouchPoint from "../hero/components/TouchPoint"
import Work from "../hero/components/Work"
import HeroModel from "../hero/components/HeroModel"
import BuildingMain from "./components/BuildingMain"

const Building = () => {
  return (
    <main>
      <HeroModel />
      <BuildingMain />
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

export default Building