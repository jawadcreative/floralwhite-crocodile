import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Button from "../../hero/components/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const services = [
    {
        name: "Brand Strategy & Creation",
        tags: [
            "Research & Benchmarking",
            "Positioning",
            "Brand Architecture",
            "Business Naming",
            "Strategy Alignment",
            "Brand Identity, Narrative & Storytelling",
        ],
    },
    {
        name: "Customer Experience Design",
        tags: [
            "Service Design",
            "Experience Optimization",
            "Customer Journeys",
            "Touchpoint Strategy",
            "Technology Interface",
            "CRM & Automation",
        ],
    },
    {
        name: "Architecture, Interior & Spatial Design",
        tags: [
            "Spatial Strategy",
            "Concept Design",
            "Interior Architecture",
            "Experience Design",
            "Events & Exhibitions",
            "Environmental Design",
            "Custom Furniture & Product Design",
        ],
    },
    {
        name: "Workplace Strategy",
        tags: [
            "Departmental Adjacencies",
            "Functional Programming",
            "User Journey & Circulation",
            "Spatial Relationships & Connectivity",
            "Real Estate & Mixed-Use Strategy",
        ],
    },
];

const Do = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Heading animation
        const splitText = SplitText.create(".heading", {
            type: "chars",
        });

        gsap.from(splitText.chars, {
            yPercent: 100,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "top 40%",
                scrub: 1,
            },
        });

        // Individual service hover animations
        const serviceItems = gsap.utils.toArray(".service-item");

        serviceItems.forEach((item) => {
            const bg = item.querySelector(".service-bg");
            const text = item.querySelector(".service-text");

            // Initial state
            gsap.set(bg, {
                height: 0,
                top: 0,
                bottom: "auto",
            });

            const hoverTimeline = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 0.45,
                    ease: "power3.inOut",
                },
            });

            hoverTimeline
                .to(bg, {
                    height: "100%",
                })
                .to(text, {
                    color: "#ffffff",
                }, "<");

            // Enter
            item.addEventListener("mouseenter", () => {
                // If leave animation is running, reverse it
                hoverTimeline.play();
            });

            // Leave
            item.addEventListener("mouseleave", () => {
                hoverTimeline.reverse();
            });
        });

        return () => splitText.revert();
    },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="do min-h-screen w-full p-6"
        >
            {/* Header */}
            <div className="flex w-full justify-between items-start">
                <div>
                    <div className="flex items-center gap-1">
                        <img
                            src="/images/logo.png"
                            alt=""
                            className="h-4 w-4 invert-100 mix-blend-color-burn"
                        />
                        <p className="text-sm">What we do</p>
                    </div>

                    <div className="mt-4">
                        {["Eight ways we", "build a brand"].map(
                            (item, i) => (
                                <div
                                    key={i}
                                    className="overflow-hidden"
                                >
                                    <h2 className="heading text-4xl leading-none">
                                        {item}
                                    </h2>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="leading-none">
                    <p>
                        From the first strategy session to the space
                        people walk <br />
                        into, these are the services we bring together.
                    </p>

                    <Button txt="See all our services" />
                </div>
            </div>

            {/* Services */}
            <div className="mt-12">
                {services.map((item, i) => (
                    <div
                        key={i}
                        className="mask service-item relative isolate overflow-hidden border-b border-gray-300 py-6 cursor-pointer px-6 group flex justify-between"
                    >
                        {/* Animated background */}
                        {/* <div className="service-bg absolute top-0 left-0 -z-10 h-0 w-full bg-black px-4" /> */}

                        {/* Service text */}
                        <div className="w-1/2 service-text relative z-10 flex items-center gap-12 text-black">
                            <span className="text-sm group-hover:text-[#ff753e]">
                                (0{i + 1})
                            </span>

                            <h3 className="heading text-3xl md:text-5xl font-bold">
                                {item.name}
                            </h3>
                        </div>
                        <div className="w-1/3 flex gap-1 flex-wrap">
                            {item.tags.map((tag) => (
                                <p key={tag}>{tag}.</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Do;
