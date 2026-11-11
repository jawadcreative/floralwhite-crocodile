import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Flip } from "gsap/Flip"
gsap.registerPlugin(ScrollTrigger, Flip)

const BEFORE = ["grid-cols-1", "grid-rows-4"]
const AFTER = ["grid-cols-4", "grid-rows-1", "gap-8", "py-24", "px-6"]

const BuildingMain = () => {
    const parent = useRef(null)
    const child = useRef(null)

    useGSAP(() => {
        const grid = child.current
        const items = gsap.utils.toArray(".elem")
        const topHead = gsap.utils.toArray(".topHead")

        // 1. Flip setup: record the "before" layout, then switch to "after"
        grid.classList.remove(...AFTER)
        grid.classList.add(...BEFORE)
        const state = Flip.getState(items)

        grid.classList.remove(...BEFORE)
        grid.classList.add(...AFTER)

        const flip = Flip.from(state, {
            ease: "none",
            duration: 1,
            scale: false,
            stagger: 0.15,
        })

        // 2. inner: the Flip + floor image fades (paused, driven by `master`)
        const inner = gsap.timeline({ paused: true, defaults: { ease: "none" } })
        inner.add(flip, 0)
        items.forEach((elem, i) => {
            inner.to(elem.querySelector(".floor"), { opacity: 1, duration: 1 }, i * 0.15)
        })

        const D = inner.duration() // 1.45

        // 3. master: scrubbed by scroll
        const master = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: parent.current,
                start: "top top",
                end: "+=400%",
                scrub: true,
                pin: true,
            },
        })

        // forward: 1) grid scales up, 2) then the Flip + image opacity plays
        master.to(grid, { scaleX: 1, top: 0, borderRadius: 0, duration: 0.5 })
        master.to(topHead, { filter: 'blur(10px)' })
        master.fromTo(inner,
            { progress: 0 },
            { progress: 1, duration: D, immediateRender: false },
            ">" // starts exactly when the scale tween finishes
        )

        // back: after → before (0.3 hold first)
        master.fromTo(inner,
            { progress: 1 },
            { progress: 0, duration: D, immediateRender: false },
            ">+=.6"
        )

        master.to(topHead, {
            filter: 'blur(0px)'
        })

        return () => {
            grid.classList.remove(...AFTER)
            grid.classList.add(...BEFORE)
        }
    },
        { scope: parent }
    )

    return (
        <section ref={parent} className="h-screen w-full relative">
            <div
                ref={child}
                className="h-screen w-full scale-x-75 absolute top-[30%] grid grid-cols-1 grid-rows-4 overflow-hidden rounded-4xl"
            >
                {['strategy', 'space', 'brand', 'experience'].map((item, i) => (
                    <div
                        key={i}
                        style={{ backgroundPosition: `0 ${-i * 25}vh` }}
                        className={`elem relative col-span-1 row-span-1 bg-neutral-900 bg-size-[100vw_100vh] bg-[url('/images/building.jpg')] bg-no-repeat flex ${(i + 1) % 2 === 0 ? 'items-start justify-end' : 'items-end justify-start'}`}
                    >
                        <h1 className="topHead text-6xl text-white uppercase font-bold">{item}</h1>
                        <div className="floor absolute inset-0 h-full w-full opacity-0 flex items-center flex-col">
                            <img
                                src={`/images/floor-${i + 1}.jpg`}
                                className="h-full w-full object-cover"
                            />
                            <p className="absolute -bottom-10 uppercase">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BuildingMain