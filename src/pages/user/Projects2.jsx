import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import dreamscape from "../../assets/dreamscape2.jpg";
import ProjectTabs from "../../components/user/ProjectTabs.jsx";
import project1 from '../../assets/project1/livingdining.jpg';
import { Link } from "react-router-dom";


const Projects2 = () => {
    return (
        <>
          <Navbar />
      <section
        style={{
          backgroundImage: `url(${dreamscape})`,
        }}
        className="section min-h-[120vh] text-center bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col"
      >
        <div className="row">
            <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl mb-6 text-white w-[60%]"> Where Heart and Mind Converge to Create Thoughtful Real Estate.</h1>
        <p className="text-xl max-w-5xl text-center accentfont text-white p-4">
            At Amravati Group, we believe that true craftsmanship in real estate begins at the intersection Of passion and purpose. Our commitment to thoughtful developments reflects not just a vision, but a deep understanding of the communities we serve. Through meticulous planning and innovative design, we strive to build spaces that inspire and elevate the human experience. Each project is a testament to our dedication, where every detail is infused With care and consideration.
        </p>
        <div className="mt-6 flex flex-col justify-center items-center gap-4">
            <Link className="bg-[#ece4d9] border border-[#ece4d9] flex justify-center items-center gap-2 px-5 py-3 text-[#574d41]">New Projects</Link>
            <Link className="bg-[#ece4d9] border border-[#ece4d9] flex justify-center items-center gap-2 px-5 py-3 text-[#574d41]">Upcoming Projects</Link>
        </div>
        </div>
        </div>
      </section>  
      <Footer/>
        </>
    );
}

export default Projects2;
