import { useGSAP } from "@gsap/react";
import { RiArrowRightLine, RiArrowRightUpLine, RiInstagramLine, RiLinkedinLine } from "@remixicon/react"
import gsap from "gsap";
import { useRef, useState } from "react";
import Footers from "../hero/components/Footers";
import { SplitText } from "gsap/SplitText";

const Contact = () => {
    const ani = useRef(null)
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedDuration, setSelectedDuration] = useState('')
    const [selectedBudget, setSelectedBudget] = useState('')
    const services = [
        'Brand Strategy',
        'Brand Identity',
        'Customer Experience',
        'Architecture & Interiors',
        'Workplace Strategy',
        'Digital Presence',
        'Marketing',
        'Other'
    ];
    const duration = [
        'Within 1 month',
        '2–3 months',
        '3–6 months',
        'Flexible'
    ]
    const budget = [
        'Under SAR 100k',
        'SAR 100k – 250k',
        'SAR 250k – 500k',
        'SAR 500k – 1M',
        'SAR 1M+'
    ]

    const handleService = (service) => {
        setSelectedServices((prev) => prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]);
    };
    const handleDuration = (item) => {
        setSelectedDuration(item)
    }
    const handleBudget = (item) => {
        setSelectedBudget(item)
    }
    useGSAP(() => {
        let splt = SplitText.create(ani.current, { type: 'chars, lines', linesClass: 'overflow-hidden' })
        gsap.from(splt.chars, {
            yPercent: 100,
            stagger: 0.015
        })
    })
    return (
        <main>
            <section className="h-full w-full flex flex-col lg:flex-row bg-black text-white">
                <div className="p-6 pt-24 lg:pt-24 min-h-screen h-auto lg:h-screen lg:sticky top-0 w-full lg:w-1/2 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="" className="h-4 w-4" />
                        <p className="text-sm">Contact us</p>
                    </div>
                    <h1 ref={ani} className="heading text-4xl sm:text-5xl lg:text-6xl font-bold">Let’s talk about <br /> your project.</h1>
                    <p>LXD is a multidisciplinary studio connecting strategy, brand, space <br className="hidden lg:block" /> and experience. Tell us where your project is going and we’ll reply <br className="hidden lg:block" /> within two working days.</p>
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="" className="h-4 w-4" />
                        <p className="text-sm">Write us</p>
                    </div>
                    <p className="flex items-start gap-3 min-w-0 break-all"><span><RiArrowRightLine size={18} /></span> Contact@letsexperiencedesign.com</p>
                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-between">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <img src="/images/logo.png" alt="" className="h-4 w-4" />
                                <p className="text-sm">Call us</p>
                            </div>
                            <p className="flex items-center gap-3"><span><RiArrowRightLine size={18} /></span>+966 55 513 6617</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <img src="/images/logo.png" alt="" className="h-4 w-4" />
                                <p className="text-sm">Visit us</p>
                            </div>
                            <p className="">LXD Studio <br />
                                Riyadh, Saudi Arabia · Beirut, Lebanon</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src="/images/logo.png" alt="" className="h-4 w-4" />
                            <p className="text-sm">Stay connected</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {[<RiInstagramLine key="instagram" size={16} />, <RiLinkedinLine key="linkedin" size={16} />].map((item, i) => (
                                <div key={i} className="px-4 py-2 bg-[#a19e9e52] backdrop-blur-md rounded-full">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-6 text-black">
                    <div className="h-full w-full p-6 bg-[#F4F1EA] rounded-lg flex flex-col gap-10">

                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <img src="/images/logo.png" alt="" className="h-4 w-4" />
                                <p className="text-sm">Get in touch</p>
                            </div>

                            <h2 className="heading leading-none text-lg sm:text-xl lg:text-2xl font-bold">
                                One brief is all it takes <br className="hidden sm:block" />
                                to start building <br className="hidden sm:block" />
                                something layer by <br className="hidden sm:block" />
                                layer.
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">
                                Service<span>(choose any)</span>
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {services.map((item) => {
                                    const isSelected = selectedServices.includes(item);

                                    return (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => handleService(item)}
                                            className={`px-4 py-2 border border-white cursor-pointer transition-colors duration-300 hover:border-gray-400 ${isSelected
                                                ? 'bg-black text-white'
                                                : 'bg-white text-black'
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Timeframe</p>
                            <div className="flex flex-wrap gap-3">
                                {duration.map((item, i) => {
                                    return (
                                        <button onClick={() => handleDuration(item)} key={i} className={`px-4 py-2 border border-white cursor-pointer transition-colors duration-300 hover:border-gray-400 ${selectedDuration === item ? 'bg-black text-white' : 'bg-white text-black'}`}>{item}</button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Estimated budget</p>
                            <div className="flex flex-wrap gap-3">
                                {budget.map((item, i) => {
                                    return (
                                        <button onClick={() => handleBudget(item)} key={i} className={`px-4 py-2 border border-white cursor-pointer transition-colors duration-300 hover:border-gray-400 ${selectedBudget === item ? 'bg-black text-white' : 'bg-white text-black'}`}>{item}</button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Project information</p>
                            <textarea name="info" id="info" placeholder="Where it is, What it needs, and what success looks like." className="bg-white w-full min-h-25 outline-none p-2 border border-white focus:border-black placeholder:text-gray-400"></textarea>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="flex flex-col gap-2">
                                <span className="text-sm">Name</span>
                                <input type="text" name="name" id="name" placeholder="Your Name" className="p-2 bg-white border border-white outline-none focus:border-black" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-sm">Email</span>
                                <input type="email" name="email" id="email" placeholder="Your Email" className="p-2 bg-white border border-white outline-none focus:border-black" />
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <label className="flex flex-col gap-2 w-full">
                                    <span className="text-sm">Phone <span className="text-xs text-gray-400">(optional)</span></span>
                                    <input type="tel" name="phone" id="phone" placeholder="+966" className="p-2 bg-white border border-white outline-none focus:border-black" />
                                </label>
                                <label className="flex flex-col gap-2 w-full">
                                    <span className="text-sm">Company <span className="text-xs text-gray-400">(optional)</span></span>
                                    <input type="text" name="text" id="text" placeholder="Company name" className="p-2 bg-white border border-white outline-none focus:border-black" />
                                </label>
                            </div>
                        </div>

                        <button className="flex gap-2 w-full items-center justify-center bg-black text-white py-4 text-xl cursor-pointer group">Send enquiry <span className="group-hover:mb-1 group-hover:ml-1 duration-300"><RiArrowRightUpLine size={18} /></span></button>

                    </div>
                </div>
            </section>
            <Footers />
        </main>
    )
}

export default Contact