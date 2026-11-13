const Approach = () => {
    const cards = [
        { tag: 'Our edge', name: 'Strategy and space, one language.', first: "The costliest problem in brand-building isn't bad design. It's fragmentation.", des: "Most studios hand the brand from one team to the next. We don't. At LXD, brand strategy, interior design and experience design run as one continuous system. The identity you build is the space your customers walk into." }, { tag: 'Our size', name: 'Fewer clients. Full attention.', first: "We take on fewer projects so we can go deeper on each.", des: "Real ownership takes full attention. Work with LXD and you get the founding team's thinking." }, { tag: 'Our promise', name: 'From first idea to final experience.', first: "We carry the vision, so you don't have to manage the gap.", des: "We've taken brands from a name on a napkin to an operating business, covering concept, identity, space, digital presence, customer journey and launch. One team, one vision, one accountable point of contact." }
    ]
    return (
        <section className="flex p-6">
            <div className="w-1/2 h-full sticky top-20">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="" className="h-4 w-4" />
                    <p>Approach</p>
                </div>
                <h2 className="heading mt-4 text-5xl leading-none font-bold">Boutique <br /> by design.</h2>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
                {cards.map((item, i) => (
                    <div
                        key={item.name}
                        className={`h-[60vh] sticky top-20 w-full p-6 flex flex-col justify-between shadow-md ${i === 0
                                ? "bg-[#FFFDF8]"
                                : i === 1
                                    ? "bg-[#EEF7FE]"
                                    : "bg-black text-white"
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <p>0{i + 1}</p>
                            <p>{item.tag}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="heading text-5xl font-bold w-[85%]">{item.name}</h3>
                            <p className="text-sm">{item.first}</p>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Approach