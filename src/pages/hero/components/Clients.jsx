const Clients = () => {
    return (
        <section className="min-h-screen w-full p-6">
            <div className="flex w-full justify-between items-end">
                <div>
                    <div className="flex items-center gap-1">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="h-4 w-4 invert-100 mix-blend-color-burn"
                        />
                        <p className="text-sm">Clients</p>
                    </div>

                    <div className="mt-4">
                        {["Clients we have", "happily served"].map(
                            (item, i) => (
                                <div
                                    key={i}
                                    className="overflow-hidden"
                                >
                                    <p className="heading text-6xl leading-none">
                                        {item}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="leading-none">
                    <p className="text-4xl font-bold">25</p>
                    <p className="text-sm font-light leading-none">
                        organisations across government,<br /> hospitality, retail, food and workplace.
                    </p>

                </div>
            </div>

            <div className="mt-6 h-[130vh] w-full grid grid-cols-5 grid-rows-5 gap-3">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="col-span-1 row-span-1 bg-[#F4F1EA] flex items-center justify-center p-6 group">
                        <img
                            src={`/logos/client-${String(i + 1).padStart(2, '0')}.webp`}
                            alt={`Client ${i + 1}`}
                            className="w-full h-20 object-contain object-center group-hover:scale-105 transition-all duration-500 contrast-50 group-hover:contrast-100"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients