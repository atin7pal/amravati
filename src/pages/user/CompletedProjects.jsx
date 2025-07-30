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
        <div className="row">
          <div className="w-full flex flex-col justify-center items-center gap-4 max-sm:items-center text-center">
            <h2 className="text-5xl max-sm:text-4xl">COMPLETED PROJECTS</h2>
            <p className="accentfont text-lg w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos et nobis eos eaque, labore eligendi fuga sapiente
              voluptatem quas maiores debitis exercitationem dolorum provident
              quam cumque quibusdam numquam, architecto itaque.
            </p>
          </div>
       
        </div>
      </section>
      <section className="section themebg">
        <div className="row">
          <div>
            {Projects.map((project, index) => (
        <ProjectExpandableCard key={index} projects={Projects} project={project} />
      ))}
      </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CompletedProjects;
