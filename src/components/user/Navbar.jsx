import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logoheader.svg";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({absolute = "", background = "themebg"}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/Projects" },
    { label: "Ventures", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`w-full top-0 z-20 ${absolute}`}>
      {/* Topbar */}
      <div className="w-full bg-[#574d41] text-[#ece4d9] px-5 py-1 flex justify-center items-center top-0 z-50">
        <div className="w-full flex gap-3 text-xs">
          <p className="flex gap-2 text-xs accentfont items-center max-sm:hidden">
            <FaPhoneAlt /> +91 75268 57303
          </p>
          <p className="flex gap-2 text-xs accentfont items-center max-sm:hidden">
            <MdEmail /> info@amravati.com
          </p>
        </div>
        <div className="flex justify-end items-center gap-1 accentfont w-full">
          <p className="accentfont text-xs">Follow Us On</p> |
          <FaFacebook className="text-xs" />
          <FaInstagram className="text-xs" />
          <FaLinkedin className="text-xs" />
          <FaYoutube className="text-xs" />
        </div>
      </div>

      {/* Main Nav */}
      <div className={`w-full px-4 sm:px-6 lg:px-10 ${background}`}>
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-[200px] w-[200px] object-contain"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 accentfont">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className="text-lg accentfont transition-all duration-300"
                >
                  <span
                    className={`${
                      location.pathname === link.path
                        ? "text-[#574d41] accentfont"
                        : "accentfont"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>

                {/* Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#574d41] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    location.pathname === link.path ? "scale-x-100" : ""
                  }`}
                  style={{ width: "100%" }}
                />

                {/* Projects Dropdown */}
                {link.label === "Projects" && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-[#574d41] opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 z-50">
                    <Link
                      to="/projects/completed"
                      className="block px-4 py-3 text-[#574d41] text-sm  hover:bg-[#ece4d9]"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      to="/projects/new"
                      className="block px-4 py-3 text-sm text-[#574d41] hover:bg-[#ece4d9]"
                    >
                      New Projects
                    </Link>

                    <Link
                      to="/projects1"
                      className="block px-4 py-3 text-sm text-[#574d41] hover:bg-[#ece4d9]"
                    >
                      Projects 1
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md overflow-hidden"
          >
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-gray-700 hover:text-[#574d41] font-medium ${
                    location.pathname === link.path
                      ? "text-[#574d41] font-semibold underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>

                {/* Mobile sub-links for Projects */}
                {link.label === "Projects" && (
                  <div className="ml-4 space-y-1">
                    <Link
                      to="/projects/completed"
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-gray-600 hover:text-[#574d41]"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      to="/projects/new"
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-gray-600 hover:text-[#574d41]"
                    >
                      New Projects
                    </Link>
                  </div>
                )}
              </React.Fragment>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
