import React, { useState } from "react";
import home from '../../assets/home1.jpg';

const slides = [
  {
    id: 1,
    image: home,
    title: "Modern Villa",
    description: "Experience luxury living with scenic views.",
  },
  {
    id: 2,
    image: home,
    title: "City Apartment",
    description: "Stay in the heart of the city with easy access to everything.",
  },
  {
    id: 3,
    image: home,
    title: "Commercial Space",
    description: "Perfect for your business expansion.",
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
      <div className="w-full p-6 px-10 flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl">
            {slides[current].title}
          </h2>
          <p className="mt-2 accentfont text-gray-600 text-sm md:text-base">
            {slides[current].description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-start gap-6 mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 themebg accentfont text-sm"
          >
            &#10094; Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 themebg accentfont text-sm"
          >
            Next &#10095;
          </button>
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
