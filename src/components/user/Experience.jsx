import React from "react";
import { FaRegSmile, FaHome, FaUserTie, FaBuilding } from "react-icons/fa";

const stats = [
  {
    title2: "Quality",
    description: "Providing trusted real estate.",
    icon: <FaUserTie size={28} />,
    classname: "",
  },
  {
    title2: "Luxury",
    description: "From luxury villas to smart apartments.",
    icon: <FaHome size={28} />,
    classname: "",
  },
  {
    title2: "Peace",
    description: "Client satisfaction is our top priority",
    icon: <FaRegSmile size={28} />,
    classname: "",
  },
];

const Experience = () => {
  return (
    <section className="flex w-full gap-6">
      
      <div
        className={`flex w-full justify-start`}
      >
        {stats.map((item, idx) => (
          <div key={idx} className={`transition ${item.classname} p-4`}>
            <p className="text-4xl">{item.title2}</p>
            <p className="text-sm accentfont">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
