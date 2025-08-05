import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import completed from "../../assets/completed.jpg";
import ProjectExpandableCard from "../../components/user/ExpandableProject";
import { Projects } from "../../assets/arrays/Projects.jsx";

const CompletedProjects = () => {
  return (
    <>
      <Navbar />
      <section className="section themebg max-sm:h-full">
        <div className="rowPadding">
          <div className="w-full flex flex-col justify-center items-center gap-4 max-sm:items-center text-center">
            <h2 className="text-5xl max-sm:text-3xl">COMPLETED PROJECTS</h2>
            <p className="accentfont text-lg w-[80%] max-sm:w-full">
              With each completed project, Amravati Group has delivered more
              than structures—we’ve delivered promises fulfilled. These
              landmarks stand as testaments to our commitment to quality, timely
              delivery, and creating spaces where communities thrive.
            </p>
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="row">
          <div>
            {Projects.map((project, index) => (
              <ProjectExpandableCard
                key={index}
                projects={Projects}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CompletedProjects;
