import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import ventures from "../../assets/ventures.jpg";
import VentureComponent from "../../components/user/VentureComponent";

const Ventures = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="row themebg">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <h2 className="text-5xl max-sm:text-4xl max-sm:text-3xl">OUR VENTURES</h2>
            <p className="w-[60%] accentfont max-sm:w-full max-sm:w-full">
              At Amravati Group, we are dedicated to fostering growth &
              innovation across multiple sectors. Together, these diverse
              ventures reflect our mission to enhance lives and strengthen our
              communities.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full section max-sm:h-full">
        <VentureComponent />
      </section>
      <Footer />
    </>
  );
};

export default Ventures;
