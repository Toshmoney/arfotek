import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We’ll respond shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="max-w-lg mx-auto py-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg text-white"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg text-white"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full bg-[#1e1e1e] border border-gray-700 p-3 rounded-lg text-white h-32"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
