import React from "react";
import { motion } from "framer-motion";

const divisions = [
  {
    title: "Arfotek Education",
    description: "We produce School Badges, Socks, Books, Uniforms, Banners, and Flags for schools nationwide.",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Arfotek Studios",
    description: "Our creative hub for Film and Music production, empowering African talents with world-class content.",
    color: "from-pink-500 to-red-700",
  },
  {
    title: "Arfotek Technologies",
    description: "Our development arm — building digital products like WAO and enterprise software solutions.",
    color: "from-green-500 to-emerald-700",
  },
];

const Divisions = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Our Divisions</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {divisions.map((div, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${div.color} p-8 rounded-2xl shadow-xl text-white`}
          >
            <h3 className="text-2xl font-semibold mb-3">{div.title}</h3>
            <p className="text-gray-100">{div.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Divisions;
