import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white">
          <span className="text-gray-900">Sameer</span>
          <span className="text-gray-400">.dev</span>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:space-x-8 font-medium ${
            menuOpen
              ? "absolute top-16 left-0 w-full text-white bg-black flex flex-col items-center space-y-6 py-6"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/career">
              Career
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>

          {/* Contact Button */}
          <li>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full font-semibold text-white 
              bg-linear-to-r from-pink-500 to-yellow-500 
              shadow-lg transition-all duration-300
              hover:scale-110 hover:shadow-2xl"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/sameer-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sameer-khan-1472832a7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/siddiquisameer03?igsh=MTRycWQwZGVtdXFscQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-blue-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
