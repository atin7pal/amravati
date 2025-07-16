import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logoheader.svg";
import { MdEmail } from "react-icons/md";
import logobuilding from "../../assets/logobuilding.svg";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/services" },
    { label: "Ventures", path: "/services" },
    { label: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="w-full top-0 z-20">
      {/* Topbar */}
      <div className="w-full bg-[#4B352A] text-[#F8F3D9] px-5 py-1 flex justify-center items-center  top-0 z-50">
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
      <div className="w-full accentbg px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-[200px] w-[200px] object-contain"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 accentfont">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group text-lg accentfont transition-all duration-300"
              >
                <span
                  className={`${
                    location.pathname === link.path
                      ? "text-[#4B352A] accentfont"
                      : "accentfont"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 bottom-0 accentfont h-[2px] bg-[#4B352A] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    location.pathname === link.path ? "scale-x-100" : ""
                  }`}
                  style={{ width: "100%" }}
                />
              </Link>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex">
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
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
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-gray-700 hover:text-[#4B352A] font-medium ${
                  location.pathname === link.path
                    ? "text-[#4B352A] font-semibold underline underline-offset-4"
                    : ""
                }`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
