import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const CarouselFloor = ({
  images,
  heights = "max-sm:h-52 h-64",
  autoplay = true,
  interval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);
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
  const maxIndex = totalItems - itemsPerSlide;

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
              className="px-2 flex flex-col items-center w-full cursor-pointer"
              style={{ width: `${slideWidthPercent}%` }}
              onClick={() => setSelectedImage({ src, alt })}
            >
              <img
                src={src}
                alt={alt || `Slide ${index + 1}`}
                className={`w-full object-cover ${heights}`}
              />
              {alt && (
                <p className="text-sm text-center text-gray-700 mt-2 accentfont"></p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoMdClose />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="max-w-4xl w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-none shadow-lg"
              />
              {selectedImage.alt && (
                <motion.p
                  className="text-center text-white mt-4 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedImage.alt}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselFloor;
