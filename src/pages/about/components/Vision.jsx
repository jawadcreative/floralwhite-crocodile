import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Vision = () => {
    const svgPara = useRef(null)
    const svg = useRef(null)
    const orbitPath = useRef(null)

    const labelPositions = [
        "bottom-full mb-2 left-1/2 -translate-x-1/2",  // 1 -> above
        "left-full ml-3 top-1/2 -translate-y-1/2",     // 2 -> right
        "top-full mt-2 left-1/2 -translate-x-1/2",     // 3 -> below
        "top-full mt-2 left-1/2 -translate-x-1/2",     // 4 -> below
        "right-full mr-3 top-1/2 -translate-y-1/2",    // 5 -> left
    ]

    const items = [
        { number: "01", name: "Discover & Define" },
        { number: "02", name: "Strategize & Position" },
        { number: "03", name: "Design & Iterate" },
        { number: "04", name: "Experience & Activate" },
        { number: "05", name: "Manage & Evolve" },
    ]

    useGSAP(() => {
        const path = svg.current
        const orbit = orbitPath.current

        const length = path.getTotalLength()
        const orbitLength = orbit.getTotalLength()

        const circles = gsap.utils.toArray(
            ".orbit-node",
            svgPara.current
        )
        const boxes = gsap.utils.toArray(".box", svgPara.current);

        // Position circles on the SVG path
        circles.forEach((circle, i) => {
            const distance = (orbitLength / circles.length) * i

            const point = orbit.getPointAtLength(distance)

            gsap.set(circle, {
                left: `${(point.x / 300) * 100}%`,
                top: `${(point.y / 100) * 100}%`,
                xPercent: -50,
                yPercent: -50,
                backgroundColor: "white",
                color: "black",
            })
        })

        // Prepare SVG drawing
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        })

        // Animate SVG and activate circles
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",

            onUpdate: function () {
                const progress = this.progress();

                // Orbit circles
                circles.forEach((circle, i) => {
                    const threshold = i / circles.length;

                    gsap.set(circle, {
                        backgroundColor: progress >= threshold ? "black" : "white",
                    });
                });

                // Boxes
                boxes.forEach((box, i) => {
                    const threshold = i / boxes.length;

                    gsap.set(box, {
                        backgroundColor: progress >= threshold ? "black" : "white",
                        color: progress >= threshold ? "white" : "black",
                    });
                });
            },

            scrollTrigger: {
                trigger: svgPara.current,
                start: "top top",
                end: "+=150%",
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            },
        })

    }, { scope: svgPara })

    return (
        <section>
            {/* Heading */}
            <div className="p-6 flex justify-between items-center w-full">
                <div>
                    <div className="flex items-center gap-2">
                        <img
                            className="h-4 w-4"
                            src="/images/logo.png"
                            alt="Logo"
                        />
                        <p>Process</p>
                    </div>

                    <p className="text-6xl font-bold leading-none">
                        One vision.<br />
                        Every layer.
                    </p>
                </div>

                <p className="leading-none">
                    Our process doesn't follow a straight line. Strategy shapes design.
                    <br />
                    Space reshapes strategy. Every iteration sharpens the whole. We
                    <br />
                    keep moving between layers until each one makes the others
                    <br />
                    stronger.
                </p>
            </div>

            {/* SVG Animation */}
            <div
                ref={svgPara}
                className="h-screen w-full flex items-center justify-center relative"
            >
                <div className="w-180 max-w-[90%] aspect-[3/1] relative">

                    {/* Circles */}
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="box orbit-node absolute h-12 w-12 border border-black rounded-full flex items-center justify-center bg-white z-10"
                        >
                            {i + 1}
                            <span
                                className={`absolute whitespace-nowrap text-center text-black font-semibold ${labelPositions[i]}`}
                            >
                                {item.name}
                            </span>
                        </div>
                    ))}

                    {/* Background SVG */}
                    <svg
                        viewBox="0 0 300 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full absolute inset-0 overflow-visible"
                    >
                        <path
                            ref={orbitPath}
                            d="M 150 5 C 230 5, 295 25, 295 50 C 295 75, 230 95, 150 95 C 70 95, 5 75, 5 50 C 5 25, 70 5, 150 5 Z"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="1"
                        />
                    </svg>

                    {/* Animated SVG */}
                    <svg
                        viewBox="0 0 300 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full absolute inset-0 overflow-visible"
                    >
                        <path
                            ref={svg}
                            d="M 150 5 C 230 5, 295 25, 295 50 C 295 75, 230 95, 150 95 C 70 95, 5 75, 5 50 C 5 25, 70 5, 150 5 Z"
                            fill="none"
                            stroke="black"
                            strokeWidth="1"
                        />
                    </svg>

                </div>
            </div>
        </section>
    )
}

export default Vision