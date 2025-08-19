import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// You can replace these image imports with your own or use URLs
import aniesh from "../../assets/team/aniesh.png";
import vivek from "../../assets/team/vivek.png";
import director from "../../assets/team/director.png";

const teamMembers = [
    {
    name: "Hargobind Goyal",
    position: "Managing Director",
    facebook: "https://facebook.com/ravisingh",
    instagram: "https://instagram.com/ravi.codes",
    linkedin: "https://linkedin.com/in/ravisingh",
    quote: "Managing real estate is not about selling property, it’s about building dreams that last generations.",
    image: director,
  },
  {
    name: "Ainesh Goyal",
    position: "Director",
    facebook: "https://facebook.com/arjunmehta",
    instagram: "https://instagram.com/arjun.mehta",
    linkedin: "https://linkedin.com/in/arjunmehta",
    quote: "Great leadership in real estate is about creating communities, not just buildings.",
    image: aniesh,
  },
  {
    name: "Viren Goyal",
    position: "Director",
    facebook: "https://facebook.com/snehakapoor",
    instagram: "https://instagram.com/sneha.designs",
    linkedin: "https://linkedin.com/in/snehakapoor",
    quote: "Every project is a promise—of quality, trust, and a better way of living.",
    image: vivek,
  },
];


export default function TeamSection() {
  return (
    <section className="">
    
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-sm:gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="themebg p-6 flex flex-col items-center text-center group transition-all h-[300px] w-[400px] max-sm:w-full"
          >
            <img
              src={member.image}
              alt={member.name}
              className="group-hover:w-24 group-hover:h-24 rounded-full h-[150px] w-[150px] object-cover mb-4 transition-all duration-700"
            />
            <h3 className="text-xl ">{member.name}</h3>
            <p className="text-sm">{member.position}</p>
            <p className="italic mt-3 mb-4 px-2 accentfont hidden group-hover:block">“{member.quote}”</p>
          
          </div>
        ))}
      </div>
    </section>
  );
}
