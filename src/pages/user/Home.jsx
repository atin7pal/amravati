import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/user/Navbar.jsx";
import { Footer } from "../../components/user/Footer.jsx";
import homevideo from "../../assets/homevideo.mp4";
import map from "../../assets/map.jpg";
import home5 from "../../assets/project1/outdoor1.jpg";
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
import herobg from '../../assets/herobg.webp'

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
      <section className="section bg-fixed relative bg-gradient-to-b h-[80vh] justify-center from-[#ece4d9] via-[#ece4d9]/90">
        <img
          src={herobg}
          className="absolute h-screen object-cover object-center w-full top-0 left-0 -z-10"
        />
        <div className="row absolute top-0 left-0 h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex justify-center items-start h-full flex-col gap-4"
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
          className="text-5xl p-20 text-start max-sm:text-3xl max-sm:p-10 max-sm:pb-0"
        >
          BUILDING
        </motion.h2>
        <div className="row">
          <motion.div
            {...fadeInProps}
            className="w-full flex justify-center items-center h-[60vh] bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${map})` }}
          >
            <img
              src={home5}
              alt=""
              className="absolute -bottom-5 right-10 h-[500px] w-[450px] object-cover max-sm:h-[300px] max-sm:w-[300px] max-sm:bottom-5"
            />
          </motion.div>

          <motion.div
            {...fadeInProps}
            className="w-full flex justify-center items-start max-sm:items-center max-sm:text-center flex-col gap-4"
          >
            <h2 className="text-5xl max-sm:text-4xl">WELCOME</h2>
            <p className="w-[80%] accentfont max-sm:w-full">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              architecto tenetur ab rerum, illum esse amet atque aspernatur sunt
              eum tempore deleniti sed quod. Ad facere sit facilis ea esse vel?
              Hic eaque provident voluptatem vero est ea maiores officia iste
              voluptates excepturi incidunt, quos quae consequuntur, aliquam
              facilis quasi.
            </p>
            <br />
            <p className="w-[80%] max-sm:w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              explicabo.
            </p>
          </motion.div>
        </div>
      </div>

      <section
        style={{
          backgroundImage: `linear-gradient(#ece4d9ed, #ece4d9, #ece4d9),url(${floral})`,
        }}
        className="section min-h-screen bg-gradient-to-b py-20 max-sm:p-10 max-sm:px-0 pb-10 bg-center bg-no-repeat bg-cover"
      >
        <div className="p-10 pt-5 pb-0 max-sm:p-0">
          <motion.h2
            {...fadeInProps}
            className="text-5xl text-center max-sm:text-3xl max-sm:mb-10"
          >
            HOW WE WORK
          </motion.h2>
          <div className="row">
            <div className="w-full flex justify-center items-center">
              <div className="w-full grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {uniquePoints.map((element, i) => (
                  <motion.div
                    key={i}
                    {...fadeInProps}
                    className="p-8 border gap-4 flex justify-center items-start flex-col"
                  >
                    <h2 className="text-3xl">{element.heading}</h2>
                    <p className="accentfont text-sm">{element.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section accentbg">
        <motion.h2
          {...fadeInProps}
          className="text-5xl p-20 pt-0 max-sm:p-4 max-sm:text-3xl max-sm:text-center"
        >
          A Glimpse Of Our Projects
        </motion.h2>
        <div className="row">
          <Carousel />
        </div>
      </section> */}

      <section className="section accentbg">
        <div className="row">
          <FeatureSection />
        </div>
      </section>
      <Footer />
    </>
  );
}
