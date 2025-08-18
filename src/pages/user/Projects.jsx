import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import Carousel from "../../components/user/Carousel.jsx";
import { AllProjects } from "../../assets/arrays/AllProjects.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <Navbar absolute="absolute" background="bg-transparent" />

      {/* Hero Section */}
      <section className="section themebg h-[70vh] p-20 text-center bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col">
        <h1 className="text-5xl mb-4 w-[60%] mt-[70px]">
          Where Heart and Mind Converge to Create Thoughtful{" "}
          <span className="">Real Estate.</span>
        </h1>
        <p className="text-3xl max-w-2xl text-center accentfont"></p>
        <div className="w-full"></div>
      </section>

      {/* Projects Section */}
      {AllProjects.map((element, index) => (
        <section key={index} className="section p-10 pb-0">
          <div
            className="h-full themebg flex justify-start items-center p-0 w-full bg-no-repeat bg-center bg-cover cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div className="h-full w-full flex justify-center items-start p-10 flex-col gap-4">
             <img className="h-[400px] w-full object-cover" src={element.projects[1].coverImage} alt="" />
            </div>

            <div className="flex w-full flex-col justify-center items-start p-6 gap-2">
              <h2 className="text-2xl max-sm:text-3xl bgcolorfont">
                {element.title}
              </h2>
              <p className="line-clamp-2">{element.description}</p>
              <button className="btn">
                {expanded === index ? "Hide Projects" : "View Projects"}
              </button>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            <div className="w-full themebg overflow-hidden flex justify-center items-center">
            {expanded === index && (
              <motion.div
                className="p-6 pb-10 pt-0 px-10 themebg w-full overflow-hidden"
                initial={{ height: "0px", opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ height: "0px", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
               

                {element.projects && element.projects.length > 0 && (
                  <div className="mt-0">
                    <ul className="list-none list-inside space-y-2">
                      {element.projects.map((sub, subIndex) => (
                        <li key={subIndex} className="text-gray-700 w-full p-4 bg-white flex justify-between items-center gap-4">
                          {sub.name} <Link to={`/projects/${sub.slug}`} className="btn">Know More</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
              </motion.div>
              
            )}
            <div className="w-full"></div>
            </div>
          </AnimatePresence>
        </section>
      ))}
     <div className="pt-20">
      <Footer />
      </div>
    </>
  );
};

export default Projects;
