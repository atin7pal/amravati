import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const CarouselSlides = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef(null);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalItems = images.length;

  // Maximum starting index for visible slides
  const maxIndex = totalItems - itemsPerSlide;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, [itemsPerSlide, maxIndex]);

  const slideWidthPercent = 100 / itemsPerSlide;

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Navigation */}
      <div className="flex gap-4 mb-4 justify-start">
        <button onClick={prevSlide} className="btn">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="btn">
          <FaArrowRight />
        </button>
      </div>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(images.length * 100) / itemsPerSlide}%`,
            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="px-2"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlides;
