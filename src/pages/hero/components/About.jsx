import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
gsap.registerPlugin(SplitText, ScrollTrigger);


const About = () => {

    useGSAP(() => {
        const split = SplitText.create('.para', {
            type: 'chars, words, lines'
        })

        gsap.from(split.chars, {
            opacity: 0.1,
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.about',
                start: 'top top',
                scrub: true,
                pin: true
            }
        })
    }, [])

    return (
        <section className="about relative h-screen w-full">
            <div className="h-full w-full">
                <img src="/images/about.svg" alt="building" className="h-full w-full object-cover object-center" />
            </div>
            <div className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center">
                <div className="w-3xl flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="logo" className="h-4 w-4 invert-100" />
                        <p className="text-sm">Who we are</p>
                    </div>
                    {['LXD is a multidisciplinary boutique studio connecting strategy, brand, space, and experience.', 'We work with founders, businesses, emerging ventures, and organisations building for the long term.', 'For us, design is a system, built layer by layer to perform in the market and grow with the business.'].map((item, i) => (
                        <p key={i} className="para text-3xl py-3">{item}</p>
                    ))}

                    <Button txt= 'About' />
                </div>
                
            </div>
        </section>
    )
}

export default About