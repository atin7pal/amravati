import React from "react";
import { useParams, Link } from "react-router-dom";
import { AllProjects } from "../../assets/arrays/AllProjects";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";

export default function ProjectDetails(props) {
  const { project } = useParams();
  console.log(project);

  const Project = AllProjects.find((p) => p.link === project);
  console.log(Project);

  if (!project) return <p>Project not found</p>;

  return (
    <>
      <Navbar />
      <section className="section bg-gradient-to-b from-[#ece4d9] via-white to-[#ece4d9] ">
        <div className="rowPadding w-full">
          <div className="flex flex-col justify-center items-center gap-6 w-full">
            <h1 className="text-5xl bgcolorfont max-sm:text-4xl">{Project.title}</h1>
            <img
              src={Project.coverImage}
              className="h-[50vh] object-cover w-full"
              alt=""
            />
            {Project.description.map((para, i) => (
              <h2
                key={i}
                className="mb-0 bgcolorfont text-start accentfont text-lg"
              >
                {para}
              </h2>
            ))}

              <div className="w-full">
                <h2 className="text-3xl bgcolorfont mb-4">Highlights</h2>
            <ul className="list-disc space-y-1 ml-6">
            {
              Project.highlights.map((element) => (
                <li className="accentfont bgcolorfont text-lg">{element}</li>
              ))
            }
            </ul>
          </div>

          </div>

        </div>
        <div className="row max-sm:mb-6">
          <div className="flex flex-col justify-center items-start w-full">
            <h2 className="text-4xl max-sm:text-3xl w-[80%] max-sm:w-full mb-6 bgcolorfont">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full">
              {Project.projects?.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/projects/${project}/${sub.slug}`}
                  className="p-8 transition flex flex-col gap-3 themebg shadow-lg"
                >
                  <h3 className="text-2xl">{sub.name}</h3>
                  <p className="accentfont text-xl">{sub.tagline}</p>
                  <ul className="list-disc pace-y-1 accentfont">
                    {sub.description.slice(0, 300)}..
                  </ul>

                  <button className="btn w-fit mt-2">Project Overview</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subprojects */}
      <Footer />
    </>
  );
}
