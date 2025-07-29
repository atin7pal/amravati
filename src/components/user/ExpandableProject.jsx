import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import hillcover from "../../assets/project1/hills/image1.webp";
import image1 from "../../assets/project1/hills/hills1.webp";
import image2 from "../../assets/project1/hills/hills2.webp";
import image3 from "../../assets/project1/image6.jpg";
import image4 from "../../assets/project1/image7.jpg";
import image5 from "../../assets/project1/hills/hills5.webp";
import image6 from "../../assets/project1/hills/hills6.webp";
import image7 from "../../assets/project1/hills/hills12.webp";
import image8 from "../../assets/project1/hills/hills8.webp";
import image9 from "../../assets/project1/hills/hills9.webp";
import BentoImageGrid from "./BentoGrid";
import Carousel from "./Carousel";

const projects = [
  {
    name: "AMRAVATI HILLS",
    location: "Solan, Himachal Pradesh",
    tagline: "Luxury Hilltop Living at 5,000 ft",
    coverImage: hillcover,
    brochureLink: "/pdfs/solan_brochure_singlepg.pdf",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio deserunt voluptatum culpa ullam dolores alias cum non, porro, saepe autem dolorem laboriosam aperiam cumque qui tempore odit reprehenderit, asperiores iusto?",
    galleryImages: [
      {
        src: image1,
        alt: "image 1",
      },
      {
        src: image2,
        alt: "image 1",
      },
      {
        src: image3,
        alt: "image 1",
      },
      {
        src: image9,
        alt: "image 1",
      },
      {
        src: image4,
        alt: "image 1",
      },
      {
        src: image5,
        alt: "image 1",
      },
      {
        src: image6,
        alt: "image 1",
      },
      {
        src: image7,
        alt: "image 1",
      },
      {
        src: image8,
        alt: "image 8",
      },
    ],
    highlights: [
      "Sprawling across 145 bighas of scenic landscape",
      "Breathtaking Himalayan valley views",
      "Located just 45 km from Chandigarh",
      "Clubhouse with café, restaurant & wellness facilities",
      "Villas & apartments with modern architecture and luxury interiors",
      "Fully managed leasing with StayVista",
    ],
    offerings: [
      {
        type: "4 BHK Villas – The Den",
        size: "4250 sq ft",
        features: [
          "Jacuzzi, electric fireplace, and panoramic terrace views",
          "Fully furnished across 3 levels",
          "Covered parking, landscaped garden & dedicated servant room",
        ],
      },
    ],
  },
];

export default function ProjectExpandableCard() {
  const [expanded, setExpanded] = useState(false);
  const project = projects[0];

  return (
    <motion.div
      className="w-full mx-auto p-10 bg-white shadow-sm transition-all max-sm:p-4"
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
          {projects.map((element) => (
            <Carousel images={element.galleryImages} />
          ))}
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
              <h3 className="text-2xl">Why Amravati Hills?</h3>
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
                    {offering.features.map((feat, idx) => (
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
              {projects.map((element) => (
                <BentoImageGrid images={element.galleryImages} />
              ))}
            </motion.div>

            {/* Brochure Button */}
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
