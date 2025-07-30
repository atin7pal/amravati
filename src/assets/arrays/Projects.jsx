import hillcover from "../project1/hills/image1.webp";
import image1 from "../project1/hills/hills1.webp";
import image2 from "../project1/hills/hills2.webp";
import image3 from "../project1/image6.jpg";
import image4 from "../project1/image7.jpg";
import image5 from "../project1/hills/hills5.webp";
import image6 from "../project1/hills/hills6.webp";
import image7 from "../project1/hills/hills12.webp";
import image8 from "../project1/hills/hills8.webp";
import image9 from "../project1/hills/hills9.webp";
import baddi1 from "../projectbaddi/baddi1.webp";
import baddi2 from "../projectbaddi/baddi2.webp";
import baddi3 from "../projectbaddi/baddi3.webp";
import baddi4 from "../projectbaddi/baddi4.webp";

export const Projects = [
  {
    name: "THE DEN - AMRAVATI HILLS",
    location: "Solan, Himachal Pradesh",
    tagline: "Luxury Hilltop Living at 5,000 ft",
    coverImage: hillcover,
    brochureLink: "/pdfs/solan_brochure_singlepg.pdf",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio deserunt voluptatum culpa ullam dolores alias cum non, porro, saepe autem dolorem laboriosam aperiam cumque qui tempore odit reprehenderit, asperiores iusto?",
    galleryImages: [
      {
        src: image1,
        alt: "image 1",
      },
      {
        src: image2,
        alt: "image 1",
      },
      {
        src: image3,
        alt: "image 1",
      },
      {
        src: image9,
        alt: "image 1",
      },
      {
        src: image4,
        alt: "image 1",
      },
      {
        src: image5,
        alt: "image 1",
      },
      {
        src: image6,
        alt: "image 1",
      },
      {
        src: image7,
        alt: "image 1",
      },
      {
        src: image8,
        alt: "image 8",
      },
    ],
    highlights: [
      "Sprawling across 145 bighas of scenic landscape",
      "Breathtaking Himalayan valley views",
      "Located just 45 km from Chandigarh",
      "Clubhouse with café, restaurant & wellness facilities",
      "Villas & apartments with modern architecture and luxury interiors",
      "Fully managed leasing with StayVista",
    ],
    offerings: [
      {
        type: "4 BHK Villas – The Den",
        size: "4250 sq ft",
        features: [
          "Jacuzzi, electric fireplace, and panoramic terrace views",
          "Fully furnished across 3 levels",
          "Covered parking, landscaped garden & dedicated servant room",
        ],
      },
    ],
  },
  {
    name: "AMRAVATI APPARTMENTS",
    location: "Baddi, Himachal Pradesh",
    tagline: "Premium Appartments With All The Amenities",
    coverImage: hillcover,
    brochureLink: "/pdfs/solan_brochure_singlepg.pdf",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio deserunt voluptatum culpa ullam dolores alias cum non, porro, saepe autem dolorem laboriosam aperiam cumque qui tempore odit reprehenderit, asperiores iusto?",
    galleryImages: [
      {
        src: baddi1,
        alt: "image 1",
      },
      {
        src: baddi2,
        alt: "image 1",
      },
      {
        src: baddi3,
        alt: "image 1",
      },
      {
        src: baddi4,
        alt: "image 1",
      },
    ],
    highlights: [
      "Perfect Location in the city",
      "Event Space, Banquet",
      "13000 sqft Clubhouse with cafe, restaurant & wellness facilities",
      "Villas & apartments with premium interiors",
      "School Amravati Vidyalya 27000 sqft",
    ],
    offerings: [
      {
        type: "Studio Appartments - Lilly 320 Units",
        size: "676 sqft",
      },
      {
        type: "2 Bedroom + Kitchen (Open Plan Studio) - Jasmine 336 Units",
        size: "854 sqft",
      },
      {
        type: "2 BHK Appartment - Daisy",
        size: "1137 sqft",
      },
      {
        type: "3 BHK Appartment - Zynia 96 Units",
        size: "1137 sqft",
      },
      {
        type: "3 BHK Appartment - Sunflower 96 Units",
        size: "1490 sqft",
      },
      {
        type: "Amravati Eco Homes Phase-1 - 40 Units",
        size: "1000 sqft",
      },
      {
        type: "Commercial Units - 12 units",
        size: "2800 sqft (each)",
      },
    ],
  },
];
