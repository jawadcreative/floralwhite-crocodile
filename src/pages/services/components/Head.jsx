import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Head = () => {
    const con = useRef(null)
    const cover = useRef(null)
    useGSAP(() => {
        gsap.to(cover.current, {
            height: '100%',
            width: '100%',
            scrollTrigger: {
                trigger: con.current,
                start: 'top 50%',
                end: 'top 10%',
                scrub: true,
            }
        })
    })
    return (
        <section className='p-6'>
            <div className="min-h-[65vh] sm:h-[70vh] w-full flex justify-center flex-col relative border-b border-gray-300 pb-8">
                <h1 className='heading text-4xl sm:text-5xl lg:text-7xl font-bold'>
                    We love ambitious ideas
                    <span className='block ml-0 sm:ml-14'>and <span className='text-[#FF753E]'>forward-thinking</span> brands</span>
                </h1>
                <p className='static sm:absolute sm:-bottom-7 right-0 bg-white leading-none px-0 sm:px-4 mt-4 sm:mt-0'>Building a brand takes more than execution, it demands <br className="hidden sm:block" /> strategy, intention, and a partner who carries the vision all <br className="hidden sm:block" /> the way through.</p>
            </div>
            <div ref={con} className="h-[70vh] sm:h-screen w-full flex items-center justify-center mt-16 sm:mt-28">
                <div ref={cover} className="h-[85%] sm:h-[70%] w-full sm:w-[70%] overflow-hidden origin-center">
                    <img src="/images/services-band.webp" alt="Brand and spatial design concept" className='h-full w-full object-cover object-center' />
                </div>
            </div>
        </section>
    )
}

export default Head