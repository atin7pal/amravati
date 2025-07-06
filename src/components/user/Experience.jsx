import React from "react";
import { FaRegSmile, FaHome, FaUserTie, FaBuilding } from "react-icons/fa";

const stats = [
  {
    title: "2+",
    title2: "Decades",
    description: "Providing trusted real estate.",
    icon: <FaUserTie size={28} />,
    classname: "",
  },
  {
    title: "1200+",
    title2: "Projects",
    description: "From luxury villas to smart apartments.",
    icon: <FaHome size={28} />,
    classname: "themebg",
  },
  {
    title: "9K+",
    title2: "Happy Clients",
    description: "Client satisfaction is our top priority",
    icon: <FaRegSmile size={28} />,
    classname: "",
  },
];

const Experience = () => {
  return (
    <section className="flex w-full flex-row-reverse gap-6">
      <div className="w-full p-4 flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl text-center w-full">
          Our Work Speaks for Itself
        </h2>
      
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto w-full gap-3`}
      >
        {stats.map((item, idx) => (
          <div key={idx} className={`transition ${item.classname} p-4`}>
            <h4 className="text-3xl mb-2">{item.title}</h4>
            <p className="text-xl">{item.title2}</p>
            <p className="text-sm accentfont">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
