
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const items = [
    { image: "/images/slippers.webp", x: "6%", y: "17%", w: "75px" },
    {
        image: "/images/bags.webp",
        x: "18%",
        y: "16%",
        w: "90px",
        title: "STAYFORM",
        subtitle: "Hospitality",
    },
    { image: "/images/coffee.webp", x: "33%", y: "16%", w: "65px" },
    {
        image: "/images/card.webp",
        x: "53%",
        y: "18%",
        w: "90px",
        title: "IDENTITY",
        subtitle: "Corporate",
    },
    {
        image: "/images/desk.webp",
        x: "70%",
        y: "17%",
        w: "110px",
        title: "PERFORM",
        subtitle: "Workspace",
    },
    { image: "/images/robe.webp", x: "87%", y: "18%", w: "75px" },
    { image: "/images/phone.webp", x: "10%", y: "39%", w: "65px" },
    { image: "/images/avocado.webp", x: "20%", y: "37%", w: "75px" },
    {
        image: "/images/bed.webp",
        x: "41%",
        y: "25%",
        w: "110px",
        title: "REST",
        subtitle: "Serviced living",
    },
    { image: "/images/leaf.webp", x: "70%", y: "32%", w: "80px" },
    { image: "/images/sprig.webp", x: "84%", y: "39%", w: "55px" },
    {
        image: "/images/building.webp",
        x: "8%",
        y: "65%",
        w: "125px",
        title: "CAMPUS",
        subtitle: "Real estate",
    },
    { image: "/images/sphere.webp", x: "28%", y: "64%", w: "80px" },
    {
        image: "/images/chair.webp",
        x: "48%",
        y: "68%",
        w: "90px",
        title: "LOUNGE",
        subtitle: "Residential",
    },
    { image: "/images/lamp.webp", x: "66%", y: "63%", w: "65px" },
    {
        image: "/images/notebooks.webp",
        x: "82%",
        y: "67%",
        w: "100px",
        title: "STATIONERY",
        subtitle: "Brand",
    },
    { image: "/images/arugula.webp", x: "5%", y: "84%", w: "80px" },
    {
        image: "/images/envelope.webp",
        x: "32%",
        y: "76%",
        w: "90px",
        title: "FITFORM",
        subtitle: "Fitness",
    },
    { image: "/images/bottle.webp", x: "55%", y: "83%", w: "90px" },
    { image: "/images/mug.webp", x: "72%", y: "65%", w: "85px" },
    { image: "/images/dumbbell.webp", x: "72%", y: "85%", w: "85px" },
];

const bottomImageIndexes = [2, 13, 19];

const TouchPoint = () => {
    const container = useRef(null);

    useGSAP(() => {
        const splitBrand = SplitText.create(".brand", { type: "chars", });
        const splitTouch = SplitText.create(".touch", { type: 'chars' })



        const floating = gsap.to(".img", {
            y: 5,
            repeat: -1,
            yoyo: true,
            ease: "none",
            duration: 0.5,
            stagger: {
                grid: [5, 13],
                from: "random",
                amount: 1,
            },
        });

        // Separate the images into two groups
        const topImages = items
            .map((_, i) => i)
            .filter((i) => !bottomImageIndexes.includes(i))
            .map((i) => `.img-${i}`);

        const bottomImages = bottomImageIndexes.map((i) => `.img-${i}`);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                onEnter: () => floating.pause(),
                onLeaveBack: () => floating.resume(),
            },
        });

        // 1. Heading entrance
        tl.from(splitBrand.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.04,
            ease: "power2.out",
        });

        // 2. Images entrance
        tl.from(".img", {
            yPercent: 1500,
            opacity: 0,
            stagger: 0.025,
            ease: "power3.out",
        }, "-=0.3");

        // 3. Move all other images to the top and hide
        tl.to(topImages, {
            left: "50%",
            top: "-26%",
            xPercent: -50,
            opacity: 0,
            stagger: 0.02,
            ease: "power2.inOut",
        }, ">");

        // 4. Move selected images into a bottom row
        tl.to(bottomImages, {
            left: (index) => ["25%", "50%", "75%"][index],
            top: (index) => ["75%", '60%', "70%"][index],
            xPercent: -50,
            width: '160px',
            opacity: 1,
            scale: 0.9,
            stagger: 0.05,
            ease: "power2.inOut",
        }, "<");

        // 5. Move heading upward
        tl.to(splitBrand.chars, {
            yPercent: -100,
            opacity: 0,
            stagger: 0.04,
            ease: "power2.in",
        }, "<");

        tl.to('.touchParent', {
            opacity: 1
        })
        tl.from(splitTouch.chars, {
            y: '100%',
            stagger: .04
        })

        return () => { splitBrand.revert(); floating.kill(); };
    }, { scope: container });

    return (
            <section ref={container} className="brandHero h-screen w-full flex items-center justify-center p-6 overflow-hidden">
                <div className="relative h-full w-full bg-[#E3E6D3] rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="touchParent absolute top-14 opacity-0 flex flex-col items-center">
                        {['Every', 'Touchpoint'].map((item, i) => (
                            <div key={i} className="overflow-hidden">
                                <p className="touch text-5xl md:text-8xl font-bold uppercase text-[#FF753E]">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Heading */}
                    <div className="overflow-hidden">
                        <p className="brand text-[#5C154A] text-5xl md:text-8xl font-bold leading-none">ONE BRAND</p>
                    </div>

                    {/* Images */}
                    {items.map((item, i) => (
                        <div key={i} style={{ left: item.x, top: item.y, width: item.w }} className={`img img-${i} absolute flex flex-col items-center`} >
                            <img src={item.image} alt={item.title || "Brand image"} className="w-full object-contain" />

                            {item.title && (
                                <>
                                    <p className="text-sm leading-none text-[#5C154A]"> {item.title} </p>
                                    <p className="text-xs leading-none text-[#5C154A]"> {item.subtitle}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
    );
};

export default TouchPoint;
