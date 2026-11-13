import { useRef, useState } from "react";
import Button from "../../hero/components/Button";
import gsap from "gsap";

const Core = () => {
    const [index, setIndex] = useState(0)
    const cursor = useRef(null)
    const items = [
        {
            name: "Real Estate & Mixed-use",
            des: [
                "Residential, branded residence, commercial and",
                "destination development."
            ],
            img: "/images/sector-real-estate.webp"
        },
        {
            name: "Hospitality & Lifestyle",
            des: [
                "Hotels, serviced apartments, restaurants, cafés, wellness",
                "and fitness."
            ],
            img: "/images/about-hospitality.webp"
        },
        {
            name: "Corporate & Workplace",
            des: [
                "Headquarters, offices, co-working and internal brand",
                "environments."
            ],
            img: "/images/sector-workplace.webp"
        },
        {
            name: "Retail",
            des: [
                "Stores, showrooms and customer-facing environments."
            ],
            img: "/images/about-retail.webp"
        },
        {
            name: "Emerging Ventures",
            des: [
                "New concepts that need strategy, brand and experience",
                "from scratch."
            ],
            img: "/images/about-emerging-ventures.webp"
        }
    ];
    const handleMove = (e) => {
        let cr = cursor.current
        gsap.to(cr, {
            opacity: 1,
            x: e.clientX - cr.clientWidth / 2,
            y: e.clientY - cr.clientHeight / 2
        })
    }
    const handleLeave = () => {
        let cr = cursor.current
        gsap.to(cr, {
            opacity: 0,
        })
    }
    return (
        <section className="h-screen w-full flex flex-col justify-center">
            <div className="flex w-full justify-between items-center p-6">
                <h2 className="heading text-5xl font-bold">Our core sectors</h2>
                <Button txt={'Explore our services'} />
            </div>
            <div onMouseMove={handleMove} onMouseLeave={handleLeave} className="border-t border-gray-300 relative">
                <div ref={cursor} className="h-96 w-72 bg-red-300 fixed top-0 left-0 z-10 pointer-events-none opacity-0">
                    <img src={items[index].img} alt={`${items[index].name} sector`} className="h-full w-full object-cover object-center" />
                </div>
                {items.map((item, i) => (
                    <div
                        onMouseEnter={() => setIndex(i)}
                        key={item.name}
                        className="mask flex items-center py-6 border-b border-gray-300 cursor-pointer px-6"
                    >
                        <div className="flex items-center gap-6 w-1/2">
                            <span className="text-xl">
                                0{i + 1}
                            </span>

                            <h3 className="heading text-5xl font-bold">
                                {item.name}
                            </h3>
                        </div>

                        <div className="leading-none">
                            {item.des.map((line, j) => (
                                <p key={j}>{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Core