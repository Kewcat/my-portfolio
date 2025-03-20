import React from "react";
import profilePic from "/src/assets/space.gif";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5, // ✅ Fixed typo: changed 'staggerChilder' to 'staggerChildren'
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="space"
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants} // ✅ Fixed typo: changed 'variant' to 'variants'
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2 variant={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Khushi Doval
            </motion.h2>
            <motion.span variant={childVariants}
             className="bg-gradient-to-r from-stone-200 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Data Scientist
            </motion.span>
            <motion.p  variants= {childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I thrive on solving complex problems with data and uncovering
              insights that drive real impact. With a strong foundation in
              Python, Java, and machine learning, I enjoy working at the
              intersection of AI, analytics, and software development.
              Currently, I’m seeking internship opportunities to apply my skills
              in data science, AI, and cloud computing, while learning from
              hands-on experience. I believe in continuous growth,
              collaboration, and building solutions that matter. Let’s connect
              and explore opportunities to create something meaningful!
            </motion.p>
            <motion.a
             variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download my resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
