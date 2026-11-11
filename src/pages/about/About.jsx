import Clients from "../hero/components/Clients"
import Footers from "../hero/components/Footers"
import Approach from "./components/Approach"
import Core from "./components/Core"
import Head from "./components/Head"
import Vision from "./components/Vision"

const About = () => {
    return (
        <main>
            <Head />
            <Clients />
            <Core />
            <Vision />
            <Approach />
            <Footers />
        </main>
    )
}

export default About