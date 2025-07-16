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
        <title>Contact Us | Amaravati Group</title>
      </Helmet>

    <Helmet>
        <title>Home | Amaravati Group</title>
      </Helmet>

      <Navbar />
      <section className="section themebg h-[80vh]">
        <div className="row">
          <motion.div
            className="w-full text-md h-full flex justify-around items-start flex-col gap-4"
            {...fadeInProps}
          >
            <h2 className="text-4xl mb-2">Contact Us</h2>
            <div className="text-sm py-2 w-[90%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              eveniet nemo inventore?
            </div>
            <div className="flex justify-center items-start flex-col gap-2">
              <div className="flex justify-center items-center gap-2">
                <BiMailSend /> <p className="accentfont">info@amaravati.com</p>
              </div>
              <div className="flex justify-center items-center gap-2 accentfont">
                <BiPhone /> +91 999999999
              </div>

              <div className="flex justify-center items-center gap-2">
                <BiBuilding /> <p className="accentfont">Sector 2 Panchkula</p>
              </div>
            </div>
            <div className="text-sm flex flex-col justify-center items-center gap-4 w-full mt-2">
              <div className="flex flex-col justify-center items-start w-full gap-2">
                <BiSupport className="text-2xl" />
                <h2 className="text-xl">Enquiry</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="flex flex-col justify-center gap-2 items-start w-full">
                <BiMoney className="text-2xl" />
                <h2 className="text-xl">Sales</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.7922325037102!2d76.9072783750383!3d30.752337084685884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9223bfffffff%3A0x10e24c8c02899a72!2sAmravati%20Vidyalaya!5e0!3m2!1sen!2sin!4v1752346418292!5m2!1sen!2sin"
              width="100%"
              height="400px"
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            className="w-full h-[450px] flex flex-col justify-center items-start gap-4 px-4"
            {...fadeInProps}
          >
            <h2 className="text-lg accentfont">Our Location</h2>
            <h2 className="text-4xl">Connecting Near And Far</h2>
            <span className="text-xl accentfont"> Headquartered at </span>
            <p className="accentfont">
              Amaravati complex <br />
              Sector 2 <br />
              Panchkula <br />
              Haryana <br />
            </p>
            <button className="btn">About Us</button>
          </motion.div>
        </div>
      </section>

      <section className="section themebg">
        <motion.h2
          className="text-4xl p-20 pb-0 max-sm:p-4 max-sm:py-10 max-sm:text-3xl max-sm:text-center"
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
      <Footer />
    </>
  );
}
