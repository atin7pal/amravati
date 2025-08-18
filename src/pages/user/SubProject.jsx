import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { motion } from "framer-motion";
import { AllProjects } from "../../assets/arrays/AllProjects";
import BentoImageGrid from "../../components/user/BentoGrid";
import CarouselSlides from "../../components/user/CartouselSlides";
import CarouselFloor from "../../components/user/CarouselFloor";

export function SubProject() {
  const { subproject } = useParams();
  console.log(subproject);

  // Find the matching project by slug

  let project = AllProjects.forEach((element) => {
    console.log(element.projects?.find((p) => p.slug === subproject));
  });

  AllProjects.forEach((main) => {
    if (main.projects) {
      const found = main.projects.find((sub) => sub.slug === subproject);
      if (found) project = found;
    }
  });

  console.log(project);

  return (
    <>
      <Navbar absolute="" />

      {/* Hero / Cover */}
      <section className="section relative flex items-center justify-center text-center themebg">
        <div className="row">
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.name}
            </h1>
            <p className="text-lg accentfont">{project.tagline}</p>
            <p className="mt-2 accentfont">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <div className="flex justify-center items-center px-20 max-sm:p-4 themebg">
        <section className="section w-full text-center bg-white accentfont">
          <div className="row accentfont">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-3xl bgcolorfont ">
                PROJECT OVERVIEW
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="leading-relaxed accentfont"
              >
                {project.description}
              </motion.p>

              {project.brochureLink && (
                <a
                  href={project.brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Download Brochure
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="section w-full bgcolorfont accentfont themebg">
          <div className="row">
            <div className="w-full">
              <img
                src={project.coverImage}
                alt=""
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 p-6">
              <h2 className="text-3xl  ">Highlights</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.highlights.map((point, i) => (
                  <li className=" accentfont" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="section w-full mx-auto">
          <div className="rowPadding">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl  mb-6 text-start w-full bgcolorfont">
                At A Glimpse
              </h2>
              <BentoImageGrid images={project.galleryImages} />
            </div>
          </div>
        </section>
      )}

      {/* Offerings */}
      {project.offerings && project.offerings.length > 0 && (
        <section className="section">
          <div className="row">
            <div className="w-full">
              <h2 className="text-3xl  mb-4 bgcolorfont">Units</h2>

              {project.offerings.map((offering, i) => (
                <div key={i} className="mt-2 w-full">
                  <h2 className="text-lg">{offering.name}</h2>
                  <h4 className="accentfont">{offering.type}</h4>
                  <p className="text-sm text-gray-500 mb-1 accentfont">
                    Size: {offering.size}
                  </p>
                  <ul className="text-gray-700">
                    {offering?.features?.map((feat, idx) => (
                      <li key={idx} className="mb-1 w-fit py-1 accentfont">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Floor Plans */}
      <section className="section themebg">
        <div className="row">
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <h2 className="text-3xl text-start w-full  bgcolorfont">
              Floor Plans
            </h2>
            <CarouselFloor images={project.floorPlans} heights="h-full max-sm:h-full" />
          </div>
        </div>
      </section>

 <section className="section">
        <div className="row">
           <div className="w-full flex flex-col justify-center items-start gap-4 max-sm:mb-4">
            <h2 className="text-3xl text-start w-full  bgcolorfont">
              Location
            </h2>
        <iframe src={project.maplink} width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
