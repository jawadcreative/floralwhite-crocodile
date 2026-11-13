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
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-end gap-4">
        <div>
          <div className="flex items-center gap-1">
            <img
              src="/images/logo.png"
              alt=""
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
                  <h2 className="heading text-4xl sm:text-5xl lg:text-6xl leading-none">
                    {item}
                  </h2>
                </div>
              )
            )}
          </div>
        </div>

        <p className='leading-none max-w-md'>
          Five sectors where strategy, brand, space <br className="hidden sm:block" /> and experience come together.
        </p>
      </div>
      <div className="work-grid h-auto min-h-[65vh] w-full grid grid-cols-6 gap-3 lg:h-screen lg:grid-rows-2">
        {data.map((item, i) => (
          <div key={i} style={{ gridColumn: `span ${item.col}` }} className="min-h-64 lg:min-h-0 p-5 sm:p-8 rounded-2xl bg-[#f3f0e9] flex flex-col justify-between items-start group cursor-pointer hover:bg-black">
            <span aria-hidden="true" className="heading text-5xl sm:text-6xl lg:text-7xl group-hover:text-[#FF753E] duration-300">0{i + 1}</span>
            <div className="w-full min-w-0">
              <h3 className="heading text-xl sm:text-2xl py-3 border-b border-gray-400 group-hover:text-[white] duration-300">{item.name}</h3>
              <p className="w-96 max-w-full text-sm leading-none py-3 group-hover:text-[white] duration-300">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work