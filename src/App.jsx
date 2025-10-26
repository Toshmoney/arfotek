import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Divisions from "./pages/Divisions";
import Contact from "./pages/Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/divisions" className="hover:text-blue-400">Divisions</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger / Close icon */}
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121212] text-gray-200 px-8 py-5 space-y-4 shadow-lg"
          >
            <Link
              to="/"
              className="block hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/divisions"
              className="block hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Divisions
            </Link>
            <Link
              to="/contact"
              className="block hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>

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
        <p>
          © {new Date().getFullYear()} Arfotek Group. Innovating Across
          Industries.
        </p>
      </footer>
    </Router>
  );
};

export default App;
