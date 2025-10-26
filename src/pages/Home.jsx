import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[90vh] w-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-blue-400 mb-4"
      >
        Welcome to Arfotek
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8"
      >
        A multi-industry enterprise shaping the future through <span className="text-blue-400">Education</span>, 
        <span className="text-pink-400"> Entertainment</span>, and <span className="text-green-400">Technology</span>.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/divisions"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
        >
          Explore Arfotek
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
