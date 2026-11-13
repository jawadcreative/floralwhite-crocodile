import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Button from "../../hero/components/Button"
gsap.registerPlugin(ScrollTrigger)

const Head = () => {
    const scroller = useRef(null)
    const main = useRef(null)
    useGSAP(() => {
        gsap.to(scroller.current, {
            xPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: main.current,
                start: 'top 0',
                end: 'top -50%',
                scrub: true
            }
        })
    })
    return (
        <section ref={main} className="h-screen w-full p-6 flex flex-col justify-between">
            <div className="scroller mt-28 overflow-x-auto w-full pointer-events-none">
                <div ref={scroller} className="flex items-center gap-12">
                    <h1 className="heading text-9xl font-bold uppercase">Projects</h1>
                    <img src="/images/logo.png" alt="" aria-hidden="true" className="h-28 w-28" />
                    <span aria-hidden="true" className="heading text-9xl font-bold uppercase">Projects</span>
                    <img src="/images/logo.png" alt="" aria-hidden="true" className="h-28 w-28" />
                    <span aria-hidden="true" className="heading text-9xl font-bold uppercase">Projects</span>
                </div>
            </div>
            <div className="flex w-full justify-between mt-20">
                <div className="flex flex-col gap-6">
                    <div className="">
                        <p className="text-6xl font-bold">52+</p>
                        <p>Projects completed</p>
                    </div>
                    <div className="">
                        <p className="text-6xl font-bold">30+</p>
                        <p>Clients across the region</p>
                    </div>

                </div>
                <div className="flex flex-col gap-6">
                    <p className="leading-none">We bring places to life through strategy, brand, space and <br /> experience. Every project is designed as one system, built on <br /> clarity, character and measurable impact. Explore some of the <br /> work we've delivered across real estate, hospitality, retail, <br /> workplace and culture.</p>
                    <Button txt={'Start a project'} />
                </div>
            </div>
        </section>
    )
}

export default Head