import { HERO_CONTENT} from '../constants/index'
import { motion } from "framer-motion"
import ProfPhoto from "../assets/f3fe4d0b949aa38c0a35f5e739e0b40b.jpg"

const container = (delay) => ({
  hidden: {x : -500 , opacity: 0 },
  visible: {
    x : 0,
    opacity: 1,
    transition: {
      
      delay: delay,
      duration: 1},
  },
})

function Hero() {
  return (
    <div className='pb-4 border-neutral-900 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Pramuditha Jayasundara</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                  Full Stack Developer
                </motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="max-w-xl py-6 my-2 font-light tracking-tighter"> {HERO_CONTENT}</motion.p>
                
                </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                  <motion.img
                  initial={{opacity: 0 , x : 100}} 
                  animate={{opacity: 1 , x : -50}}
                  transition={{duration: 1 , delay : 1.2}}
                  src={ProfPhoto} alt=""  width="500px" className='rounded-2xl'/>
                
                  </div></div>
        </div></div>
  )
}

export default Hero