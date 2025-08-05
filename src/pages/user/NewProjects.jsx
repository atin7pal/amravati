import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import completed from "../../assets/completed.jpg";
import ProjectExpandableCard from "../../components/user/ExpandableProject";
import { Projects } from "../../assets/arrays/Projects.jsx";
import { Upcoming } from "../../assets/arrays/Upcoming.jsx";
import ExpandableUpcoming from "../../components/user/ExpandableUpcoming.jsx";

const NewProjects = () => {
  return (
    <>
      <Navbar />
      <section className="section themebg max-sm:h-full">
        <div className="rowPadding">
          <div className="w-full flex flex-col justify-center items-center gap-4 max-sm:items-center text-center">
            <h2 className="text-5xl max-sm:text-4xl">UPCOMING PROJECTS</h2>
            <p className="accentfont text-lg w-[80%]">
              Our upcoming ventures are shaped by the same passion and
              precision, blending modern design with enduring value. Each
              development is envisioned to enrich lifestyles, foster
              connections, and set new benchmarks in excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="row">
          <div>
            {Upcoming.map((project, index) => (
              <ExpandableUpcoming
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

export default NewProjects;
