import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 bg-[#0f0f0f] text-gray-100 shadow-lg sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-blue-400"
        >
          Arfotek
        </motion.h1>

        <nav className="space-x-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/divisions" className="hover:text-blue-400">Divisions</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </header>

      {/* Pages */}
      <main className="bg-[#121212] min-h-screen text-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-400 py-8 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Arfotek Group. Innovating Across Industries.</p>
      </footer>
    </Router>
  );
};

export default App;
