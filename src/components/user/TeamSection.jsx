import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// You can replace these image imports with your own or use URLs
import arjunImg from "../../assets/team/team1.jpg";
import snehaImg from "../../assets/team/team2.jpg";
import raviImg from "../../assets/team/team3.jpg";

const teamMembers = [
  {
    name: "Arjun Mehta",
    position: "Co-Founder & CEO",
    facebook: "https://facebook.com/arjunmehta",
    instagram: "https://instagram.com/arjun.mehta",
    linkedin: "https://linkedin.com/in/arjunmehta",
    quote: "Leadership is not about titles, it’s about impact, influence, and inspiration.",
    image: raviImg,
  },
  {
    name: "Sneha Kapoor",
    position: "Head of Design",
    facebook: "https://facebook.com/snehakapoor",
    instagram: "https://instagram.com/sneha.designs",
    linkedin: "https://linkedin.com/in/snehakapoor",
    quote: "Design is not just what it looks like. Design is how it works.",
    image: raviImg,
  },
  {
    name: "Ravi Singh",
    position: "Lead Frontend Developer",
    facebook: "https://facebook.com/ravisingh",
    instagram: "https://instagram.com/ravi.codes",
    linkedin: "https://linkedin.com/in/ravisingh",
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    image: raviImg,
  },
];

export default function TeamSection() {
  return (
    <section className="">
    
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="themebg p-6 flex flex-col items-center text-center group transition-all h-[300px] w-[400px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="group-hover:w-24 group-hover:h-24 rounded-full h-[150px] w-[150px] object-cover mb-4 transition-all duration-700"
            />
            <h3 className="text-xl ">{member.name}</h3>
            <p className="text-sm">{member.position}</p>
            <p className="italic mt-3 mb-4 px-2 accentfont hidden group-hover:block">“{member.quote}”</p>
            <div className="space-x-4 justify-center flex opacity-0 group-hover:opacity-100">
              <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-600" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-800" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
