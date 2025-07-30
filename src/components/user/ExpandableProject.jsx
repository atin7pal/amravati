import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import BentoImageGrid from "./BentoGrid";
import Carousel from "./Carousel";

export default function ProjectExpandableCard({ projects, project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="w-full mx-auto p-10 my-6 bg-white shadow-sm transition-all max-sm:p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="cursor-pointer flex flex-col w-full md:flex-row-reverse items-center gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Carousel images={project.galleryImages} />
        </motion.div>

        <motion.div
          className="w-full flex flex-col justify-center items-start h-[400px] max-sm:h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl capitalize">{project.name}</h2>
          <p className="text-lg text-gray-500">{project.location}</p>
          <p className="text-xl font-medium mt-2 accentfont">
            {project.tagline}
          </p>
          <p className="mt-2 accentfont w-[90%]">{project.description}</p>

          <motion.button className="btn mt-4 flex items-center gap-1">
            {expanded ? (
              <>
                See Less <MdOutlineKeyboardArrowUp />
              </>
            ) : (
              <>
                See More <MdOutlineKeyboardArrowDown />
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="mt-6 border-t pt-4 space-y-6 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl">Why {project.name}?</h3>
              <ul className="text-gray-700 mt-2">
                {project.highlights.map((point, i) => (
                  <li className="mb-1 w-fit px-2 py-1 accentfont" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Offerings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl">Available Units</h3>
              {project.offerings.map((offering, i) => (
                <div key={i} className="mt-2">
                  <h4 className="">{offering.type}</h4>
                  <p className="text-sm text-gray-500 mb-1 accentfont">
                    Size: {offering.size}
                  </p>
                  <ul className="text-gray-700">
                    {offering?.features?.map((feat, idx) => (
                      <li key={idx} className="mb-1 w-fit px-2 py-1 accentfont">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <BentoImageGrid images={project.galleryImages} />
            </motion.div>

            {/* Brochure */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl text-start mb-3">Want to know more?</h2>
              <a
                href={project.brochureLink}
                download
                className="btn w-fit inline-block"
              >
                Download Brochure
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
