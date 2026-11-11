import About from "../hero/components/About"
import Clients from "../hero/components/Clients"
import Do from "../hero/components/Do"
import Footers from "../hero/components/Footers"
import Project from "../hero/components/Project"
import TouchPoint from "../hero/components/TouchPoint"
import Work from "../hero/components/Work"
import BuildingMain from "./components/BuildingMain"

const Building = () => {
  return (
    <main>
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