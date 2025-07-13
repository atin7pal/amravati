import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

export function SendQuery({video}) {
  return (
    <>
      <section className="section relative min-h-[80vh] bg-gradient-to-b from-[#4B352A] via-[#4b352a8c] to-[#4B352A]">
        <video
          className="absolute -z-10 h-full top-0 left-0 w-full object-cover object-center"
          autoPlay
          muted
          loop
          src={video}
        ></video>
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="accentbg p-2 flex w-[40%] justify-between max-sm:w-[80%]">
            <input
              type="text"
              placeholder="Having Any Queries?"
              className="px-1 w-full mr-2"
            />
            <button className="btn">Send</button>
          </div>
        </div>
      </section>
    </>
  );
}
