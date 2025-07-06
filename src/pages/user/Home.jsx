import React from "react";
import Navbar from "../../components/user/Navbar.jsx";
import { Footer } from "../../components/user/Footer.jsx";
import home from "../../assets/home2.png";
import map from "../../assets/map.jpg";
import home1 from "../../assets/home1.jpg";

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
export function Home(props) {
  const uniquePoints = [
    {
      heading: "Personalized Service",
      description:
        "We go beyond transactions to build lifelong relationships, offering tailored guidance for every step of your real estate journey.",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      heading: "Hyperlocal Expertise",
      description:
        "Our agents live and breathe your neighborhood. We know the pulse of the area like no one else.",
      icon: <FaMapMarkedAlt className="text-3xl" />,
    },
    {
      heading: "Transparent Pricing",
      description:
        "No hidden fees, no last-minute surprises—just honest, upfront pricing and full cost breakdowns.",
      icon: <FaPiggyBank className="text-3xl" />,
    },
    {
      heading: "24/7 Human Support",
      description:
        "We’re always a call or chat away. Real humans, real help—no bots, ever.",
      icon: <FaHeadset className="text-3xl" />,
    },
    {
      heading: "Curated Listings Only",
      description:
        "Every listing we show is hand-picked and quality-verified—no clutter, only real opportunities.",
      icon: <FaHome className="text-3xl" />,
    },
    {
      heading: "Smarter Investments",
      description:
        "With data-driven insights and market forecasting, we help you buy smarter and grow your assets faster.",
      icon: <FaChartLine className="text-3xl" />,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section relative accentbg min-h-screen justify-center">
        <div className="row">
          <div className="w-full flex justify-center items-start flex-col gap-4">
            <h2 className="text-6xl">Experience The</h2>
            <h2 className="text-6xl">Amravati group</h2>
            <div className="h-1 w-[50%] themebg"></div>
          </div>

          <div
            style={{ backgroundImage: `url(${home})` }}
            className="w-full flex justify-center items-start flex-col gap-4 h-[80vh] bg-center bg-no-repeat bg-contain"
          ></div>
        </div>

        <div className="accentbg px-10">
          <Experience/>
        </div>
      </section>
      <div className="section min-h-screen themebg bg-center bg-no-repeat bg-contain">
        <h2 className="text-5xl p-20 text-start">A unity of peace and luxury </h2>
        <div className="row">
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
          <div
            className="w-full flex justify-center items-center h-[60vh] bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${map})` }}
          >
            <img
              src={home1}
              alt=""
              className="absolute bottom-5 right-10 h-[500px] w-[450px] object-cover"
            />
          </div>
        </div>
      </div>
      <section className="section min-h-screen bg-gradient-to-b from-[#4B352A] to-[#F8F3D9]">
        <div className="row">
          <h2 className="text-5xl themecolorfont w-full">
            How we are different
          </h2>
          <p className="themecolorfont accentfont">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            tempora quaerat eius mollitia corrupti neque iusto dolorum?
            Accusantium, quaerat quidem!
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-0 p-20">
          {uniquePoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#F8F3D9]/50 p-5 flex flex-col items-start gap-4 hover:shadow-lg transition"
            >
              {point.icon}
              <h3 className="text-2xl">{point.heading}</h3>
              <p className="accentfont">{point.description}</p>
            </div>
          ))}
        </section>
      </section>
      <section className="section accentbg">
        <div className="p-20 pt-10 w-full">
          <Carousel />
        </div>
      </section>

      <section className="section accentbg">
        <div className="row">
          <FeatureSection />
        </div>
      </section>

      <section className="section themebg">
        <div className="row">
          <TestimonialCarousel />
        </div>
      </section>
      <Footer />
    </>
  );
}
