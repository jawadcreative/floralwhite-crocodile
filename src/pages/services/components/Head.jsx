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
            <div className="h-[70vh] w-full flex justify-center flex-col relative border-b border-gray-300">
                <h1 className='text-7xl font-bold'>We love ambitious ideas</h1>
                <h1 className='text-7xl font-bold ml-14'>and <span className='text-[#FF753E]'>forward-thinking</span> brands</h1>
                <p className='absolute -bottom-7 right-0 bg-white leading-none px-4'>Building a brand takes more than execution, it demands <br /> strategy, intention, and a partner who carries the vision all <br /> the way through.</p>
            </div>
            <div ref={con} className="h-screen w-full flex items-center justify-center mt-28">
                <div ref={cover} className="h-[70%] w-[70%] overflow-hidden origin-center">
                    <img src="/images/services-band.webp" className='h-screen w-screen object-cover object-center' />
                </div>
            </div>
        </section>
    )
}

export default Head