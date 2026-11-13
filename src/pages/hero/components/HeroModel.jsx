import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger)

const HeroModel = () => {
    const con = useRef(null)
    const [stage, setStage] = useState(0)

    const items = [
        "strategy",
        "space",
        "brand",
        "experience"
    ]

    // Scroll controls the stage
    useGSAP(() => {
        const totalStages = items.length

        const trigger = ScrollTrigger.create({
            trigger: con.current,
            start: "top top",
            end: `+=${totalStages * 100}%`,
            pin: true,
            scrub: 1,

            onUpdate: (self) => {
                const nextStage = Math.min(
                    totalStages - 1,
                    Math.floor(self.progress * totalStages)
                )

                setStage(prev =>
                    prev === nextStage ? prev : nextStage
                )
            }
        })

        return () => trigger.kill()

    }, { scope: con })

    // Animate the active title
    useGSAP(() => {
        const activeTitle = gsap.utils.toArray(".heading", con.current)[0]

        if (!activeTitle) return

        const split = SplitText.create(activeTitle, {
            type: "chars"
        })

        gsap.fromTo(
            split.chars,
            {
                yPercent: -100,
                rotationX: 90,
                opacity: 0
            },
            {
                yPercent: 0,
                rotationX: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.04,
                ease: "power3.out"
            }
        )

        return () => split.revert()

    }, {
        scope: con,
        dependencies: [stage]
    })

    return (
        <section
            ref={con}
            className="relative h-screen w-full overflow-hidden"
        >
            <div className="absolute bottom-40 left-20 px-4">

                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-6">
                        <span>
                            0{stage + 1}
                        </span>

                        <div className="h-px w-24 bg-amber-600" />
                    </div>

                    <div
                        className="relative h-28 w-fit bg-green-400"
                        style={{ perspective: "500px" }}
                    >
                        <h1 className="heading absolute left-0 top-0 whitespace-nowrap text-8xl font-bold">
                            {items[stage]}
                        </h1>
                    </div>

                    <div className="h-2 w-24 bg-amber-600" />

                </div>
            </div>
        </section>
    )
}

export default HeroModel
