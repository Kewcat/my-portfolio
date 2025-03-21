import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      {/* Animated Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h3>

      {/* Animated Email Link */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="text-center tracking-tighter"
      >
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-stone-300 hover:text-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contacts;
