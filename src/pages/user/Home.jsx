import React from "react";
import Navbar from "../../components/user/Navbar.jsx";
import { Footer } from "../../components/user/Footer.jsx";
import home from "../../assets/home2.png";
import map from "../../assets/map.jpg";
import home1 from "../../assets/home1.jpg";
import home3 from "../../assets/project1/livingdining.jpg";
import home4 from "../../assets/project1/outdoor.jpg";
import video2 from "../../assets/video2.mp4";

import {
  FaHandshake,
  FaMapMarkedAlt,
  FaPiggyBank,
  FaHeadset,
  FaHome,
  FaChartLine,
} from "react-icons/fa";
import Carousel from "../../components/user/Carousel.jsx";
import TestimonialCarousel from "../../components/user/TestimonialCarousel.jsx";
import FeatureSection from "../../components/user/FeatureSection.jsx";
import Experience from "../../components/user/Experience.jsx";
import homevideo from "../../assets/homevideo.mp4";
import floral from "../../assets/floral.jpg";
import logobuilding from "../../assets/logobuilding.svg";
import home5 from "../../assets/project1/outdoor1.jpg";
import BlogSection from "../../components/user/BlogSection.jsx";
import { SendQuery } from "../../components/user/SendQuery.jsx";


export function Home(props) {
  const uniquePoints = [
    {
      heading: "Understanding Needs",
      description:
        "We start by listening. Every client’s needs are unique, so we take time to understand your goals, budget, and lifestyle.",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      heading: "Local Area Research",
      description:
        "Our experts analyze the locality, growth trends, and future prospects to find the perfect match for your investment or home.",
      icon: <FaMapMarkedAlt className="text-3xl" />,
    },
    {
      heading: "Budget Planning",
      description:
        "We help you determine a realistic budget, offer financing options, and ensure cost-effective yet premium solutions.",
      icon: <FaPiggyBank className="text-3xl" />,
    },

    {
      heading: "Closing & Beyond",
      description:
        "We assist with paperwork, legalities, registration, and post-purchase services to ensure a seamless experience.",
      icon: <FaChartLine className="text-3xl" />,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section relative bg-gradient-to-b from-[#F8F3D9] via-[#F8F3D9]/90 h-[80vh] justify-center">
        <video
          src={homevideo}
          loop
          muted
          autoPlay
          className="absolute h-screen object-cover object-center w-full top-0 left-0 -z-10"
        ></video>
        <div className="row absolute top-0 left-0 h-full">
          <div className="w-full flex justify-center items-center h-full flex-col gap-4">
            <h2 className="text-6xl max-sm:text-3xl">Experience The</h2>
            <h2 className="text-6xl max-sm:text-3xl">Amravati group</h2>
            <div className="h-[1px] w-[30%] bg-[#4B352A] max-sm:w-[60%]"></div>
            <div className="flex justify-start font-light items-center gap-4 text-3xl max-sm:text-xl">
              <p className="accentfont">Quality</p>
              <p className="border-r-1 border-l-1 px-3 accentfont border-[#4B352A]">
                Luxury
              </p>
              <p className="accentfont">Peace</p>
            </div>
            {/* <div className="w-full flex justify-center items-center gap-4">
              <button className="btn mt-4">Schedule A Tour</button>
            </div> */}
          </div>
        </div>
      </section>
      <div className="section min-h-screen themebg bg-center bg-no-repeat bg-contain">
        <h2 className="text-5xl p-20 text-start max-sm:text-3xl max-sm:p-10 max-sm:pb-0">
          A unity of peace and luxury{" "}
        </h2>
        <div className="row">
          <div
            className="w-full flex justify-center items-center h-[60vh] bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${map})` }}
          >
            <img
              src={home5}
              alt=""
              className="absolute -bottom-5 right-10 h-[500px] w-[450px] object-cover max-sm:h-[300px] max-sm:w-[300px] max-sm:bottom-5"
            />
          </div>

          <div className="w-full flex justify-center items-start flex-col gap-4">
            <h2 className="text-4xl">Welcome</h2>
            <p className="w-[80%] accentfont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consequuntur nemo aut illo error nam quos, sit veritatis labore
              alias optio atque deleniti autem facere exercitationem sequi harum
              porro, nesciunt, rem sapiente aliquid accusantium mollitia beatae?
              Beatae fuga, vel est nobis assumenda saepe, facilis dolores esse
              cumque dolore, id provident?
            </p>
            <br />
            <p className="w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              explicabo.
            </p>
          </div>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `linear-gradient(#f8f3d9e5, #F8F3D9, #f8f3d9e5),url(${floral})`,
        }}
        className="section min-h-screen bg-gradient-to-b py-20 max-sm:p-10 max-sm:px-0 pb-10 bg-center bg-no-repeat bg-cover"
      >
        <div className="p-10 pt-5 pb-0 max-sm:p-0">
          <h2 className="text-5xl text-center max-sm:text-3xl max-sm:mb-10">
            How We Work
          </h2>
          <div className="row">
            <div className="w-full flex justify-center items-center">
              <div className="w-full grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {uniquePoints.map((element) => (
                  <div className="p-8 border gap-4 flex justify-center items-start flex-col">
                    <h2 className="text-3xl starfont">{element.heading}</h2>
                    <p className="accentfont text-sm">{element.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section accentbg">
        <h2 className="text-5xl p-20 pt-0 max-sm:p-4 max-sm:text-3xl">
          A Glimpse Of Our Projects
        </h2>
        <div className="row">
          <Carousel />
        </div>
      </section>

      <section className="section accentbg">
        <div className="row">
          <FeatureSection />
        </div>
      </section>
      <section className="section">
        <div className="rowPadding accentbg">
          <BlogSection />
        </div>
      </section>
      <section className="section">
        <div className="row">
          <div className="flex flex-col min-h-screen justify-center items-center text-center themebg w-full p-10 gap-4 group">
            <div className="relative">
              <div className="w-full h-full absolute flex justify-center items-center bg-[#F8F3D9]/80 group-hover:bg-transparent transition-all">
                <img src={logobuilding} className="h-[200px]" alt="" />
              </div>
              <img
                src={home3}
                className="h-[60vh] w-full object-cover pb-10"
                alt=""
              />
            </div>
            <h2 className="text-3xl starfont">Lorem ipsum dolor sit amet</h2>
            <div className="w-[50%] h-1 accentbg"></div>
            <p className="accentfont">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              dicta molestias corrupti quas quo! Consequuntur quidem ipsam
              placeat modi sit?
            </p>
          </div>
          <div className="flex flex-col min-h-screen justify-center items-center text-center accentbg w-full p-10 gap-4">
            <div className="relative group">
              <div className="w-full h-full absolute flex justify-center items-center bg-[#F8F3D9]/80 group-hover:bg-transparent transition-all">
                <img
                  src={logobuilding}
                  className="h-[200px] group-hover:hidden"
                  alt=""
                />
              </div>
              <img
                src={home4}
                alt=""
                className="h-[60vh] w-full object-cover pb-10"
              />
            </div>
            <h2 className="text-3xl starfont">Lorem ipsum dolor sit amet</h2>
            <div className="w-[50%] h-1 themebg"></div>
            <p className="accentfont">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              dicta molestias corrupti quas quo! Consequuntur quidem ipsam
              placeat modi sit?
            </p>
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="row">
          <TestimonialCarousel />
        </div>
      </section>
      <SendQuery video={video2} />
      <Footer />
    </>
  );
}
