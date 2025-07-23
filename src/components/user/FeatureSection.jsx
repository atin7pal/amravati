import React from "react";
import { FaBuilding, FaVideo, FaDraftingCompass, FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    title: "PROPERTY MANAGEMENT",
    description: "End-to-end property handling including tenant coordination, maintenance, and rent collection.",
    icon: <FaBuilding size={24} />,
    highlighted: true,
  },
  {
    title: "VIRTUAL TOURS",
    description: "Experience properties remotely with immersive 360° virtual walkthroughs and video previews.",
    icon: <FaVideo size={24} />,
  },
  {
    title: "ARCHITECTURE & INTERIORS",
    description: "We offer custom architecture and interior solutions for your dream spaces.",
    icon: <FaDraftingCompass size={24} />,
  },
  {
    title: "LOAN AND LEGAL",
    description: "Assistance with home loans, registration, and property-related legal documentation.",
    icon: <FaBalanceScale size={24} />,
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-[#ffffff] py-16 px-6 md:px-16">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl bgcolorfont mb-4 leading-snug">
            WE ARE COMMITTED <br /> TO YOUR REAL ESTATE JOURNEY.
          </h2>
          <p className="mb-6 bgcolorfont accentfont">
            From buying your first home to managing commercial properties, we support every step.
          </p>
          <Link to="/contact">
          <button className="btnlight w-fit">
            Contact us
          </button>
          </Link>
        </div>

        {/* Right Column - Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 transition ${
                feature.highlighted
                  ? "themebg text-white"
                  : "accentbg"
              }`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg mb-2">{feature.title}</h4>
              <p className="text-sm accentfont">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
