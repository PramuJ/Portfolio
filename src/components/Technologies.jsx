import { DiMysql, DiPostgresql } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"



const Technologies = () => {
  return (
    <div className="pb-24 border-neutral-800">
        <h2 className="my-20 text-4xl text-center">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < RiReactjsLine className="text-7xl text-cyan-400" /></div>
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < FaNodeJs className="text-green-500 text-7xl" /></div>
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < RiReactjsLine className="text-7xl text-cyan-400" /></div>
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < DiPostgresql className="text-7xl text-sky-700" /></div>
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < SiMongodb className="text-green-500 text-7xl" /></div>
            <div className="p-4 border-4 rounded-2xl border-neutral-800">
                < DiMysql className="text-7xl text-cyan-400" />
        </div>    
        </div>
        </div>
  )
}

export default Technologies