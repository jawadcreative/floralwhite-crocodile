import { RiArrowRightLine } from "@remixicon/react"
import Button from "../../hero/components/Button"

const Brand = () => {
  const projects = [
    'Launching a new brand', 'Opening a new space', 'Repositioning & Transformation', 'Creating or improving an Experience', 'Business expansion or relocation'
  ]
  return (
    <section className="min-h-screen h-auto w-full flex flex-col lg:flex-row gap-10 px-6 py-16 lg:pt-20">
      <div className="w-full lg:w-[40%] flex flex-col gap-6">
        <div className="flex gap-2">
          <img src="/images/logo.png" alt="" className="h-4 w-4" />
          <p>When do we come into a project?</p>
        </div>
        <h2 className="heading text-4xl sm:text-5xl lg:text-6xl font-bold">Wherever your
          project starts</h2>
        <Button txt={'Check our work'} />
      </div>
      <div className="w-full lg:w-[60%]">
        {projects.map((item, i) => (
          <div key={item} className="flex items-center gap-3 sm:gap-6 px-1 sm:px-3 py-6 border-b border-gray-300 justify-between group">
            <div className="flex items-center gap-3 sm:gap-8 min-w-0">
              <p className="text-gray-400">0{i+1}</p>
              <h3 className="heading text-xl sm:text-2xl lg:text-4xl font-bold group-hover:ml-4 duration-500">{item}</h3>
            </div>
            <div className="h-10 w-10 shrink-0 border group-hover:-rotate-45 duration-500 flex items-center justify-center group-hover:bg-[#ff753e] rounded-lg border-gray-300">
              <RiArrowRightLine size={14}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brand