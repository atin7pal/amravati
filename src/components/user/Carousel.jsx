import React, { useEffect, useState } from "react";
import home from "../../assets/project1/livingdining2.jpg";
import home1 from "../../assets/project1/jacuzzi.jpg";
import home2 from "../../assets/project1/outdoorseating.jpg";

const slides = [
  {
    id: 1,
    image: home,
  },
  {
    id: 2,
    image: home1,
  },
  {
    id: 3,
    image: home2,
  },
];

const Carousel = ({ images, height = "h-[400px]" }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [total]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto overflow-hidden">
      {/* Image Container */}
      <div className={`relative w-full ${height} max-sm:h-[250px]`}>
        {images?.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
