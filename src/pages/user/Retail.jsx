import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import retail from "../../assets/store/storelogo.jpeg";
import CarouselSlides from "../../components/user/CartouselSlides";
import store1 from "../../assets/store/store1.webp";
import store2 from "../../assets/store/store2.webp";
import store3 from "../../assets/store/store3.webp";
import store4 from "../../assets/store/store4.webp";
import { FaLocationDot } from "react-icons/fa6";

const Retail = () => {
  const images = [store1, store2, store3, store4];

  const features = [
    {
      title: "Curated Essentials:",
      description:
        "From grains, dairy, and dry groceries to snacks, beverages, cleaning supplies, and personal care — everything is handpicked to suit your daily needs.",
    },
    {
      title: "Staff That Cares:",
      description:
        "Our courteous team of over 30 trained staff ensures that every visit is smooth and enjoyable — from helping you find products to assisting at checkout.",
    },
    {
      title: "Value for Money:",
      description:
        "In-house deals, combo offers, and seasonal discounts ensure you get the best bang for your buck.",
    },
    {
      title: "Clean, Organised & Hygienic:",
      description:
        "All outlets are maintained with rigorous hygiene checks and sanitized regularly for a clean, clutter-free shopping experience.",
    },
    {
      title: "Easy Access & Parking:",
      description:
        "Strategically located stores with ample parking make your visits quick and hassle-free.",
    },
    {
      title: "Seamless Shopping Experience:",
      description:
        "From clearly marked aisles to quick billing counters, we make sure your shopping is easy, efficient, and hassle-free.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="section">
        <div className="row themebg">
          <div className="flex flex-col justify-center items-center text-center gap-4 max-sm:pb-10">
            <h2 className=" text-4xl max-sm:text-3xl max-sm:w-full">
              WELCOME TO EVERYDAY SUPERMARKET
            </h2>
            <p className="text-xl font-semibold accentfont max-sm:text-lg italic">
              'Your Friendly Neighbourhood Grocery Destination'
            </p>
          </div>
        </div>
      </section>

      <section className="section bgcolorfont pb-20 max-sm:pb-10">
        <div className="row">
          <div className="w-full">
            <img
              src={store2}
              className="h-[300px] w-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full h-full themebg min-h-[300px] flex justify-center items-start flex-col p-6 gap-4">
            <h2 className="text-5xl max-sm:text-3xl text-center">Our Story</h2>
            <p className="accentfont text-lg leading-relaxed">
              Everyday Supermarket was founded with the understanding that
              modern families need more than just groceries — they need{" "}
              <span className="font-bold accentfont">
                trust, convenience, and value
              </span>
              . We began our journey with a single thought: "Why not create a
              shopping space that feels like an extension of your own kitchen —
              always stocked, always welcoming, and always budget-friendly?"
            </p>
          </div>
        </div>

        <div className="rowpadding px-20 max-sm:px-4">
          <div className="flex flex-col justify-center items-start text-start gap-8">
            {/* Our Story */}

            {/* What Sets Us Apart */}
            <div className="rowpadding">
              <div>
                <h2 className="text-5xl max-sm:text-3xl text-center mb-10 max-sm:mt-6 max-sm:mb-6">
                  What Sets Us Apart
                </h2>
                <ul className="accentfont text-lg grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`p-4 flex flex-col gap-2 accentfont ${
                        index % 2 === 0 ? "themebg" : "themebg" // different bg for even items
                      }`}
                    >
                      <span className="font-bold accentfont text-xl">
                        {feature.title}
                      </span>
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <section className="section">
              <div className="py-10 max-sm:py-4 w-full max-sm:px-0">
                <CarouselSlides images={images} />
              </div>
            </section>

            {/* Looking Ahead */}
            <h2 className="text-5xl max-sm:text-3xl  pb-6 text-center max-sm:pt-2 max-sm:pb-0 w-full">
              Looking Ahead
            </h2>

            <div className="flex gap-4 w-full max-sm:flex-col">
              <div className="themebg p-6 text-start w-full flex justify-center items-center">
                <p className="accentfont text-lg mt-4">
                  With plans to expand into{" "}
                  <span className="font-bold accentfont">
                    online ordering, home delivery, and customer loyalty
                    programs
                  </span>
                  , Everyday Supermarket is evolving to meet the needs of modern
                  households while staying rooted in the values that built our
                  foundation.
                </p>
              </div>

              <div className="w-full brownbg p-6 flex justify-center items-center">
                <p className="accentfont text-lg leading-relaxed">
                  We’re not just building a chain of supermarkets — we’re
                  building a{" "}
                  <span className="font-bold accentfont">community brand</span>.
                  A name that families can trust for consistency, quality, and
                  care.
                </p>
              </div>
            </div>

            {/* Visit Us Today */}
          </div>
        </div>
      </section>
      <div className="text-center themebg pb-10 px-4">
        <h2 className="text-5xl max-sm:text-3xl text-center py-10 max-sm:py-6">
          Visit Us Today
        </h2>

        <p className="accentfont text-lg leading-relaxed">
          Whether you’re in{" "}
          <span className="font-bold accentfont">Panchkula</span>, or driving
          through{" "}
          <span className="font-bold accentfont">Baddi’s bustling markets</span>
          , there’s an Everyday Supermarket nearby — waiting to serve you with a
          smile.
        </p>

        <p className="accentfont text-lg mt-4 italic">
          Stop by and discover why we’re more than just a store — we’re a part
          of your everyday.
        </p>

        <div className="p-6 bg-white mt-8 w-[90%] mx-auto max-sm:w-full">
          <h2 className="text-3xl max-sm:text-3xl text-center">
            We Are Located At
          </h2>
          <ul className="space-y-2 mt-4">
            <li className="flex justify-center items-center gap-2">
              <FaLocationDot/>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SCO+60,+Sector+-+11,+Sector+11,+Panchkula,+Haryana+134112"
                target="_blank"
                rel="noopener noreferrer"
                className="bgcolorfont accentfont hover:underline"
              >
                SCO 60, Sector - 11, Sector 11, Panchkula, Haryana 134112
              </a>
            </li>
            <li className="flex justify-center items-center gap-2">
              <FaLocationDot/>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Inox+Nh+22+Mall,+NH+22+Mall+Ground+floor,+Amravati+Enclave,+Amravati,+Haryana+134107"
                target="_blank"
                rel="noopener noreferrer"
                className="bgcolorfont accentfont hover:underline"
              >
                Inox Nh 22 Mall, NH 22 Mall Ground floor, Amravati Enclave,
                Amravati, Haryana 134107
              </a>
            </li>

              <li className="flex justify-center items-center gap-2">
              <FaLocationDot/>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.9921065222607!2d76.80901007504592!3d30.942784975451808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff5000b9fa7ed%3A0xd62ee042b2ca7ab5!2sEveryday%20supermarket!5e0!3m2!1sen!2sin!4v1756557877331!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"  
                className="bgcolorfont accentfont hover:underline"
              >
                Housing Board Rd, Baddi, Himachal Pradesh 173205
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Retail;
