import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import Carousel from "../../components/user/Carousel.jsx";
import { AllProjects } from "../../assets/arrays/AllProjects.jsx";
import { motion, AnimatePresence } from "framer-motion";
import dreamscape from "../../assets/dreamscape3.jpg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <Navbar absolute="absolute" background="bg-transparent" />

      {/* Hero Section */}
      <motion.section
        style={{
          backgroundImage: `linear-gradient(#00000000,#0000005d, #0000005d),url(${dreamscape})`,
        }}
        className="section h-[80vh] p-20 text-center bg-cover bg-no-repeat bg-bottom flex justify-center items-center flex-col max-sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl mb-4 w-[60%] mt-[70px] max-sm:w-full max-sm:text-3xl themecolorfont text-shadow-xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where Heart and Mind Converge to Create Thoughtful{" "}
          <span className="">Real Estate.</span>
        </motion.h1>

        <motion.p
          className="max-w-6xl max-sm:max-w-full max-sm:w-full text-center accentfont p-4 themecolorfont text-shadow-lg max-sm:text-sm"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          At Amravati Group, we believe that true craftsmanship in real estate
          begins at the intersection of passion and purpose. Our commitment to
          thoughtful developments reflects not just a vision, but a deep
          understanding of the communities we serve. Through meticulous planning
          and innovative design, we strive to build spaces that inspire and
          elevate the human experience. Each project is a testament to our
          dedication, where every detail is infused with care and consideration.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      {AllProjects.map((element, index) => (
        <motion.section
          key={index}
          className="section p-10 pb-0 max-sm:p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div
            className="h-full themebg flex justify-start items-center p-0 w-full bg-no-repeat bg-center bg-cover cursor-pointer max-sm:flex-col"
            onClick={() => toggleExpand(index)}
          >
            <div className="h-full w-full flex justify-center items-start p-10 flex-col gap-4 max-sm:p-4">
              <motion.img
                className="h-[450px] w-full object-cover max-sm:h-[300px]"
                src={element.coverImage}
                alt=""
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex w-full flex-col justify-center items-start p-6 gap-2">
              <motion.h2
                className="text-2xl max-sm:text-3xl bgcolorfont"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {element.title}
              </motion.h2>
              <motion.p
                className="accentfont"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {element.description[0]}..
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to={`/projects/${element.link}`} className="btn ">
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {expanded === index && (
              <motion.div
                className="p-6 pb-10 pt-0 px-10 themebg w-full overflow-hidden max-sm:p-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {element.projects && element.projects.length > 0 && (
                  <div className="mt-0">
                    <ul className="list-none list-inside space-y-2">
                      {element.projects.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          className="text-gray-700 w-full p-4 bg-white flex justify-between items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: subIndex * 0.1 }}
                        >
                          {sub.name}
                          <Link to={`/projects/${sub.slug}`} className="btn">
                            Know More
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      ))}

      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default Projects;
