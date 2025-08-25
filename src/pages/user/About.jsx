import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import aboutbanner from "../../assets/project1/hills/hills9.webp";
import aboutbanner1 from "../../assets/project1/hills/image5.webp";
import aboutbanner2 from "../../assets/project1/hills/hills12.webp";
import floral from "../../assets/floral.jpg";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import map from "../../assets/tropo.jpg";
import TeamSection from "../../components/user/TeamSection";
import FAQSection from "../../components/user/FAQSection";
import { SendQuery } from "../../components/user/SendQuery";
import video2 from "../../assets/video2.mp4";
import BentoImageGrid from "../../components/user/BentoGrid";
import { Helmet } from "react-helmet-async";
import director from "../../assets/team/director.png";
import memory1 from "../../assets/memory1.jpeg";
import memory2 from "../../assets/memory2.jpeg";
import aboutshade from "../../assets/aboutshade.jpg";

export function About(props) {
  const fadeInProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <>
      <Helmet>
        <title>About Us | Amaravati Group</title>
      </Helmet>

      <Navbar />
      <section className="section h-[80vh] themebg max-sm:h-full">
        <div className="row h-full">
          <motion.div
            className="w-full flex flex-col justify-center items-start max-sm:items-center max-sm:text-center gap-4"
            {...fadeInProps}
          >
            <h2 className="text-xl brownbg px-2 py-1 max-sm:text-sm">
              ABOUT US
            </h2>
            <h2 className="text-5xl max-sm:text-3xl">AMRAVATI GROUP</h2>
            <p className="w-[80%] accentfont max-sm:w-full">
              At the heart of Amravati Group lies a mission: to build not just
              spaces, but trust—through timely delivery, uncompromised quality,
              and community-driven vision. Our developments are a reflection of
              thoughtful planning, architectural brilliance, and seamless
              execution, brought to life by a team of acclaimed architects,
              engineers, designers, and planners.
            </p>
          </motion.div>
          <motion.div
            className="w-full flex justify-center items-center h-full"
            {...fadeInProps}
          >
            <img src={aboutbanner} alt="" className="h-full object-cover" />
          </motion.div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: `linear-gradient(#fff, #ffffffa1, #ece4d9),url(${aboutshade})`,
        }}
        className="bg-gradient-to-b  bg-center bg-cover bg-no-repeat"
      >
        <section className="section h-full">
          <div className="rownopad">
            <motion.div
              className="w-full flex flex-col justify-center items-center gap-4"
              {...fadeInProps}
            >
              <div className="w-full h-full">
                <img
                  src={memory1}
                  className="w-full h-[350px] max-sm:h-[300px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex w-full gap-4">
                <img
                  src={aboutbanner1}
                  className="w-full max-sm:h-[15vh] h-[20vh] object-cover"
                  alt=""
                />
                <img
                  src={aboutbanner2}
                  className="w-full max-sm:h-[15vh] h-[20vh] object-cover"
                  alt=""
                />
                <div className="w-full h-[20vh] brownbg max-sm:hidden"></div>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-[50vh] max-sm:h-[100%] px-5 flex gap-4 flex-col max-sm:text-center"
              {...fadeInProps}
            >
              <h2 className="text-5xl  max-sm:pt-6 max-sm:text-3xl max-sm:text-center bgcolorfont">
                OUR STORY
              </h2>
              <p className="accentfont">
                Founded in the year 1997 under the visionary leadership of Late
                Shri Amarnath Aggarwal, Amravati Group began its journey with a
                simple yet ambitious goal: to redefine the real estate landscape
                through timeless design and trustworthy execution. Guided today
                by his son Mr. Hargobind Goyal and grandsons Ainesh Goyal and
                Viren Goyal, the Group has grown into a diversified enterprise
                with interests spanning residential and commercial real estate,
                retail, and education.
              </p>

              <p className="accentfont">
                What began as a real estate enterprise has thoughtfully expanded
                into Everyday Supermarket, our retail chain for daily
                essentials, and Amravati Vidyalaya, an educational institution
                focused on nurturing future-ready minds.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section bg-center bg-no-repeat bg-cover">
          <div className="rowPadding">
            <motion.div
              className="w-full h-full flex flex-col text-center gap-4 justify-center items-center p-20 max-sm:p-4 max-sm:border"
              {...fadeInProps}
            >
              <h2 className="text-5xl max-sm:text-3xl bgcolorfont">
                OUR VISION
              </h2>
              <p className="accentfont">
                To shape the future of luxury living through contemporary,
                sustainable spaces that combine timeless design with lasting
                value—building communities that embody elegance, innovation, and
                trust.
              </p>
            </motion.div>
            <motion.div
              className="w-full h-full flex flex-col text-center gap-4 justify-center items-center bg-white p-20 shadow-lg shadow-[#ece4d9] max-sm:p-4 max-sm:border"
              {...fadeInProps}
            >
              <h2 className="text-5xl max-sm:text-3xl bgcolorfont">
                OUR MISSION
              </h2>
              <p className="accentfont">
                To build lasting value through thoughtfully designed spaces,
                delivered with integrity, innovation, and an unwavering
                commitment to quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* <section className="section">
        <motion.h2
          className="text-5xl p-20 pb-0 max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center"
          {...fadeInProps}
        >
          A Glimpse Of Our Gallery
        </motion.h2>
        <div className="row">
          <motion.div {...fadeInProps}>
            <BentoImageGrid />
          </motion.div>
        </div>
      </section> */}
        <section className="section bg-no-repeat bg-center bg-cover max-sm:pb-10">
          <motion.h2
            className="text-5xl p-20 pb-0 max-sm:p-0 max-sm:mt-10 max-sm:text-3xl max-sm:text-center bgcolorfont"
            {...fadeInProps}
          >
            MEET THE VISIONARIES
          </motion.h2>
          <div className="row">
            <motion.div className="w-full" {...fadeInProps}>
              <TeamSection />
            </motion.div>
          </div>
        </section>

        {/* <section className="section themebg max-sm:pb-10">
        <motion.h2
          className="text-5xl pt-10 max-sm:px-2.5 max-sm:text-3xl max-sm:mt-4 max-sm:text-center"
          {...fadeInProps}
        >
          FROM OUR GALLERY
        </motion.h2>
        <div className="row">
          <motion.div className="w-full flex  gap-4" {...fadeInProps}>
            <img src={memory1} className="w-full h-[400px] object-cover" alt="" />
            <img src={memory2} alt="" className="w-full h-[400px] object-cover" />
          </motion.div>
        </div>
      </section> */}

        <section className="section max-sm:pb-10">
          <motion.h2
            className="text-5xl pt-10 max-sm:px-2.5 max-sm:text-3xl max-sm:mt-4 max-sm:text-center"
            {...fadeInProps}
          >
            A MESSAGE FROM THE DIRECTOR
          </motion.h2>

          <div className="row">
            <motion.div
              className="w-full flex flex-col justify-center items-center gap-4 text-center p-10 bg-white max-sm:p-4 max-sm:py-6"
              {...fadeInProps}
            >
              <img
                src={director}
                className="w-[150px] rounded-full h-[150px] object-cover max-sm:h-full saturate-0"
                alt=""
              />
              <p className="w-[90%] accentfont relative max-sm:w-full">
                <BiSolidQuoteLeft />
                At Amravati Group, we believe that great spaces are not just
                built- they’re envisioned with purpose, care, and a deep
                commitment to quality. With every brick we lay, we strive to
                shape not just structures, but lifestyles that stand the test of
                time. We are here to build dreams - responsibly, passionately,
                and with unwavering integrity.
                <BiSolidQuoteRight className="absolute bottom-0 -right-5" />
              </p>
              <p className="">Mr. Hargobind Goyal | Director</p>
            </motion.div>
          </div>
        </section>

        {/* <section className="section themebg w-full">
        <motion.h2
          className="text-5xl p-20 pb-0 max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center"
          {...fadeInProps}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="row">
           <motion.div className="w-full" {...fadeInProps}>
            <FAQSection />
          </motion.div>
        </div>
      </section>
      
      <SendQuery video={video2} /> */}
      </div>
      <div className="animate-radial-bg-move">
        <Footer />
      </div>
    </>
  );
}
