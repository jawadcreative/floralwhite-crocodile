import Core from "../about/components/Core"
import Clients from "../hero/components/Clients"
import Footers from "../hero/components/Footers"
import Project from "../hero/components/Project"
import Brand from "./components/Brand"
import Do from "./components/Do"
import Head from "./components/Head"
import Layer from "./components/Layer"

const Services = () => {
    return (
        <main>
            <Head />
            <Do />
            <Clients />
            <Project />
            <Core />
            <Layer />
            <Brand/>
            <Footers />
        </main>
    )
}

export default Services