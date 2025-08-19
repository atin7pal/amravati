import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const CarouselFloor = ({
  images,
  heights = "max-sm:h-52 h-64",
  autoplay = true,
  interval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef(null);

  // Update items per slide on resize
  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalItems = images.length;
  const maxIndex = totalItems - itemsPerSlide; // ✅ stop when last full set is reached

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    intervalRef.current = setInterval(nextSlide, interval);
    return () => clearInterval(intervalRef.current);
  }, [autoplay, interval, maxIndex]);

  const slideWidthPercent = 100 / itemsPerSlide;

  return (
    <div
      className="relative mx-auto overflow-hidden w-full"
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() =>
        autoplay && (intervalRef.current = setInterval(nextSlide, interval))
      }
    >
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
            width: `${totalItems * slideWidthPercent}%`,
            transform: `translateX(-${currentSlide * slideWidthPercent}%)`,
          }}
        >
          {images.map(({ src, alt }, index) => (
            <div
              key={index}
              className="px-2 flex flex-col items-center w-full"
              style={{ width: `${slideWidthPercent}%` }}
            >
              <img
                src={src}
                alt={alt || `Slide ${index + 1}`}
                className={`w-full object-cover ${heights}`}
              />
              {alt && (
                <p className="text-sm text-center text-gray-700 mt-2 accentfont">
                  {alt}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselFloor;
