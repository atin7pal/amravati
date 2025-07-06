import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logoheader.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="accentbg w-full fixed top-0 left-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            <Link to="/">
            <img className="h-[200px] w-[200px] object-contain" src={logo} alt="" /></Link>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Us Button (Right) */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="btn"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
