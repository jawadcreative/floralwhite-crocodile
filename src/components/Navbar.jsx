import { RiArrowRightLine, RiCloseLine, RiMenu4Line } from "@remixicon/react"
import Button from "../pages/hero/components/Button"
import { useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router";

const Navbar = () => {
    const nav = useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const [opening, setOpening] = useState(false)

    const handleNav = () => {
        setOpening(true)
        try {
            setIsOpen(!isOpen)
            gsap.to(nav.current, {
                height: isOpen ? 0 : '100vh'
            })
        } catch (e) {
            console.log('Please wait', e)
        } finally {
            setOpening(false)
        }
    }
    const closeNav = () => {
        if (!isOpen) return;

        setIsOpen(false);
        gsap.to(nav.current, {
            height: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
    };

    return (
        <>
            <div className="w-full flex justify-between fixed top-0 left-0 z-50">
                <div className={`w-60 flex items-center justify-between h-12 p-2 bg-black text-white`}>
                    <Link to={'/'} className="w-24">
                        <svg fill="white" className="hdr__wordmark" viewBox="0 0 223 69" aria-hidden="true"><path d="M68.394 26.7701V68.4141H0V6.10352e-05H41.644C20.247 24.4731 8.722 46.8231 15.146 53.2481C21.591 59.6921 43.921 48.1661 68.394 26.7701Z" fill="white"></path><path d="M130.792 53.8512C127.385 57.2582 119.5 55.1752 111.167 49.2962C102.834 55.1752 94.9504 57.2582 91.5434 53.8512C88.1354 50.4442 90.2184 42.5592 96.0794 34.2272C90.1794 25.8942 88.0975 17.9702 91.5045 14.5632C94.9115 11.1562 102.834 13.2392 111.167 19.1192C119.5 13.2392 127.424 11.1562 130.831 14.5632C134.238 17.9702 132.155 25.8942 126.256 34.2272C132.116 42.5592 134.199 50.4442 130.792 53.8512ZM76.9604 68.4142H145.355V0.000183105H76.9604V68.4142Z" fill="white"></path><path d="M192.008 42.3841C181.144 53.2281 168.684 58.3681 164.167 53.8511C159.67 49.3351 164.79 36.8751 175.654 26.0301C186.498 15.1861 198.959 10.0461 203.475 14.5631C207.992 19.0801 202.852 31.5401 192.008 42.3841ZM188.114 6.10352e-05H153.907V68.4141H188.114C206.999 68.4141 222.302 53.0921 222.302 34.2071C222.302 15.3221 206.999 6.10352e-05 188.114 6.10352e-05Z" fill="white"></path></svg>
                    </Link>
                    <button disabled={opening} onClick={() => handleNav()} className="w-20 flex justify-center gap-2 items-center cursor-pointer">
                        <span>{isOpen ? <RiCloseLine size={18} /> : <RiMenu4Line size={18} />}</span>
                        <div className="">
                            <p>{isOpen ? 'Close' : 'Menu'}</p>
                        </div>
                    </button>
                </div>
                <div className="px-6">
                    <Button txt={'Start a project'} />
                </div>
            </div>
            <section ref={nav} className='w-full h-0 bg-[#ffffff91] backdrop-blur-md fixed top-0 left-0 z-40 overflow-x-hidden overflow-y-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start bg-black pt-20 p-6">
                    <div className="flex flex-col gap-6 min-w-0 py-4">
                        <p className="heading text-4xl font-bold leading-none text-white">Take a look at some <br /> of our recent work.</p>
                        <p className="text-white">From strategy and brand to spaces people walk into.</p>
                        <Button txt={'See our projects'} />
                    </div>
                    <div className="flex flex-col gap-8 min-w-0">
                        <div className="flex gap-2">
                            <img src="/images/logo.png" alt="" className="h-4 w-4 invert-100" />
                            <p className="text-sm text-white">Sectors</p>
                        </div>
                        <div className="flex flex-col">
                            {['Real Estate & Mixed‑use',
                                'Hospitality & Lifestyle',
                                'Retail',
                                'Corporate & Workplace',
                                'Arts & Culture'].map((item, i) => (
                                    <Link to={''} key={i} className="text-white hover:text-amber-600 cursor-pointer w-fit">{item}</Link>
                                ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 min-w-0">
                        <div className="flex gap-2">
                            <img src="/images/logo.png" alt="" className="h-4 w-4 invert-100" />
                            <p className="text-sm text-white">Contact</p>
                        </div>
                        <div className="">
                            <p className="flex gap-2 items-center text-white break-all"><span><RiArrowRightLine size={16} /></span> Contact@letsexperiencedesign.com</p>
                            <p className="flex gap-2 items-center text-white"><span><RiArrowRightLine size={16} /></span> +966 55 513 6617</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 min-w-0">
                        <div className="flex gap-2">
                            <img src="/images/logo.png" alt="" className="h-4 w-4 invert-100" />
                            <p className="text-sm text-white">Menu</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {['Home',
                                'About',
                                'Services',
                                'Projects',
                                'Contact'].map((item, i) => (
                                    <Link key={i} onClick={closeNav} to={i === 0 ? '/' : item.toLocaleLowerCase()} className="heading text-white text-4xl sm:text-5xl lg:text-6xl font-bold">{item}</Link>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar