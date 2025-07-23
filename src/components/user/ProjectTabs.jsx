import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../../assets/project1/livingdining.jpg";
import project2 from "../../assets/project1/outdoor.jpg";
import project3 from "../../assets/project1/outdoor1.jpg";
import project5 from "../../assets/project1/living.jpg";
import { Link } from "react-router-dom";

const projectsData = {
  new: [
    {
      id: 1,
      name: "Skyline Residency",
      location: "Bangalore, India",
      description:
        "Luxury 3 & 4 BHK apartments with skyline views and modern architecture.",
      features: [
        "Clubhouse",
        "Infinity Pool",
        "Smart Home Systems",
        "Close to Metro",
      ],
      image: project1,
    },
    {
      id: 2,
      name: "Green Valley Villas",
      location: "Pune, India",
      description:
        "Eco-friendly gated community with independent luxury villas.",
      features: [
        "Private Gardens",
        "Solar Power",
        "Rainwater Harvesting",
        "Kids Play Area",
      ],
      image: project2,
    },
  ],
  upcoming: [
    {
      id: 3,
      name: "Oceanfront Heights",
      location: "Chennai, India",
      description:
        "Upcoming sea-facing apartments with 5-star lifestyle amenities.",
      features: [
        "Sea View Balconies",
        "Rooftop Gym",
        "Concierge Services",
        "Pet-friendly Zone",
      ],
      image: project3,
    },
    {
      id: 4,
      name: "Urban Nest Towers",
      location: "Hyderabad, India",
      description:
        "High-rise residential towers close to IT hubs and business centers.",
      features: [
        "Sky Deck",
        "Business Lounge",
        "Jogging Track",
        "EV Charging Points",
      ],
      image: project5,
    },
  ],
};

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("new");

  const tabs = [
    { label: "COMPLETED PROJECTS", value: "new" },
    { label: "UPCOMING PROJECTS", value: "upcoming" },
  ];

  return (
    <section className="mx-auto">
      <h2 className="text-5xl text-center mb-6">OUR PROJECTS</h2>
      <p className="text-center pb-10 accentfont">
        At Amravati Group, we believe that true craftsmanship in real estate
        begins at the intersection of passion and purpose. Our commitment to
        thoughtful developments reflects not just a vision, but a deep
        understanding of the communities we serve. Through meticulous planning
        and innovative design, we strive to build spaces that inspire and
        elevate the human experience. Each project is a testament to our
        dedication, where every detail is infused with care and consideration.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-16 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`btn ${
              activeTab === tab.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 grid-cols-1 w-full"
        >
          {projectsData[activeTab].map((project) => (
            <div key={project.id} className="bg-white w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-lg accentfont text-gray-600 mb-4">
                  {project.description}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-800">
                  {project.features.map((feature, index) => (
                    <li className="accentfont" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link className="btn w-fit mt-4">Know More</Link>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
