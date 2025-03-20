import { RiReactjsLine } from 'react-icons/ri';
import { FaPython, FaJava, FaGit } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPytorch, SiPandas, SiNumpy, SiDocker, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';  
import {animate, motion, transform} from "framer-motion"

const iconVariants = (duration)=({
    initial: {y:-10},
    animate: {
        y:[-10,10],
        transform:{
            duration: duration,
            ease: "Linear",
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
})

  
const Technologies= ()=> {
    return(
        <div className="pb-24">
            <motion.h2  whileInView={{opacity:1, y:0}} initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2> 
            <div className="flex flex-wrap items-center justify-center gap-4">
                 <div>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                 </div>
                 <div className="p-4">
                    <TbBrandNextjs className="text-7xl"/> </div>
                    <div className="p-4">
                    < FaPython className="text-7xl"/> </div>
                    <div className="p-4">
                    <FaJava className="text-7xl"/> </div>
                    <div className="p-4">
                    < SiTensorflow className="text-7xl text-yellow-400"/> </div>
                    <div className="p-4">
                    < SiPandas className="text-7xl  text-teal-500"/> </div>
                    <div className="p-4">
                    < SiNumpy className="text-7xl"/> </div>
                    <div className="p-4">
                    < SiScikitlearn className="text-7xl"/> </div>
                    <div className="p-4">
                    < SiPostgresql className="text-7xl text-cyan-400"/> </div>
                    <div className="p-4">
                    < SiDocker className="text-7xl text-cyan-400"/> </div>
                    <div className="p-4">
                    <FaGit className="text-7xl"/> </div>
                   
                  
                 </div>
                 
                 

            </div>
    )
}
export default Technologies