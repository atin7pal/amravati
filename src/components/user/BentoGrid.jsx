import React, { useState } from "react";
import bedroom from '../../assets/project1/bed1.jpg'
import bathroom from '../../assets/project1/bathroom.jpg'
import jacuzzi from '../../assets/project1/jacuzzi.jpg'
import living from '../../assets/project1/living.jpg'
import outdoorseating from '../../assets/project1/outdoorseating.jpg'
import livingdining from '../../assets/project1/livingdining.jpg'
import livingdining1 from '../../assets/project1/livingdining2.jpg'
import livingdining2 from '../../assets/project1/libvingdiining2.jpg'
import outdoor from '../../assets/project1/outdoor.jpg'
import outdoor1 from '../../assets/project1/outdoor1.jpg'
import view from '../../assets/project1/view.jpg'

const images = [
  {
    src: bedroom,
    alt: "Modern House",
  },
  {
    src: bathroom,
    alt: "Interior Design",
  },
  {
    src: jacuzzi,
    alt: "Real Estate Property",
  },
  {
    src: living,
    alt: "Luxury Villa",
  },
  {
    src: outdoorseating,
    alt: "Apartment View",
  },
  {
    src: livingdining,
    alt: "Architecture",
  },
  {
    src: livingdining1,
    alt: "Architecture",
  },
    {
    src: outdoor1,
    alt: "Architecture",
  },
    {
    src: view,
    alt: "Architecture",
  }
];

export default function BentoImageGrid() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImg(img)}
            className={`relative cursor-pointer overflow-hidden shadow-md group ${
              i % 3 === 0 ? "row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden shadow-lg">
            <img src={selectedImg.src} alt={selectedImg.alt} className="object-contain w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
