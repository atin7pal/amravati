import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { AllProjects } from "../../assets/arrays/AllProjects";
import BentoImageGrid from "../../components/user/BentoGrid";
import CarouselFloor from "../../components/user/CarouselFloor";

export function SubProject() {
  const { project: projectSlug, subproject: subSlug } = useParams(); // ✅ get both slugs
  console.log(projectSlug, subSlug);
  
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  // ✅ First find main project
  const mainProject = AllProjects.find((p) => p.link === projectSlug);

  console.log(mainProject);
  

  // ✅ Then find the subproject inside it
  const project =
    mainProject?.projects?.find((sub) => sub.slug === subSlug) || null;

    console.log(project);
    

  if (!subSlug) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Project Not Found
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info:", form);

    setIsOpen(false);

    // ✅ Trigger brochure download
    const link = document.createElement("a");
    link.href = project.brochureLink;
    link.setAttribute("download", "brochure.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <Navbar absolute="" />

      {/* Hero / Cover */}
      <section className="section relative flex items-center justify-center text-center themebg">
        <div className="row">
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl mb-4">{project.name}</h1>
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
              <h2 className="text-3xl bgcolorfont">PROJECT OVERVIEW</h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="leading-relaxed accentfont"
              >
                {project.description}
              </motion.p>

              {project.brochureLink && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn max-sm:mb-10"
                >
                  Download Brochure
                </button>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
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
              <h2 className="text-3xl">Highlights</h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.highlights.map((point, i) => (
                  <li className="accentfont" key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.galleryImages?.length > 0 && (
        <section className="section w-full mx-auto">
          <div className="rowPadding">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl mb-6 text-start w-full bgcolorfont">
                At A Glimpse
              </h2>
              <BentoImageGrid images={project.galleryImages} />
            </div>
          </div>
        </section>
      )}

      {/* Offerings */}
      {project.offerings?.length > 0 && (
        <section className="section">
          <div className="row">
            <div className="w-full">
              <h2 className="text-3xl mb-4 bgcolorfont">Units</h2>

              {project.offerings.map((offering, i) => (
                <div key={i} className="mt-2 w-full">
                  <h2 className="text-lg">{offering.name}</h2>
                  <h4 className="accentfont">{offering.type}</h4>
                  <p className="text-sm text-gray-500 mb-1 accentfont">
                    Size: {offering.size}
                  </p>
                  <ul className="text-gray-700">
                    {offering.features?.map((feat, idx) => (
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
      {project.floorPlans?.length > 0 && (
        <section className="section themebg">
          <div className="row">
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <h2 className="text-3xl text-start w-full bgcolorfont">
                Floor Plans
              </h2>
              <CarouselFloor images={project.floorPlans} heights="h-full max-sm:h-full" />
            </div>
          </div>
        </section>
      )}

      {/* Location */}
      {project.maplink && (
        <section className="section">
          <div className="row">
            <div className="w-full flex flex-col justify-center items-start gap-4 max-sm:mb-4">
              <h2 className="text-3xl text-start w-full bgcolorfont">
                Location
              </h2>
              <iframe
                src={project.maplink}
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-10 shadow-lg w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl mb-4 bgcolorfont">
                Hi, Please Enter The Details
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-300 p-2 accentfont"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border p-2 border-gray-300 accentfont"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border p-2 border-gray-300 accentfont"
                  required
                />
                <div className="flex gap-4 mt-3">
                  <button type="submit" className="btn w-full accentfont">
                    Submit & Download
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 mt-0 py-1 bg-gray-200 w-full accentfont"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
