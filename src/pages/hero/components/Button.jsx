import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { Link } from "react-router"
import { RiArrowRightLine } from "@remixicon/react"
gsap.registerPlugin(SplitText)

const Button = ({ txt }) => {
    const root = useRef(null)
    const tl = useRef(null)

    useGSAP(() => {
        const splt1 = SplitText.create('.btn-1', { type: 'chars' })
        const splt2 = SplitText.create('.btn-2', { type: 'chars' })

        // arrow 2 starts off-screen on the left
        gsap.set('.arrow-2', { xPercent: -100 })

        tl.current = gsap.timeline({ paused: true })
            .to(splt1.chars, { yPercent: -100, stagger: 0.02 }, 0)
            .to(splt2.chars, { yPercent: -100, stagger: 0.02 }, 0)
            .to('.arrow-1', { xPercent: 100, duration: 0.4, ease: 'power2.inOut' }, 0)
            .to('.arrow-2', { xPercent: 0, duration: 0.4, ease: 'power2.inOut' }, 0)
    }, { scope: root })

    return (
        <Link
            ref={root}
            to="/about"
            onMouseEnter={() => tl.current.play()}
            onMouseLeave={() => tl.current.reverse()}
            className="flex gap-0.5 group mt-5 w-fit"
        >
            <div className="h-7 flex flex-col overflow-hidden bg-gray-200">
                <p className="btn-1 text-xs h-7 leading-7 shrink-0 px-4 uppercase">{txt}</p>
                <p className="btn-2 text-xs h-7 leading-7 shrink-0 px-4 uppercase">{txt}</p>
            </div>
            <div className="relative h-7 w-7 overflow-hidden shadow-lg bg-gray-200">
                <span className="arrow-1 absolute inset-0 flex items-center justify-center">
                    <RiArrowRightLine size={14} />
                </span>
                <span className="arrow-2 absolute inset-0 flex items-center justify-center">
                    <RiArrowRightLine size={14} />
                </span>
            </div>
        </Link>
    )
}

export default Button