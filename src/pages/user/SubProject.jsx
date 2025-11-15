import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { AllProjects } from "../../assets/arrays/AllProjects";
import BentoImageGrid from "../../components/user/BentoGrid";
import CarouselFloor from "../../components/user/CarouselFloor";
import ContactForm from "../../components/user/ContactForm";
import { MessageCircle } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export function SubProject() {
  const { project: projectSlug, subproject: subSlug } = useParams(); // ✅ get both slugs
  console.log(projectSlug, subSlug);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  // ✅ First find main project
  const mainProject = AllProjects.find((p) => p?.link === projectSlug);

  console.log(mainProject);

  // ✅ Then find the subproject inside it
  const project =
    mainProject?.projects?.find((sub) => sub?.slug === subSlug) || null;

  console.log(project);

  if (!subSlug || !project) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Project Not Found
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("city", "NA");
      formData.append("state", "NA");
      formData.append("category", "NA");
      formData.append("query", "NA");

      const res = await fetch("https://www.amravatigroup.in/contact_form.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.text(); // assuming PHP returns a simple success message
      setSuccess(result || "Form submitted successfully!");
      setForm({ name: "", phone: "", email: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }

    setIsOpen(false);

    // ✅ Trigger brochure download if available
    if (project?.brochureLink) {
      const link = document.createElement("a");
      link.href = project.brochureLink;
      link.setAttribute("download", "brochure.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };

  return (
    <>
      <Navbar absolute="" />

      {/* Hero / Cover */}
      <section className="section relative flex items-center justify-center text-center themebg">
        <div className="row">
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl mb-4">{project?.name}</h1>
            <p className="text-lg accentfont">{project?.tagline}</p>
            <p className="mt-2 accentfont">{project?.location}</p>
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
                {project?.description}
              </motion.p>

              {project?.offerings?.length > 0 && (
                <div className="w-full flex justify-center items-center flex-col max-sm:mb-4">
                  <h2 className="text-3xl mb-2 bgcolorfont">UNITS</h2>

                  {project?.offerings?.map((offering, i) => (
                    <div key={i} className="mt-2 w-full mx-auto themebg py-4">
                      <h2 className="text-lg">{offering?.name}</h2>
                      <h4 className="accentfont">{offering?.type}</h4>
                      <p className="text-sm text-gray-500 mb-1 accentfont">
                        Size: {offering?.size}
                      </p>
                      <ul className="text-gray-700 text-center mx-auto w-fit px-4 flex justify-center items-center flex-col">
                        {offering?.features?.map((feat, idx) => (
                          <li
                            key={idx}
                            className="mb-1 w-fit py-1 accentfont text-center"
                          >
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Highlights */}
      {project?.highlights?.length > 0 && (
        <section className="section w-full bgcolorfont accentfont themebg">
          <div className="rownopad">
            <div className="w-full">
              <img
                src={project?.coverImage}
                alt={project?.name || "Project Image"}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 p-6 max-sm:p-2">
              <h2 className="text-3xl">WHY {project?.name}</h2>
              <div className="space-y-3">
                {project?.moreDetails?.map((item, i) => (
                  <p key={i} className="text-gray-700 accentfont">
                    <span className="font-semibold bgcolorfont">
                      {item?.label}
                    </span>{" "}
                    {item?.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {project?.properties?.length > 0 ? (
        project.properties.map((prop, i) => (
          <div className="rownopad themebg">
            <div className="max-sm:pb-4">
              <h2 className="text-3xl w-full text-start bgcolorfont mb-6">
                {prop.type.toUpperCase()}
              </h2>

              {prop?.floorplans?.length > 0 && (
                <div className="mb-8 w-full">
                  <h3 className="text-2xl mb-3">Floor Plans</h3>
                  <CarouselFloor
                    images={prop.floorplans}
                    heights="h-full max-sm:h-full"
                  />
                </div>
              )}

              {prop?.images?.length > 0 && (
                <div className="w-full">
                  <h3 className="text-2xl mb-3">At A Glimpse</h3>
                  <BentoImageGrid images={prop.images} />
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <></>
      )}

      {/* Floor Plans */}
      {project?.floorPlans?.length > 0 && (
        <section className="section themebg">
          <div className="rownopad">
            <div className="w-full flex flex-col justify-center items-start gap-4">
              <h2 className="text-3xl text-start w-full bgcolorfont">
                Floor Plans
              </h2>
              <CarouselFloor
                images={project?.floorPlans}
                heights="h-full max-sm:h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project?.galleryImages?.length > 0 && (
        <section className="section w-full mx-auto">
          <div className="rowPadding">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className="text-4xl mb-4 mt-4 text-start w-full bgcolorfont">
                At A Glimpse
              </h2>
              <BentoImageGrid images={project?.galleryImages} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="justify-between flex items-center w-full pt-20 pb-0 px-20 max-sm:px-4 max-sm:pt-4 themebg">
        <div className="flex justify-start items-center w-full gap-3 max-sm:justify-between">
          <div className="accentfont text-xl">Want to Know More</div>
          <div>
            {project?.brochureLink && (
              <button onClick={() => setIsOpen(true)} className="btn">
                Download Brochure
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Location */}
      {project?.maplink && (
        <section className="section themebg">
          <div className="row">
            <div className="w-full flex flex-col justify-center items-start gap-4 max-sm:mb-4">
              <h2 className="text-3xl text-start w-full bgcolorfont">
                Location
              </h2>
              <iframe
                src={project?.maplink}
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
      <div className="p-4 pt-0 themebg">
        <CallButton/>
        <WhatsAppButton/>
        <ContactForm />
      </div>
      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50"
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
                  value={form?.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-gray-300 p-2 accentfont"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form?.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border p-2 border-gray-300 accentfont"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form?.email}
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


function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918054088888"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
    >
      <IoLogoWhatsapp size={28} className="vibrate" />
    </a>
  );
}



function CallButton() {
  return (
    <a
      href="tel:+918054088888"
      className="fixed bottom-24 left-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition"
    >
      <IoCall size={28} className="vibrate" />
    </a>
  );
}

