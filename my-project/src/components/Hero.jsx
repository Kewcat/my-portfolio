import React, { useState, useEffect, useRef } from "react";
//import profilePic from "/src/assets/space.gif";
import { motion } from "framer-motion";

const roles = ["Data Scientist", "Data Analyst", "Machine Learning Engineer"];

/* Button Animation and Sound */
const DownloadButton = () => {
  const [isBounced, setIsBounced] = useState(false);
  const audioRef = useRef(null);

  // Function to handle the button click
  const handleClick = () => {
    audioRef.current.play();
    setIsBounced(true);

    setTimeout(() => {
      setIsBounced(false);
    }, 600); // This corresponds to the duration of the bounce animation
  };

  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      animate={{ y: isBounced ? [0, -10, 0, -5, 0] : 0 }} // Triggers bounce animation only when clicked
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        yoyo: true, 
      }}
      download
      className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
    >
      Download my resume
      <audio ref={audioRef} src="/sound2.mp3" />
    </motion.a>
  );
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 90; // Typing speed (ms)
    const delayBeforeDeleting = 1500; // Time before deletion starts (ms)

    if (!isDeleting && charIndex === roles[roleIndex].length) {
      setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setCurrentRole(roles[roleIndex].substring(0, charIndex));
      setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="flex justify-center h-screen">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row justify-center text-center">
        
        { /* <div className="w-full"> <div className="flex justify-center lg:p-8">
         <motion.img
              src={profilePic}
              alt="space"
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>*/}

        <div className="w-full">
          <motion.div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Khushi Doval
            </motion.h2>
            <motion.span className="flex justify-center w-full bg-gradient-to-r from-stone-200 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              {currentRole || "\u00A0"} {/* Display the animated text here */}
            </motion.span>
            <motion.p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              Data tells a story, and I love being the one to decode it. I’m
              Khushi Doval, a Computer Science graduate passionate about the
              intersection of data science and software development. Whether it's
              uncovering insights or building smart applications, I thrive on
              solving real-world challenges. Explore my work and see what I’ve
              been up to!
            </motion.p>
            <div className="flex justify-center w-full">
            <DownloadButton />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;