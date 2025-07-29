import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import realty from "../../assets/project1/hills/image5.webp";
import retail from "../../assets/retail.jpg";
import school from "../../assets/vidyalya.webp";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const companies = [
  {
    title: "AMRAVATI REALTY",
    description:
      "Amravati Realty transforms land into vibrant spaces through sustainable and modern developments. We create residential and commercial projects designed for long-term impact and quality living.",
    image: realty,
    link: "/amravatirealty",
  },
  {
    title: "AMRAVATI RETAIL",
    description:
      "Amravati Retail blends physical and digital retail to deliver quality products and seamless shopping. We empower local businesses and prioritize customer-first experiences.",
    image: retail,
    link: "/amravatiretail",
  },
  {
    title: "AMRAVATI VIDYALYA",
    description:
      "Amravati Vidyalya fosters holistic education through academic excellence and value-based learning. We help students grow into confident, responsible individuals.",
    image: school,
    link: "/amravatividyalya",
  },
];

export default function VentureComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = companies[activeIndex];

  return (
    <AnimatePresence>
      <div className="flex flex-col md:flex-row min-h-[80vh] max-sm:h-full transition-all duration-500 w-full">
        {/* Left Panel */}
        <div className="w-full p-20 flex flex-col justify-center items-start max-sm:p-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`py-4 cursor-pointer border-b w-full transition-opacity duration-300 ${
                index === activeIndex
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-80"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h2
                className={`text-3xl flex items-center gap-2 w-full transition-colors duration-300 ${
                  index === activeIndex ? "" : ""
                }`}
              >
                {company.title}
                {index === activeIndex && (
                  <FaArrowUpRightFromSquare size={18} />
                )}
              </h2>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  index === activeIndex ? "max-h-[200px] mt-2" : "max-h-0"
                }`}
              >
                <p className="leading-relaxed w-full accentfont">
                  {company.description}
                </p>
                <Link className="btn mt-2 w-fit" to={company.link}>Know More</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center w-full p-10 transition-all duration-500 ease-in-out max-sm:p-4">
          <motion.img
            initial={{ scale: 0.99 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.99 }}
            src={activeCompany.image}
            alt={activeCompany.title}
            className="max-h-[500px] object-contain transition-opacity duration-500"
          />
        </div>
      </div>
    </AnimatePresence>
  );
}
