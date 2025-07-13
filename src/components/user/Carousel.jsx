import React, { useState } from "react";
import home from "../../assets/project1/livingdining2.jpg";
import home1 from '../../assets/project1/jacuzzi.jpg';
import home2 from '../../assets/project1/outdoorseating.jpg'
import brochure from "../../assets/brochure.pdf"; // Make sure this path is correct

const slides = [
  {
    id: 1,
    image: home,
    title: "Modern Villa",
    description:
      "Immerse yourself in the elegance of modern architecture surrounded by nature. This villa offers spacious interiors, panoramic views, and the finest amenities for luxurious living.",
  },
  {
    id: 2,
    image: home1,
    title: "Serene Views",
    description:
      "Located in the bustling heart of the city, this apartment blends convenience with comfort. With nearby transit, shopping, and dining, experience vibrant urban life with ease.",
  },
  {
    id: 3,
    image: home2,
    title: "More Views",
    description:
      "Designed for growth, this commercial property offers high visibility, foot traffic, and customizable layouts. Ideal for offices, retail, or startups looking to scale efficiently.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-72 md:h-96">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Content & Controls */}
      <div className="w-full p-6 px-10 flex flex-col justify-between gap-4 max-sm:px-4">
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="text-2xl md:text-3xl starfont">{slides[current].title}</h2>
          <p className="mt-0 accentfont text-sm md:text-base">
            {slides[current].description}
          </p>

        </div>

        {/* Navigation Buttons */}
        <div className="flex items-start flex-col justify-center gap-4 mt-4">

            <a
            href={brochure}
            download="Project-Brochure.pdf"
            className="btn"
          >
            Download Brochure
          </a>
          <div className="flex gap-10">
          <button
            onClick={prevSlide}
            className="btn"
          >
            &#10094; Prev
          </button>
          <button
            onClick={nextSlide}
            className="btn"
          >
            Next &#10095;
          </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "themebg" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
