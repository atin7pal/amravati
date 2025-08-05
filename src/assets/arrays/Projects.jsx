import hillcover from "../project1/hills/image1.webp";
import image1 from "../project1/hills/hills1.png";
import image2 from "../project1/hills/hills2.webp";
import image3 from "../project1/hills/hills14.webp";
import image4 from "../project1/hills/hills12.webp";
import image5 from "../project1/hills/hills5.webp";
import image6 from "../project1/hills/hills6.webp";
import image7 from "../project1/hills/hills10.webp";
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
      "Welcome to The Den, where elegance meets comfort in a stunning 4-bedroom home ideal for families and discerning buyers. With a spacious layout and modern amenities, this property offers everything you need for an exquisite lifestyle. Spread across 3 floors plus a terrace with balconies stretching upto 8 ft wide with an uninteruppted view of the himalayan valley. Exclusive tie up with StayVista for property and lease management. Limited units only.",
    galleryImages: [
      {
        src: image1,
        alt: "image 1",
      },
      {
        src: image3,
        alt: "image 1",
      },
      {
        src: image2,
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
        name: "THE DEN",
        type: "4 BHK Villas",
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
    name: "AMRAVATI APARTMENTS",
    location: "Baddi, Himachal Pradesh",
    tagline: "Premium Apartments With All The Amenities",
    coverImage: hillcover,
    brochureLink: "/pdfs/solan_brochure_singlepg.pdf",
    description:
      "Amravati Apartments is situated adjoining to Housing Board, Phase III, Baddi at a beautiful location in the surroundings of hills. Amravati Apartmernts is a one of a kind integrated township, which now houses over 10,000 happy customers. It was set up in the year 2005 and since then has become one of the most preferred in the Baddi Nalagarh Inudstrial region. The cohesive township is located with a picturequse hilly backdrop, just 30 kms away from Panchkula and 22 kms from New Chandigarh.",
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
      "Group housing spread across 131 bigha 19 biswa",
      "Amravati Junior School – Kindergarten + Junior Wing",
      "Amravati Vidyalaya High School affiliated with CBSE",
      "Modern shopping complexes, showrooms, double-storey shops & booths",
      "Just 3 KMs from National Highway 21A (Pinjore-Nalagarh road)",
      "30 kms from Panchkula City",
      "Apartments from 1 to 3 bedrooms",
      "Built-up plots from 112 sq/m to 180 sq/m",
      "Wide metaled roads with paver construction",
      "Green surroundings with scenic hills nearby",
      "Amravati Club House with health club, kitty room, TT room, billiards room & party hall",
      "Deviwati Durga Mandir within premises",
    ],
    offerings: [
      {
        name: "LILLY",
        type: "Studio Apartments",
        size: "676 sqft",
      },
      {
        name: "JASMINE",
        type: "2 Bedroom + Kitchen (Open Plan Studio)",
        size: "854 sqft",
      },
      {
        name: "DAISY",
        type: "2 BHK Apartment",
        size: "1137 sqft",
      },
      {
        name: "ZYNIA",
        type: "3 BHK Apartment",
        size: "1137 sqft",
      },
      {
        name: "SUNFLOWER",
        type: "3 BHK Apartment",
        size: "1490 sqft",
      },
      {
        name: "AMRAVATI ECO HOMES PHASE-1",
        type: "Eco Homes",
        size: "1000 sqft",
      },
      {
        name: "COMMERCIAL UNITS",
        type: "Commercial",
        size: "2800 sqft (each)",
      },
    ],
  },
];
