import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import retail from "../../assets/store/storelogo.jpeg";
import CarouselSlides from "../../components/user/CartouselSlides";
import store1 from "../../assets/store/store1.webp";
import store2 from "../../assets/store/store2.webp";
import store3 from "../../assets/store/store3.webp";
import store4 from "../../assets/store/store4.webp";

const Retail = () => {
  const images = [store1, store2, store3, store4];

  return (
    <>
      <Navbar />
      <section className="section themebg">
        <div className="row relative">
          <img
            src={retail}
            className="h-[45vh] w-full object-cover"
            alt="vidyalya"
          />
          <div className="w-full h-full bgcolorfont absolute top-0 left-0 bg-[#ece4d9]/70 flex justify-center items-center p-20 flex-col gap-4 max-sm:p-4">
            <h2 className=" text-4xl max-sm:text-3xl w-[80%] text-center max-sm:w-full font-semibold">
              WELCOME TO EVERYDAY SUPERMARKET
            </h2>
            <h2 className="text-xl font-semibold accentfont max-sm:text-lg text-center">
              YOUR FRIENDLY NEIGHBOURHOOD GROCERY DESTINATION
            </h2>
          </div>
        </div>
      </section>

      <section className="section bgcolorfont max-sm:pb-10">
        <div className="row">
          <div className="flex flex-col justify-center items-start text-start gap-8">
            {/* Our Story */}
            <div>
              <h2 className="text-3xl max-sm:text-3xl mb-4">Our Story</h2>
              <p className="accentfont text-lg leading-relaxed">
                Everyday Supermarket was founded with the understanding that
                modern families need more than just groceries — they need{" "}
                <span className="font-bold accentfont">
                  trust, convenience, and value
                </span>
                . We began our journey with a single thought:{" "}
                <span className="">
                  "Why not create a shopping space that feels like an extension
                  of your own kitchen — always stocked, always welcoming, and
                  always budget-friendly?"
                </span>
              </p>
              <p className="accentfont text-lg mt-4">
                From the very beginning, our mission has been clear:{" "}
                <span className="font-bold accentfont">
                  To provide quality essentials for everyday life, with
                  unmatched service and honest pricing.
                </span>{" "}
                With each new outlet, we’ve grown not just in size, but in
                heart. Every shelf is thoughtfully curated, every product
                carefully selected, and every customer valued like family.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div>
              <h2 className="text-3xl  mb-4">What Sets Us Apart</h2>
              <ul className="accentfont list-disc pl-6 text-lg space-y-3">
                <li>
                  <span className="font-bold accentfont">
                    Curated Essentials:
                  </span>{" "}
                  From grains, dairy, and dry groceries to snacks, beverages,
                  cleaning supplies, and personal care — everything is
                  handpicked to suit your daily needs.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Staff That Cares:
                  </span>{" "}
                  Our courteous team of over 30 trained staff ensures that every
                  visit is smooth and enjoyable — from helping you find products
                  to assisting at checkout.
                </li>
                <li>
                  <span className="font-bold accentfont">Value for Money:</span>{" "}
                  In-house deals, combo offers, and seasonal discounts ensure
                  you get the best bang for your buck.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Clean, Organised & Hygienic:
                  </span>{" "}
                  All outlets are maintained with rigorous hygiene checks and
                  sanitized regularly for a clean, clutter-free shopping
                  experience.
                </li>
                <li>
                  <span className="font-bold accentfont">
                    Easy Access & Parking:
                  </span>{" "}
                  Strategically located stores with ample parking make your
                  visits quick and hassle-free.
                </li>
              </ul>
            </div>

            {/* Looking Ahead */}
            <div>
              <h2 className="text-3xl  mb-4">Looking Ahead</h2>
              <p className="accentfont text-lg leading-relaxed">
                We’re not just building a chain of supermarkets — we’re building
                a <span className="font-bold accentfont">community brand</span>.
                A name that families can trust for consistency, quality, and
                care.
              </p>
              <p className="accentfont text-lg mt-4">
                With plans to expand into{" "}
                <span className="font-bold accentfont">
                  online ordering, home delivery, and customer loyalty programs
                </span>
                , Everyday Supermarket is evolving to meet the needs of modern
                households while staying rooted in the values that built our
                foundation.
              </p>
            </div>

            {/* Visit Us Today */}
            <div>
              <h2 className="text-3xl  mb-4">Visit Us Today</h2>
              <p className="accentfont text-lg leading-relaxed">
                Whether you’re in{" "}
                <span className="font-bold accentfont">
                  Sector 11 or Sector 20 of Panchkula
                </span>
                , or driving through{" "}
                <span className="font-bold accentfont">
                  Baddi’s bustling markets
                </span>
                , there’s an Everyday Supermarket nearby — waiting to serve you
                with a smile.
              </p>
              <p className="accentfont text-lg mt-4 italic ">
                Stop by and discover why we’re more than just a store — we’re a
                part of your everyday.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="p-20 py-10 w-full max-sm:px-4 max-sm:py-10">
          <CarouselSlides images={images} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Retail;
