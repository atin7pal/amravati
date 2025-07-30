import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import realtyCover from "../../assets/project1/hills/image5.webp"; // Replace with your actual image
import project1 from "../../assets/project1/hills/hills1.webp"; // Add realty project images
import project2 from "../../assets/project1/hills/hills5.webp";
import project3 from "../../assets/project1/hills/hills6.webp";
import project4 from "../../assets/project1/hills/hills9.webp";
import project5 from "../../assets/project1/hills/image5.webp";
import CarouselSlides from "../../components/user/CartouselSlides";
import { Link } from "react-router-dom";

const Realty = () => {
  const images = [project1, project2, project3, project4, project5];

  return (
    <>
      <Navbar />
      <section className="section themebg">
        <div className="row relative">
          <img
            src={realtyCover}
            className="h-[45vh] w-full object-cover"
            alt="Amravati Realty"
          />
          <div className="w-full h-full bgcolorfont absolute top-0 left-0 bg-[#ece4d9]/70 flex justify-center items-center p-20 flex-col gap-4">
            <h2 className="text-4xl w-[80%] text-center">
              AMRAVATI REALTY: BUILDING TOMORROW, TODAY
            </h2>
            <h2 className="text-xl text-center accentfont">
              WHERE NATURE MEETS SOPHISTICATION, AND DESIGN MEETS PURPOSE
            </h2>
          </div>
        </div>
      </section>
      <div className="flex p-5 px-20 gap-4 items-center justify-start sticky top-0 bg-white z-30 border-b border-gray-200 border-t">
        <h2 className="text-3xl">View Our</h2>
        <Link to="/completed">
          <button className="btn">COMPLETED PROJECTS</button>
        </Link>
        <Link to="/upcoming">
          <button className="btn">UPCOMING PROJECTS</button>
        </Link>
      </div>
      <section className="section">
        <div className="row">
          <div className="flex flex-col justify-center items-start text-start gap-8">
            {/* About */}
            <div>
              <h2 className="text-3xl  mb-4">Who We Are</h2>
              <p className="accentfont text-lg leading-relaxed">
                At <span className="font-bold">Amravati Realty</span>, a proud
                vertical of the Amravati Group, we are redefining what it means
                to live beautifully. Rooted in vision and driven by innovation,
                we specialize in crafting modern, thoughtfully designed spaces
                across <span className="">Himachal Pradesh and Chandigarh</span>{" "}
                — where nature meets sophistication and design meets purpose.
              </p>
              <p className="accentfont text-lg mt-4">
                Under the dynamic leadership of{" "}
                <span className="font-bold">Mr. Hargobind Goyal</span>, Director
                of Amravati Group, we build more than spaces—we build
                lifestyles. Our projects reflect today’s aspirations:
                contemporary architecture, intelligent space planning,
                sustainability, and harmony with the environment.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div>
              <h2 className="text-3xl  mb-4">What Sets Us Apart</h2>
              <ul className="accentfont list-disc pl-6 text-lg space-y-3">
                <li>
                  <span className="font-bold accentfont">
                    Modern Architecture:
                  </span>{" "}
                  Clean lines, open spaces, and intelligent design that
                  maximizes light, air, and utility.
                </li>
                <li>
                  <span className="font-bold accentfont">Prime Locations:</span>{" "}
                  Strategically chosen sites that offer the perfect mix of
                  connectivity and tranquillity.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Quality Craftsmanship:
                  </span>{" "}
                  We use only premium materials and trusted construction
                  techniques to ensure homes that stand the test of time.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Future-Ready Living:
                  </span>{" "}
                  From smart home features to energy-efficient systems, we build
                  homes that are ready for tomorrow.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Customer-Centric Approach:
                  </span>{" "}
                  Transparent dealings, on-time delivery, and attention to
                  detail define our work ethic.
                </li>
              </ul>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-3xl  mb-4">Our Vision</h2>
              <p className="accentfont text-lg leading-relaxed">
                Amravati Realty isn't just about building structures—it's about
                shaping communities, nurturing dreams, and creating spaces that
                feel like home the moment you walk in.
              </p>
              <p className="accentfont text-lg mt-4">
                Whether nestled in the serenity of the{" "}
                <span className="font-bold">Himalayan foothills</span> or in the
                urban pulse of <span className="font-bold">Chandigarh</span>,
                every home is designed to offer a perfect balance between{" "}
                <span className="">
                  luxury and comfort, elegance and function.
                </span>
              </p>
            </div>

            {/* Explore Projects */}
            <div>
              <h2 className="text-3xl  mb-4">Explore Projects</h2>
              <p className="accentfont text-lg mb-4">
                Browse through some of our signature developments and envision
                your future with Amravati Realty.
              </p>
              <CarouselSlides images={images} />
            </div>

            {/* Call to Action */}
            <div>
              <h2 className="text-3xl  mb-4">Let’s Build Together</h2>
              <p className="accentfont text-lg leading-relaxed">
                Take the first step toward{" "}
                <span className="font-bold accentfont">
                  the home you've always imagined
                </span>
                . Contact us today to learn more, schedule a site visit, or
                explore investment opportunities with Amravati Realty.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Realty;
