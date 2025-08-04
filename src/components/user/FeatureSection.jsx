import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaUsers, FaTools, FaLeaf } from "react-icons/fa";

const features = [
  {
    title: "VISION-LED DEVELOPMENT",
    description:
      "Every project begins with a bold vision one that blends functionality, aesthetics, and long-term value.",
    icon: <FaLightbulb size={24} />, // symbolizes innovation and vision
    highlighted: true,
  },
  {
    title: "CUSTOMER-CENTRIC APPROACH",
    description:
      "We listen, we learn, and we build keeping your needs at the heart of every decision we make.",
    icon: <FaUsers size={24} />, // represents people-focused mindset
  },
  {
    title: "QUALITY-FIRST EXECUTION",
    description:
      "From materials to manpower, we ensure excellence in every step, with no compromises.",
    icon: <FaTools size={24} />, // represents construction, tools, and execution
  },
  {
    title: "SUSTAINABLE GROWTH",
    description:
      "Whether it’s green spaces or future-focused planning, we build with tomorrow in mind.",
    icon: <FaLeaf size={24} />, // represents sustainability and eco-consciousness
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-[#ffffff] py-16 px-6 md:px-16">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl bgcolorfont mb-4 leading-snug">
            WE ARE COMMITTED <br /> TO YOUR REAL ESTATE JOURNEY
          </h2>
          <p className="mb-6 bgcolorfont accentfont">
            Turning vision into reality through thoughtful planning, precision, and purpose.
          </p>
          <Link to="/contact">
            <button className="btnlight w-fit">Get In Touch</button>
          </Link>
        </div>

        {/* Right Column - Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 transition ${
                feature.highlighted ? "themebg text-white" : "accentbg"
              }`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text mb-2 text-nowrap">{feature.title}</h4>
              <p className="text-sm accentfont">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
