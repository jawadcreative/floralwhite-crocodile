import { RiArrowRightLine } from "@remixicon/react"
import Button from "../../hero/components/Button"

const Brand = () => {
  const projects = [
    'Launching a new brand', 'Opening a new space', 'Repositioning & Transformation', 'Creating or improving an Experience', 'Business expansion or relocation'
  ]
  return (
    <section className="h-screen w-full flex px-6 pt-20">
      <div className="w-[40%] flex flex-col gap-6">
        <div className="flex gap-2">
          <img src="/images/logo.png" className="h-4 w-4" />
          <p>When do we come into a project?</p>
        </div>
        <p className="text-6xl font-bold">Wherever your
          project starts</p>
        <Button txt={'Check our work'} />
      </div>
      <div className="w-[60%]">
        {projects.map((item, i) => (
          <div className="flex items-center px-3 py-6 border-b border-gray-300 justify-between group">
            <div className="flex items-center gap-8">
              <p className="text-gray-400">0{i+1}</p>
              <p className="text-4xl font-bold group-hover:ml-4 duration-500">{item}</p>
            </div>
            <div className="h-12 w-12 border group-hover:-rotate-45 duration-500 flex items-center justify-center group-hover:bg-[#ff753e] rounded-lg border-gray-300">
              <RiArrowRightLine size={14}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brand