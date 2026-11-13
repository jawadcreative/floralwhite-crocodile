import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
gsap.registerPlugin(SplitText)

const TextAnimation = ({ content, style }) => {
    let h1Ref = useRef(null)
    let h2Ref = useRef(null)
    let root = useRef(null)
    let tl = useRef(null)
    useGSAP(() => {
        let firstText = h1Ref.current
        let secText = h2Ref.current

        const splt1 = SplitText.create(firstText, { type: 'chars' })
        const splt2 = SplitText.create(secText, { type: 'chars' })

        tl.current = gsap.timeline({ paused: true })
            .to(splt1.chars, { yPercent: -100, stagger: 0.012 }, 0)
            .to(splt2.chars, { yPercent: -100, stagger: 0.012 }, 0)


    }, { scope: root })
    return (
        <div ref={root} onMouseEnter={() => tl.current.play()} onMouseLeave={() => tl.current.reverse()} className="h-6 overflow-hidden">
            <p ref={h1Ref} className={style}>{content}</p>
            <p ref={h2Ref} className={style}>{content}</p>
        </div>
    )
}

export default TextAnimation