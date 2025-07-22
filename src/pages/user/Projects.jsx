import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import dreamscape from "../../assets/dreamscape2.jpg";
import ProjectTabs from "../../components/user/ProjectTabs.jsx";
import project1 from '../../assets/project1/livingdining.jpg';

const Projects = () => {
  return (
    <>
      <Navbar absolute="absolute" background="bg-transparent" />
      <section
        style={{
          backgroundImage: `url(${dreamscape})`,
        }}
        className="section h-[100vh] p-20 text-center bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
      >
        <h1 className="text-6xl mb-4 w-[60%] mt-6"> Where Heart and Mind Converge to Create Thoughtful Real Estate.</h1>
        <p className="text-3xl max-w-2xl text-center accentfont">
        </p>
        <div className="w-full"></div>
      </section>
      <section className="section themebg">
        <div className="row">
            <ProjectTabs/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
