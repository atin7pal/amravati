import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/user/Navbar.jsx";
import { Footer } from "../../components/user/Footer.jsx";
import homevideo from "../../assets/homevideo.mp4";
import map from "../../assets/map.jpg";
import home5 from "../../assets/chair.jpeg";
import floral from "../../assets/floral.jpg";
import home3 from "../../assets/project1/livingdining.jpg";
import home4 from "../../assets/project1/outdoor.jpg";
import logobuilding from "../../assets/logobuilding.svg";
import video2 from "../../assets/video2.mp4";
import {
  FaHandshake,
  FaMapMarkedAlt,
  FaPiggyBank,
  FaChartLine,
} from "react-icons/fa";
import Carousel from "../../components/user/Carousel.jsx";
import TestimonialCarousel from "../../components/user/TestimonialCarousel.jsx";
import FeatureSection from "../../components/user/FeatureSection.jsx";
import BlogSection from "../../components/user/BlogSection.jsx";
import { SendQuery } from "../../components/user/SendQuery.jsx";
import Loader from "../../components/Loader.jsx";
import { Helmet } from "react-helmet-async";
import herobg from "../../assets/herobg2.png";

export function Home() {
  const fadeInProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  const uniquePoints = [
    {
      heading: "UNDERSTANDING NEEDS",
      description:
        "We start by listening. Every client’s needs are unique, so we take time to understand your goals, budget, and lifestyle.",
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      heading: "LOCAL AREA RESEARCH",
      description:
        "Our experts analyze the locality, growth trends, and future prospects to find the perfect match for your investment or home.",
      icon: <FaMapMarkedAlt className="text-3xl" />,
    },
    {
      heading: "BUDGET & PLANNING",
      description:
        "We help you determine a realistic budget, offer financing options, and ensure cost-effective yet premium solutions.",
      icon: <FaPiggyBank className="text-3xl" />,
    },
    {
      heading: "CLOSING & BEYOND",
      description:
        "We assist with paperwork, legalities, registration, and post-purchase services to ensure a seamless experience.",
      icon: <FaChartLine className="text-3xl" />,
    },
  ];

  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Home | Amaravati Group</title>
      </Helmet>

      <Navbar />
      <section className="section bg-fixed relative bg-gradient-to-b h-[80vh] justify-center">
        <img
          src={herobg}
          className="absolute h-screen object-cover object-center w-full top-0 left-0 -z-10"
        />
        <div className="row absolute top-0 left-0 h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex justify-top items-end h-full flex-col gap-4"
          >
            <h2 className="text-6xl max-sm:text-4xl bgcolorfont capitalize max-sm:text-center leading-[70px]">
              BUILDING DREAMS, <br /> ONE HOME AT A TIME
            </h2>
          </motion.div>
        </div>
      </section>

      <div className="section min-h-screen themebg bg-center bg-no-repeat bg-contain">
        <motion.h2
          {...fadeInProps}
          className="text-5xl p-20 text-center max-sm:text-3xl max-sm:p-10 max-sm:pb-0 pb-12"
        >
          WELCOME TO AMRAVATI GROUP
        </motion.h2>
        <div className="row">
          <motion.div
            {...fadeInProps}
            className="w-full flex justify-center items-center h-[60vh] max-sm:h-[40vh] bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${map})` }}
          >
            <img
              src={home5}
              alt=""
              className="absolute -bottom-10 right-10 h-[500px] w-[450px] object-cover max-sm:h-[300px] max-sm:w-[300px] max-sm:bottom-5"
            />
          </motion.div>

          <motion.div
            {...fadeInProps}
            className="w-full flex justify-center items-start max-sm:items-center max-sm:text-center flex-col gap-4"
          >
            <h2 className="text-3xl max-sm:text-xl">
              WHERE TOMORROW BEGINS TODAY.
            </h2>
            <div className="w-[60%] h-0.5 brownbg"></div>
            <p className="w-[80%] accentfont max-sm:w-full text-pretty">
              At Amravati Group, we’re shaping modern lifestyles through
              innovative real estate that blends design, comfort, and purpose.
              With years of experience and a strong legacy in the industry,
              we’ve built a reputation for trust and quality. Whether it’s
              contemporary spaces in the lush landscapes of Himachal or smart
              spaces in the heart of Chandigarh, our developments are built for
              the future — stylish, sustainable, and thoughtfully planned.
              Beyond real estate, we’re also creating impact through our
              everyday retail stores and our forward-thinking educational
              venture.
            </p>
            <br />
            <p className="w-[80%] max-sm:w-full"></p>
          </motion.div>
        </div>
      </div>

      <section className="section accentbg ">
        <div className="row">
          <FeatureSection />
        </div>
      </section>

      <section className="accentbg pb-20 max-sm:pb-10">
        <div className="text-2xl p-10 flex justify-center items-center italic accentfont">
          "Wherever we build, we build with intent — for communities, for
          progress, and for generations to come."
        </div>
      </section>
      <Footer />
    </>
  );
}
