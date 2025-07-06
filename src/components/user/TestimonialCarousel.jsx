import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Buying a home was never this easy. Their team supported us throughout. Highly recommend!",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Great investment options and solid after-sales service. Truly professional approach.",
  },
  {
    id: 3,
    name: "Priya Kapoor",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "We found the perfect commercial space for our brand. Smooth experience from start to end.",
  },
  {
    id: 4,
    name: "Aman Verma",
    role: "Retail Buyer",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    quote:
      "Super smooth experience and great support team. I found my perfect store space.",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    quote: "Loved the property listings and personal support. A+ service!",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesPerView(1);
    } else if (width < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    if (current + slidesPerView >= testimonials.length) {
      setCurrent(0); // Reset to start
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(Math.max(testimonials.length - slidesPerView, 0));
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full mx-auto p-20 pb-0 pt-0">
      <div className="mb-20 flex justify-center items-start gap-4">
        <div className="flex flex-col gap-4 justify-center items-start">
        <h2 className="text-4xl text-start">What Our Clients Say</h2>
        <p className="w-[100%] accentfont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          atque placeat possimus commodi cumque incidunt asperiores ducimus
          officiis nam accusamus.
        </p>
</div>
        <div className="flex justify-end items-center gap-4 w-full">
        <button onClick={prevSlide} className="px-4 py-2 accentbg transition">
          &#10094; Prev
        </button>
        <button onClick={nextSlide} className="px-4 py-2 accentbg transition">
          Next &#10095;
        </button>
      </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / slidesPerView) * current}%)`,
            width: `${(100 / slidesPerView) * testimonials.length}%`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full px-4 flex-shrink-0"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="p-6 accentbg h-full flex flex-col items-start">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 mb-4"
                />
                <p className="mb-3 accentfont w-full">“{t.quote}”</p>
                <h4 className="text-lg w-full">{t.name}</h4>
                <p className="text-sm accentfont w-full">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      
    </div>
  );
};

export default TestimonialCarousel;
