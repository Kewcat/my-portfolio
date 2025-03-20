import { RiReactjsLine } from 'react-icons/ri';
import { FaPython, FaJava, FaGit } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPytorch, SiPandas, SiNumpy, SiDocker, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  const technologies = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2.5 },
    { icon: <TbBrandNextjs className="text-7xl text-black dark:text-white" />, duration: 3 },
    { icon: <FaPython className="text-7xl text-blue-500" />, duration: 5 },
    { icon: <FaJava className="text-7xl text-red-500" />, duration: 6 },
    { icon: <SiTensorflow className="text-7xl text-yellow-400" />, duration: 9 },
    { icon: <SiPandas className="text-7xl text-teal-500" />, duration: 3.5 },
    { icon: <SiNumpy className="text-7xl text-blue-500" />, duration: 4 },
    { icon: <SiScikitlearn className="text-7xl text-orange-500" />, duration: 5 },
    { icon: <SiPostgresql className="text-7xl text-cyan-400" />, duration: 5 },
    { icon: <SiDocker className="text-7xl text-cyan-400" />, duration: 4 },
    { icon: <FaGit className="text-7xl text-orange-500" />, duration: 6 },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(tech.duration)}
            className="p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;