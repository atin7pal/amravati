import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import aboutbanner from "../../assets/project1/outdoor1.jpg";
import aboutbanner1 from "../../assets/project1/livingdining2.jpg";
import aboutbanner2 from "../../assets/project1/view.jpg";
import floral from "../../assets/floral.jpg";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import map from "../../assets/tropo.jpg";
import TeamSection from "../../components/user/TeamSection";
import FAQSection from "../../components/user/FAQSection";
import { SendQuery } from "../../components/user/SendQuery";
import video2 from "../../assets/video2.mp4";
import BentoImageGrid from "../../components/user/BentoGrid";
import { Helmet } from "react-helmet-async";

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
      <section className="section h-[80vh] themebg max-sm:min-h-[100vh]">
        <div className="row h-full">
          <motion.div
            className="w-full flex flex-col justify-center items-start max-sm:items-center max-sm:text-center gap-4"
            {...fadeInProps}
          >
            <h2 className="text-xl brownbg px-2 py-1">
              About Us
            </h2>
            <h2 className="text-5xl">Amaravati Group</h2>
            <p className="w-[80%] accentfont max-sm:w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quidem, obcaecati optio delectus alias hic ipsum illum saepe earum expedita possimus? Deleniti, quos laboriosam. Nam provident maxime nobis perferendis rerum!
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

      <section className="section h-full">
        <div className="row">
          <motion.div
            className="w-full flex flex-col justify-center items-center gap-4"
            {...fadeInProps}
          >
            <div className="w-full h-full">
              <img
                src={aboutbanner1}
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <div className="flex w-full gap-4">
              <img
                src={aboutbanner}
                className="w-full h-[20vh] object-cover"
                alt=""
              />
              <img
                src={aboutbanner2}
                className="w-full h-[20vh] object-cover"
                alt=""
              />
              <div className="w-full h-[20vh] brownbg"></div>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-[50vh] max-sm:h-[100%] px-5 flex gap-4 flex-col"
            {...fadeInProps}
          >
            <h2 className="text-5xl max-sm:p-4 max-sm:pt-10 max-sm:text-3xl max-sm:text-center">
              Welcome
            </h2>
            <p className="accentfont">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
              aspernatur autem maxime architecto iure tempore laudantium, eius
              quas reiciendis laborum perferendis possimus iusto sed illum
              obcaecati dolorem odio eum doloribus maiores pariatur placeat vel.
              Atque molestiae nostrum fugiat id labore ipsa facere, porro eum
              modi obcaecati, ullam esse, quae in.
            </p>
            <br />
            <p className="accentfont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nulla velit a aperiam? Voluptatibus amet illum reprehenderit illo
              quasi ducimus!
            </p>
            <button className="btn w-[190px]">Contact Us Now</button>
          </motion.div>
        </div>
      </section>

      <section
        className="section bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(#fff,#ffffffe0, #ece4d9),url(${floral})`,
        }}
      >
        <div className="flex p-20 pt-10 max-sm:flex-col max-sm:p-4">
          <motion.div
            className="w-full h-full flex flex-col text-center gap-4 justify-center items-center p-20 max-sm:p-4"
            {...fadeInProps}
          >
            <h2 className="text-5xl">Our Vision</h2>
            <p className="accentfont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              suscipit maiores itaque laborum, eum quasi, cumque optio expedita,
              sunt saepe voluptate debitis distinctio blanditiis ducimus.
              Repudiandae deserunt ab soluta blanditiis.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-full flex flex-col text-center gap-4 justify-center items-center bg-white p-20 shadow-lg shadow-[#ece4d9] max-sm:p-4"
            {...fadeInProps}
          >
            <h2 className="text-5xl">Our Motive</h2>
            <p className="accentfont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              nobis illo rerum facere id magnam cumque tenetur ullam animi nemo
              accusantium odit debitis ab eveniet! Dolore quos qui provident
              necessitatibus.
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
      <section
        style={{
          backgroundImage: `linear-gradient(to right, #fff, #fff, #fffffff0),url(${map})`,
        }}
        className="section bg-no-repeat bg-center bg-cover"
      >
        <motion.h2
          className="text-5xl p-20 pb-0 max-sm:p-4 max-sm:text-3xl max-sm:text-center"
          {...fadeInProps}
        >
          Meet The People
        </motion.h2>
        <div className="row">
          <motion.div {...fadeInProps}>
            <TeamSection />
          </motion.div>
        </div>
      </section>

        <section className="section themebg">
        <motion.h2
          className="text-5xl pt-10 max-sm:p-4 max-sm:text-3xl max-sm:text-center"
          {...fadeInProps}
        >
          A Message From The Director
        </motion.h2>
        <div className="row">
          <motion.div
            className="w-full flex flex-col justify-center items-center gap-4 text-center p-10 bg-white"
            {...fadeInProps}
          >
            <img
              src={aboutbanner1}
              className="w-[100px] rounded-full h-[100px] object-cover"
              alt=""
            />
            <p className="w-[90%] accentfont relative">
              <BiSolidQuoteLeft />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              maxime omnis, laborum suscipit consectetur voluptates eligendi
              dolorum nobis ab labore, doloribus sapiente est error, ratione
              nihil voluptatum pariatur consequuntur quis blanditiis unde
              temporibus. Expedita atque eum quo nulla sed, ullam, optio aliquam
              ut ducimus magnam et cum illo dignissimos cumque autem aliquid
              maiores deleniti beatae amet animi, voluptatibus accusantium.
              Obcaecati harum voluptatibus sed necessitatibus excepturi velit
              assumenda quibusdam provident.{" "}
              <BiSolidQuoteRight className="absolute bottom-0 right-0" />
            </p>
            <p className="">Mr. Amaravati | Managing Director</p>
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
      <Footer />
    </>
  );
}
