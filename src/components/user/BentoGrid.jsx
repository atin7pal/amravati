import React, { useState } from "react";

// const images = [
//   {
//     src: bedroom,
//     alt: "Modern House",
//   },
//   {
//     src: bathroom,
//     alt: "Interior Design",
//   },
//   {
//     src: jacuzzi,
//     alt: "Real Estate Property",
//   },
//   {
//     src: living,
//     alt: "Luxury Villa",
//   },
//   {
//     src: outdoorseating,
//     alt: "Apartment View",
//   },
//   {
//     src: livingdining,
//     alt: "Architecture",
//   },
//   {
//     src: livingdining1,
//     alt: "Architecture",
//   },
//     {
//     src: outdoor1,
//     alt: "Architecture",
//   },
//     {
//     src: view,
//     alt: "Architecture",
//   }
// ];

export default function BentoImageGrid({images}) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {images?.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImg(img)}
            className={`relative cursor-pointer overflow-hidden shadow-md group ${
              i % 3 === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="h-[90vh] w-full overflow-hidden shadow-lg">
            <img src={selectedImg.src} alt={selectedImg.alt} className="object-contain w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
