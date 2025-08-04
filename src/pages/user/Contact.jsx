import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import {
  BiBuilding,
  BiMailSend,
  BiMoney,
  BiPhone,
  BiSupport,
} from "react-icons/bi";
import ContactForm from "../../components/user/ContactForm";
import FAQSection from "../../components/user/FAQSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export function Contact(props) {
  const fadeInProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <Helmet>
        <title>Get In Touch | Amaravati Group</title>
      </Helmet>
      <Navbar />
      <section className="section themebg max-sm:h-full">
        <div className="row">
          <motion.div
            className="w-full text-md h-full flex justify-around items-start flex-col gap-4 max-sm:gap-3"
            {...fadeInProps}
          >
            <h2 className="text-5xl mb-2 max-sm:text-3xl max-sm:mb-1">
              CONTACT US
            </h2>
            <div className="py-2 w-[90%]">
              For questions about property listings, investments, or quotations,
              please contact us. Our knowledgeable team will respond promptly to
              assist with your real estate needs, whether for residential,
              commercial, or project developments.
            </div>
            <div className="flex justify-center items-start flex-col gap-2">
              <div className="flex justify-center items-center gap-2">
                <BiMailSend /> <p className="accentfont">info@amaravati.in</p>
              </div>
              <div className="flex justify-center items-center gap-2 accentfont">
                <BiPhone /> +91-7429299696
              </div>

              <div className="flex justify-center items-start gap-2 accentfont">
                <FaLocationDot />
                Amravati Group, SCO 10-11, Sector 2 <br />
                Panchkula, Haryana (134109)
              </div>
            </div>
            <div className="text-sm flex flex-col justify-center items-center gap-4 w-full mt-2"></div>
          </motion.div>

          <motion.div className="w-full" {...fadeInProps}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="row">
          <motion.div className="w-full" {...fadeInProps}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.772183349509!2d76.86136467985679!3d30.6966853219063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f930011b30a4b%3A0x6f0535d373a1e141!2sAmravati%20Group!5e0!3m2!1sen!2sin!4v1754134426207!5m2!1sen!2sin"
              width="100%"
              height="400px"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* <section className="section themebg">
        <motion.h2
          className="text-5xl p-20 pb-0 max-sm:p-4 max-sm:py-10 max-sm:text-3xl max-sm:text-center"
          {...fadeInProps}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="row">
          <motion.div className="w-full" {...fadeInProps}>
            <FAQSection />
          </motion.div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
