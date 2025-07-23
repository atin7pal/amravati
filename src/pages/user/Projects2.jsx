import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import dreamscape from "../../assets/dreamscape3.jpg";
import ProjectTabs from "../../components/user/ProjectTabs.jsx";
import project1 from "../../assets/project1/livingdining.jpg";
import { Link } from "react-router-dom";

const Projects2 = () => {
  return (
    <>
      <Navbar absolute="absolute" background="bg-transparent" />
      <section
        style={{
          backgroundImage: `linear-gradient(#00000000,#0000005d, #0000005d),url(${dreamscape})`,
        }}
        className="section min-h-[120vh] bg-fixed text-center bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
      >
        <div className="row">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-5xl mb-6 w-[60%] mt-[70px] text-white">
              {" "}
              Where Heart and Mind Converge to Create Thoughtful Real Estate.
            </h1>
            <p className="text-xl max-w-5xl text-center accentfont p-4 text-white text-shadow-lg">
              At Amravati Group, we believe that true craftsmanship in real
              estate begins at the intersection Of passion and purpose. Our
              commitment to thoughtful developments reflects not just a vision,
              but a deep understanding of the communities we serve. Through
              meticulous planning and innovative design, we strive to build
              spaces that inspire and elevate the human experience. Each project
              is a testament to our dedication, where every detail is infused
              With care and consideration.
            </p>
            <div className="mt-6 flex flex-col justify-center items-center gap-4">
              <Link to="/completed" className="bg-[#ece4d9] border border-[#ece4d9] flex justify-center items-center gap-2 px-5 py-3 text-[#574d41]">
                COMPLETED PROJECTS
              </Link>
              <Link to="/upcoming" className="bg-[#ece4d9] border border-[#ece4d9] flex justify-center items-center gap-2 px-5 py-3 text-[#574d41]">
                UPCOMING PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects2;
