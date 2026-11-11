import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(SplitText, ScrollTrigger)

const Head = () => {
    const text = useRef(null)
    const opacity = useRef(null)
    const opacityParent = useRef(null)
    useGSAP(() => {
        const splt = SplitText.create(text.current, {
            type: 'chars, words, lines',
            linesClass: 'overflow-hidden'
        })
        const textOpacity = SplitText.create(opacity.current, {
            type: 'chars'
        })
        gsap.to(textOpacity.chars, {
            color: 'black',
            stagger: 0.1,
            scrollTrigger: {
                trigger: opacityParent.current,
                start: 'top 60%',
                end: 'top 20%',
                scrub: 2
            }
        })
        gsap.from(splt.chars, {
            y: 100,
            stagger: 0.02
        })
    })
    return (
        <section>
            <div className="h-screen w-full flex flex-col justify-center gap-3 px-12 bg-[url('/images/about.svg')] bg-cover bg-center">
                <div className="flex gap-2">
                    <img src="/images/logo.png" alt="logo" className="h-4 w-4" />
                    <p className="text-sm">About us</p>
                </div>
                <h1 ref={text} className="text-6xl overflow-hidden">We work across sectors where
                    business <br /> strategy, brand, space, and
                    experience need to come together.</h1>
            </div>
            <div ref={opacityParent} className="h-[50vh] w-full flex items-center justify-end px-6">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2">
                        <img src="/images/logo.png" alt="logo" className="h-4 w-4" />
                        <p className="text-sm">What we believe in</p>
                    </div>
                    <p ref={opacity} className="text-4xl text-gray-300">From a single idea to a wider brand <br /> ecosystem, we create connected <br /> brands and spaces designed to <br /> resonate with people, perform in the <br /> market, and grow with purpose.</p>
                </div>
            </div>
        </section>

    )
}

export default Head