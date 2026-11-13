const Projects = () => {
  const projects = [
    { image: '/images/unicon-1.webp', name: 'Unicon Group', des: 'Multi-brand portfolio', tag: 'corporate' },
    { image: '/images/perform-1.webp', name: 'Perform', des: 'Office & coworking space', year: 2026, tag: 'Worplace' },
    { image: '/images/stayform-1.webp', name: 'Stayform', des: 'Lifestyle brand', year: 2026, tag: 'Hospitality' },
    { image: '/images/fitform-1.webp', name: 'Fitform', des: 'Lifestyle brand', tag: 'Hospitality' },
  ]
  return (
    <section className="h-[150vh] w-full grid grid-cols-2 grid-rows-2 gap-6 p-6">
      {projects.map((item) => (
        <div key={item.name} className="col-span-1 row-span-1 flex flex-col gap-3 group">
          <div className="h-[55vh] w-full overflow-hidden">
            <img src={item.image} alt={`${item.name} project`} className="h-[55vh] w-full object-cover object-center scale-[1.1] duration-500 group-hover:scale-100" />
          </div>
          <div className="flex justify-between">
            <div className="">
              <h2 className="heading">{item.name}</h2>
              <p>{item.des}</p>
              <p>{item.year}</p>
            </div>
            <p>{item.tag}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects