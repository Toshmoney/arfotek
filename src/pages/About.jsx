import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-6">About Arfotek</h2>
      <p className="text-gray-300 mb-4">
        Arfotek is a dynamic enterprise operating across education, entertainment, and technology sectors.
        We are passionate about building products and experiences that empower communities, inspire creativity,
        and drive digital transformation.
      </p>
      <p className="text-gray-400 mb-4">
        Arfotek is the parent company of WAO App (We Are One) an innovative chatting platform that connects people
        globally. Our divisions include Arfotek Education, Arfotek Studios, and Arfotek Technologies, each dedicated
        to excellence in their respective fields.
      </p>
      <p className="text-gray-400">
        From school materials to software applications, films, and music — Arfotek leads with excellence, 
        quality, and innovation. We don’t just create; we craft impactful solutions for the next generation.
      </p>
    </motion.div>
  );
};

export default About;
