// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { AllProjects } from "../../assets/arrays/AllProjects";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import BentoImageGrid from "../../components/user/BentoGrid";
import { motion } from "framer-motion";

export function ProjectDescription() {
  const { slug } = useParams(); // get project slug from route

  // Find the project by its link
  const project = AllProjects.find((p) => p.link === `/projects/${slug}`);

  if (!project) {
    return <h2 className="text-center mt-10">Project not found</h2>;
  }

  return (
    <>
      <Navbar />
      <section className="section themebg max-sm:h-full">
        <div className="row">
          <div className="w-full flex flex-col justify-center items-center gap-4 max-sm:items-center text-center">
            <h2 className="text-5xl max-sm:text-3xl">{project.title}</h2>
            <p className="accentfont text-lg w-[80%] max-sm:w-full">
              {project.description}
            </p>
          </div>
        </div>
      </section>
      <section className="row">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <BentoImageGrid images={project.projects[0].galleryImages} />
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
        </div>
      </section>

      <Footer />
    </>
  );
}
