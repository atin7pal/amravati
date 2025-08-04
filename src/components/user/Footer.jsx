import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../../assets/fulllogo.svg";
import { BsArrowUp } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import footervideo from "../../assets/footervideo.mp4";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-2 accentbg border-b max-sm:px-4 relative">
        <h3 className="text-lg">Follow Us</h3>
        <div className="flex gap-4 max-sm:gap-2">
          <a href="#" className="rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="rounded-full">
            <FaLinkedinIn />
          </a>
          <a href="#" className="rounded-full">
            <FaYoutube />
          </a>
        </div>
      </div>
      <footer className="accentbg pt-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-[#574d41]">
          {/* Logo & About */}

          {/* Useful Links */}
          <div className="max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm justify-center items-center ">
              <li>
                <Link to="/" className="accentfont">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="accentfont">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="accentfont">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="accentfont">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center max-sm:items-center max-sm:text-center">
            <img src={logo} alt="Logo" className="h-[200px] w-auto" />
            {/* <p className="text-sm ">
            Amravati Group is a leading real estate and development brand
            dedicated to quality, trust, and innovation.
          </p> */}
          </div>

          {/* Contact Info */}
          <div className="max-sm:text-center text-center">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start gap-3 text-sm mb-3 max-sm:items-center max-sm:justify-center justify-center">
              <p className="accentfont flex items-center gap-3 text-sm mb-1 max-sm:justify-center justify-center">
                <FaLocationDot />
                Amravati Group, SCO 10-11, Sector 2 <br />
                Panchkula, Haryana (134109)
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm mb-3 max-sm:justify-center justify-center">
              <FaPhoneAlt className="text-base" />
              <a href="tel:+917526857303" className="accentfont">
                +91 75268 57303
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm max-sm:justify-center justify-center">
              <MdEmail className="text-base" />
              <a href="mailto:info@amravati-group.com" className="accentfont">
                info@amravati-group.com
              </a>
            </div>
          </div>

          {/* Social Links */}
        </div>

        {/* Bottom Row */}
      </footer>
      <div className="flex flex-col md:flex-row justify-between items-center py-3 text-sm border-t accentbg px-4">
        <p className="accentfont text-center w-full">
          © {new Date().getFullYear()} Amravati Group. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 fixed bottom-4 cursor-pointer right-4 flex shadow-md justify-center items-center bg-white p-2 pl-1  gap-1"
        >
          <IoMdArrowDropup className="text-xl" /> Back to Top
        </button>
      </div>
    </>
  );
};

export { Footer };
