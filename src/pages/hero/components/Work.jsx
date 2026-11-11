const Work = () => {
  const data = [
    { name: 'Real Estate & Mixed‑use', des: 'Residential, branded residence, commercial and destination development.', col: 3 },
    { name: 'Hospitality & Lifestyle', des: 'Hotels, serviced apartments, restaurants, cafés, wellness and fitness.', col: 3 },
    { name: 'Retail', des: 'Stores, showrooms and customer-facing environments.', col: 2 },
    { name: 'Corporate & Workplace', des: 'Headquarters, offices, co-working and internal brand environments.', col: 2 },
    { name: 'Arts & Culture', des: 'Curated experiences for cultural spaces, exhibitions and events.', col: 2 }
  ]
  return (
    <section className='min-h-screen w-full p-6 flex flex-col gap-3'>
      <div className="flex w-full justify-between items-end">
        <div>
          <div className="flex items-center gap-1">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-4 w-4 invert-100 mix-blend-color-burn"
            />
            <p className="text-sm">What we work on</p>
          </div>

          <div className="mt-4">
            {["Our core", "sectors"].map(
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

        <p className='leading-none'>
          Five sectors where strategy, brand, space <br /> and experience come together.
        </p>
      </div>
      <div className="h-screen w-full grid grid-cols-6 grid-rows-2 gap-3">
        {data.map((item, i) => (
          <div key={i} style={{ gridColumn: `span ${item.col}` }} className="row-span-1 p-8 rounded-2xl bg-[#f3f0e9] flex flex-col justify-between items-start group cursor-pointer hover:bg-black">
            <p className="text-7xl font-bold group-hover:text-[#FF753E] duration-300">0{i + 1}</p>
            <div className="">
              <p className="text-2xl py-3 border-b border-gray-400 group-hover:text-[white] duration-300">{item.name}</p>
              <p className="w-96 text-sm leading-none py-3 group-hover:text-[white] duration-300">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work