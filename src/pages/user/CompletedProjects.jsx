import React from "react";
import Navbar from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import completed from "../../assets/completed.jpg";
import ProjectExpandableCard from "../../components/user/ExpandableProject";

const CompletedProjects = () => {

const projects = [
  {
    name: "Amravati Hills",
    location: "Solan, Himachal Pradesh",
    tagline: "Luxury Hilltop Living at 5,000 ft",
    coverImage: "amravati_cover.jpg",
    brochureLink: "/pdfs/solan_brochure_singlepg.pdf", // Replace with actual public path or server link
    galleryImages: [
      "amravati_1.jpg",
      "amravati_2.jpg",
      "amravati_3.jpg"
    ],
    highlights: [
      "Sprawling across 145 bighas of scenic landscape",
      "Breathtaking Himalayan valley views",
      "Located just 45 km from Chandigarh",
      "Clubhouse with café, restaurant & wellness facilities",
      "Villas & apartments with modern architecture and luxury interiors",
      "Fully managed leasing with StayVista"
    ],
    offerings: [
      {
        type: "4 BHK Villas – The Den",
        size: "4250 sq ft",
        features: [
          "Jacuzzi, electric fireplace, and panoramic terrace views",
          "Fully furnished across 3 levels",
          "Covered parking, landscaped garden & dedicated servant room"
        ]
      },
      {
        type: "2 & 3 BHK Alpine Apartments",
        size: "1630 – 2550 sq ft",
        features: [
          "Stylish interiors with modular kitchen & smart tech",
          "Ready-to-move with penthouse options",
          "Spacious layouts designed for comfort & lifestyle"
        ]
      }
    ]
  }
];

  return (
    <>
      <Navbar />
      <section className="section h-[80vh] themebg">
        <div className="row">
          <div className="w-full flex flex-col justify-center items-start gap-4">
            <h2 className="text-5xl">Completed Projects</h2>
            <p className="accentfont text-lg w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos et nobis eos eaque, labore eligendi fuga sapiente
              voluptatem quas maiores debitis exercitationem dolorum provident
              quam cumque quibusdam numquam, architecto itaque.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img src={completed} className="h-[400px]" alt="" />
          </div>
        </div>
      </section>
      <section className="section themebg">
        <div className="row">
            <ProjectExpandableCard/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CompletedProjects;
