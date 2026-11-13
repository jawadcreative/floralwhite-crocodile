
const Footers = () => {
    const navigation = [
        "Home",
        "Projects",
        "About",
        "Sectors",
        "Services",
        "Contact",
    ];

    const socials = [
        { name: "Instagram", href: "#" },
        { name: "LinkedIn", href: "#" },
    ];

    return (
        <footer id="top" className="bg-[#0D0D0D] text-[#F4F1EA] px-6 pt-16 pb-6">

            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">

                <div>
                    <h2 className="heading text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight max-w-2xl">
                        Designing systems,
                        <br />
                        building places.
                    </h2>
                </div>

                {/* Newsletter */}
                <div className="flex justify-end">
                    <div className="bg-[#F4F1EA] text-[#222] rounded-b-md rounded-t-md p-4 w-full max-w-[400px] h-fit">
                        <p className="text-sm mb-7">
                            Join the newsletter
                        </p>

                        <form className="flex items-center border-b border-black/30 pb-1">
                            <input
                                type="email"
                                aria-label="Your email address"
                                placeholder="Your email address"
                                className="w-full bg-transparent outline-none text-sm placeholder:text-black/40"
                            />

                            <button
                                type="button"
                                aria-label="Subscribe"
                                className="h-9 w-9 shrink-0 bg-gradient-to-b from-[#555] to-[#222] text-white rounded-md flex items-center justify-center text-xl"
                            >
                                →
                            </button>
                        </form>

                        <p className="text-xs text-black/50 mt-5">
                            Projects, ideas and openings. Unsubscribe any time.
                        </p>
                    </div>
                </div>

            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 lg:mt-20">

                {/* Navigation */}
                <div>
                    <div className="flex items-center gap-6 mb-8">
                        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                            <path d="M10 0C13 0 12 5 15 5C18 5 20 7 20 10C20 13 15 12 15 15C15 18 13 20 10 20C7 20 8 15 5 15C2 15 0 13 0 10C0 7 5 8 5 5C5 2 7 0 10 0Z" />
                        </svg>

                        <p className="text-sm">Navigate</p>
                    </div>

                    <nav className="flex flex-wrap gap-x-4 gap-y-1 max-w-150">
                        {navigation.map((item, i) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`heading text-3xl sm:text-4xl font-medium tracking-tight transition-colors duration-300 ${i === 0 ? "text-[#F4F1EA]" : "text-white/40 hover:text-white"}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="mt-16">
                        <div className="flex items-center gap-6 mb-9">
                            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                                <path d="M10 0C13 0 12 5 15 5C18 5 20 7 20 10C20 13 15 12 15 15C15 18 13 20 10 20C7 20 8 15 5 15C2 15 0 13 0 10C0 7 5 8 5 5C5 2 7 0 10 0Z" />
                            </svg>

                            <p className="text-sm">Socials</p>
                        </div>

                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-[60px] h-[38px] rounded-full border border-white/20 bg-gradient-to-b from-white/15 to-white/5 flex items-center justify-center text-sm hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {social.name === "Instagram" ? (
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8">
                                            <rect x="3" y="3" width="18" height="18" rx="5" />
                                            <circle cx="12" cy="12" r="4" />
                                            <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                                        </svg>
                                    ) : (
                                        <span className="font-semibold">in</span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <div className="flex items-center gap-6 mb-10">
                        <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                            <path d="M10 0C13 0 12 5 15 5C18 5 20 7 20 10C20 13 15 12 15 15C15 18 13 20 10 20C7 20 8 15 5 15C2 15 0 13 0 10C0 7 5 8 5 5C5 2 7 0 10 0Z" />
                        </svg>

                        <p className="text-sm">Contact</p>
                    </div>

                    <div className="pl-0 lg:pl-6">
                        <p className="text-sm mb-8">
                            RIYADH · BEIRUT
                        </p>

                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:Contact@letsexperiencedesign.com"
                                className="text-base sm:text-xl tracking-tight hover:text-white/50 transition-colors"
                            >
                                → &nbsp; Contact@letsexperiencedesign.com
                            </a>

                            <a
                                href="tel:+966555136617"
                                className="text-base sm:text-xl tracking-tight hover:text-white/50 transition-colors"
                            >
                                → &nbsp; +966 55 513 6617
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-16 lg:mt-16 text-xs text-white/60">

                <p>
                    © 2026 LXD. All rights reserved.
                </p>

                <a
                    href="#top"
                    className="flex items-center gap-5 text-white hover:text-white/50 transition-colors"
                >
                    <span className="text-xl">↑</span>
                    <span>Back to top</span>
                </a>

            </div>

        </footer>
    );
};

export default Footers;
