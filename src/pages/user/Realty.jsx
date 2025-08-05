import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import realtyCover from "../../assets/project1/hills/image5.webp"; // Replace with your actual image
import project1 from "../../assets/project1/hills/hills1.png"; // Add realty project images
import project2 from "../../assets/project1/hills/hills5.webp";
import project3 from "../../assets/project1/hills/hills6.webp";
import project4 from "../../assets/project1/hills/hills9.webp";
import project5 from "../../assets/project1/hills/image5.webp";
import CarouselSlides from "../../components/user/CartouselSlides";
import logo from "../../assets/logofooter.svg";
import { Link } from "react-router-dom";

const Realty = () => {
  const features = [
    {
      title: "Modern Architecture:",
      description:
        "Clean lines, open spaces, and intelligent design that maximizes light, air, and utility.",
    },
    {
      title: "Prime Locations:",
      description:
        "Strategically chosen sites that offer the perfect mix of connectivity and tranquillity.",
    },
    {
      title: "Quality Craftsmanship:",
      description:
        "We use only premium materials and trusted construction techniques to ensure homes that stand the test of time.",
    },
    {
      title: "Future-Ready Living:",
      description:
        "From smart home features to energy-efficient systems, we build homes that are ready for tomorrow.",
    },
    {
      title: "Customer-Centric Approach:",
      description:
        "Transparent dealings, on-time delivery, and attention to detail define our work ethic and culture",
    },
    {
  title: "Innovative Community Spaces:",
  description:
    "Thoughtfully designed common areas that encourage interaction, recreation, and a strong sense of belonging.",
}
  ];

  const images = [project1, project2, project3, project4, project5];

  const [isFixed, setIsFixed] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom || 0;
      setIsFixed(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <section className="section themebg bgcolorfont">
        <div className="row relative">
          <img
            src={realtyCover}
            className="h-[45vh] w-full object-cover max-sm:h-[55vh]"
            alt="Amravati Realty"
          />
          <div className="w-full h-full bgcolorfont absolute top-0 left-0 bg-[#ece4d9]/70 flex justify-center items-center p-20 flex-col gap-4 max-sm:p-4">
            <h2 className=" text-4xl max-sm:text-3xl w-[80%] text-center max-sm:w-full font-semibold">
              AMRAVATI REALTY: BUILDING TOMORROW, TODAY
            </h2>
            <h2 className="text-xl text-center accentfont max-sm:text-lg">
              WHERE NATURE MEETS SOPHISTICATION, AND DESIGN MEETS PURPOSE
            </h2>
            <div ref={heroRef} className="h-[1px] w-full"></div>

            {/* Button bar */}
            <div
              className={`w-full ${
                isFixed
                  ? "fixed top-0 left-0 z-40 bg-[#ece4d9]/90 backdrop-blur-md shadow-md"
                  : "relative"
              } transition-all duration-300`}
            >
              <div className="px-8 py-4 flex gap-4 justify-center">
                <Link to="/completed">
                  <button className="smallbtn">COMPLETED PROJECTS</button>
                </Link>
                <Link to="/upcoming">
                  <button className="smallbtn">UPCOMING PROJECTS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section max-sm:pb-10">
        <div className="row gap-6">
          <div className="flex flex-col justify-center items-start w-full gap-4 themebg p-10">
            <h2 className="text-5xl max-sm:text-3xl">Who We Are</h2>

            <p className="accentfont text-lg leading-relaxed">
              At Amravati Realty, a proud vertical of the Amravati Group, we are
              redefining what it means to live beautifully. Rooted in vision and
              driven by innovation, we specialize in crafting modern,
              thoughtfully designed spaces across{" "}
              <span className="">Himachal Pradesh and Chandigarh</span> — where
              nature meets sophistication and design meets purpose.
            </p>
            <Link to="/about">
              <button className="btn">Know More</button>
            </Link>
          </div>
          <div className="flex w-full">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="rowpadding px-20 max-sm:px-4 bgcolorfont ">
          <div className="flex flex-col justify-center items-start text-start gap-8 max-sm:gap-4">
            {/* About */}

            <p className="accentfont text-xl text-center">
              Under the dynamic leadership of Mr. Hargobind Goyal, Director of
              Amravati Group, we build more than spaces—we build lifestyles. Our
              projects reflect today’s aspirations: contemporary architecture,
              intelligent space planning, sustainability, and harmony with the
              environment.
            </p>

            {/* What Sets Us Apart */}

            <div className="py-10 max-sm:py-6 w-full bgcolorfont">
              <div className="w-full">
                <h2 className="text-5xl max-sm:text-3xl mb-10 max-sm:mb-6 text-center">
                  What Sets Us Apart
                </h2>
                <ul className="accentfont text-lg grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="p-6 min-h-[120px] themebg flex justify-start items-start flex-col accentfont gap-2"
                    >
                      <span className="accentfont font-bold text-2xl">
                        {feature.title}
                      </span>{" "}
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Vision */}
            <div className="text-center bgcolorfont">
              <h2 className="text-5xl max-sm:text-3xl text-center mb-10 max-sm:mb-6">
                Our Vision
              </h2>
              <p className="accentfont text-lg leading-relaxed">
                Amravati Realty isn't just about building structures—it's about
                shaping communities, nurturing dreams, and creating spaces that
                feel like home the moment you walk in.
              </p>
              <p className="accentfont text-lg">
                Whether nestled in the serenity of the Himalayan foothills or in
                the urban pulse of Chandigarh, every home is designed to offer a
                perfect balance between luxury and comfort, elegance and
                function.
              </p>
            </div>

            {/* Explore Projects */}
            <div className="bgcolorfont">
              <h2 className="text-5xl max-sm:text-3xl text-center my-10 max-sm:my-6">
                At A Glimpse
              </h2>

              <CarouselSlides images={images} />
            </div>

            {/* Call to Action */}
            <div className="my-10 max-sm:my-6 max-sm:mb-6 bgcolorfont">
              <h2 className="text-5xl max-sm:text-3xl  mb-4 text-center">Let’s Build Together</h2>
              <p className="accentfont text-lg leading-relaxed text-center">
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
