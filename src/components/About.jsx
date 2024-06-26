import { ABOUT_TEXT } from "../constants"
import {motion } from "framer-motion"
import AboutPohoto from "../assets/3V3A9835 (2).jpg"



function About() {
  return (
    <div className="pb-4 border-neutral-900">
        <h2 className="my-20 text-4xl text-center">About <span className="text-neutral-500"> Me </span></h2>
    <div className="flex flex-wrap items-center">
        <motion.div 
        whileInView={{opacity:1 , x: 0}}
        initial={{opacity:0, x:-100}}
        transition={{duration : 1}}
        className="justify-center w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={AboutPohoto} alt="about" width="400px"/></div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1 , x: 0 }}
        initial={{opacity:0, x:100}}
        transition={{duration : 1}}
        className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="max-w-xl my-2 text-xl">{ABOUT_TEXT}</p>
                
            </div>
            </motion.div>
        
    </div>
    
    
    </div>
  )
}

export default About