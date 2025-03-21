import { FaPython, FaJava, FaGit, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiPostgresql, SiDocker,SiKeras, SiPlotly } from 'react-icons/si';
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';
import { motion } from 'framer-motion';
console.log(FaPython, AWSIcon, SiPostgresql);


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
  const technologySections = [
    {
      title: "Programming",
      technologies: [
        { icon: <FaPython className="text-7xl text-blue-500" />, duration: 5, label: "Python" },
        { icon: <SiPostgresql className="text-7xl text-cyan-400" />, duration: 2, label: "SQL" },
        { icon: <FaJava className="text-7xl text-red-500" />, duration: 6, label: "Java" },
      ],
    },
    {
      title: "Data Science Frameworks",
      technologies: [
        { icon: <SiPandas className="text-7xl text-teal-500" />, duration: 3.5, label: "Pandas" },
        { icon: <SiNumpy className="text-7xl text-blue-500" />, duration: 4, label: "NumPy" },
        { icon: <SiScikitlearn className="text-7xl text-orange-500" />, duration: 5, label: "Scikit-Learn" },
        { icon: <SiTensorflow className="text-7xl text-yellow-400" />, duration: 4, label: "TensorFlow" },
        { icon: <SiKeras className="text-7xl text-red-500" />, duration: 5, label: "Keras" },
        { icon: <SiPytorch className="text-7xl text-red-500" />, duration: 6, label: "PyTorch" },
        { icon: <img src="mat-icon.png" width={50} height={50} className="text-7xl"/>, duration: 3, label: "Matplotlib" },
        { icon: <img src="seaborn-icon.png" width={50} height={50} className="text-7xl"/>, duration: 3.5, label: "Seaborn" },
        { icon: <SiPlotly className="text-7xl"/>, duration: 4, label: "Plotly" },
      ],
    },
    {
      title: "Developer Tools",
      technologies: [
        { icon: <FaGit className="text-7xl text-orange-500" />, duration: 3, label: "Git" },
        { icon: <span className="text-7xl">📓</span>, duration: 4, label: "Jupyter Notebook" },
        { icon: <span className="text-7xl">☁️</span>, duration: 2, label: "Google Colab" },
        { icon: <img src="/excel-icon.png" width={50} height={50} className="text-7xl"/>, duration: 3, label: "Excel" },
      ],
    },
    {
      title: "Cloud Technologies",
      technologies: [
        { icon: <AWSIcon className="text-7xl text-orange-500" size={60}/>, duration: 3, label: "AWS" },
        { icon: <SiDocker className="text-7xl text-cyan-400" />, duration: 4, label: "Docker" },
      ],
    },
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
      {technologySections.map((section, index) => (
        <div key={index} className="mb-16">
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
            className="text-center text-3xl mb-8"
          >
            {section.title}
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {section.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial="initial"
                animate="animate"
                variants={iconVariants(tech.duration)}
                className="flex flex-col items-center p-4"
              >
                {tech.icon}
                <span className="mt-2 text-sm text-center">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;