import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import Button from "./Button";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(Draggable, SplitText, ScrollTrigger)

const Project = () => {

    const sliderRef = useRef(null)
    const containerRef = useRef(null)
    const getBounds = () => {
        const slider = sliderRef.current;
        const container = containerRef.current;

        return {
            minX: Math.min(0, container.clientWidth - slider.scrollWidth
            ),
            maxX: 0,
        };
    };
    useGSAP(() => {
        Draggable.create('.drag', {
            type: 'x',
            bounds: getBounds(),
            edgeResistance: 0.85,
            inertia: true
        })
        const spliTxt = SplitText.create('.project .para', { type: 'chars' })
        gsap.to(spliTxt.chars, {
            color: 'black',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.project .parent',
                start: 'top 80%',
                end: 'top 60%',
                scrub: true
            }
        })
    })
    const projects = [
        { image: '/images/unicon-1.webp', name: 'Unicon Group', des: 'Multi-brand portfolio', tag: 'corporate' },
        { image: '/images/perform-1.webp', name: 'Perform', des: 'Office & coworking space', year: 2026, tag: 'Worplace' },
        { image: '/images/stayform-1.webp', name: 'Stayform', des: 'Lifestyle brand', year: 2026, tag: 'Hospitality' },
        { image: '/images/fitform-1.webp', name: 'Fitform', des: 'Lifestyle brand', tag: 'Hospitality' },
    ]
    return (
        <section className="project min-h-screen w-full p-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-end gap-4">
                <div>
                    <div className="flex items-center gap-1">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="h-4 w-4 invert mix-blend-color-burn"
                        />
                        <p className="text-sm">Featured projects</p>
                    </div>

                    <div className="mt-4">
                        {["Work built", "layer by layer"].map(
                            (item, i) => (
                                <div key={i} className="overflow-hidden">
                                    <h2 className="heading text-4xl sm:text-5xl lg:text-6xl leading-none">
                                        {item}
                                    </h2>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="leading-none">
                    <p className="text-sm font-light leading-none">
                        Strategy, brand, space and experience, <br />
                        designed as one system.
                    </p>
                </div>
            </div>
            <div ref={containerRef} className="container w-full max-w-full mt-6 overflow-hidden">
                <div ref={sliderRef} className="drag flex w-max gap-5">
                    {projects.map((item, i) => (
                        <div key={i} className="w-[82vw] sm:w-[44vw] lg:w-[33vw] min-w-0 flex flex-col gap-4 group cursor-pointer">
                            <img src={item.image} className="h-[40vh] sm:h-[50vh] w-full object-cover object-center rounded-t-2xl" alt={`${item.name} project`} />
                            <div className="">
                                <div className="w-full flex justify-between items-start">
                                    <h3 className="text-xl heading group-hover:text-[#FF753E]">{item.name}</h3>
                                    <p className="text-sm">{item.tag}</p>
                                </div>
                                <p className="text-xs">{item.des}</p>
                                <p className="text-xs">{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="parent mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                <p className="para leading-none text-xl sm:text-2xl lg:text-3xl text-gray-300">Every project starts with the <br className="hidden sm:block" /> business behind it, then becomes a <br className="hidden sm:block" /> brand, a space and an experience <br className="hidden sm:block" /> people can walk into.</p>
                <Button txt='View all projects' />
            </div>
        </section>
    );
};

export default Project;
