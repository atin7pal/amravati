import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What types of properties do you deal in?",
    answer:
      "We offer a wide range of properties including residential apartments, villas, plots, and commercial spaces across multiple cities.",
  },
  {
    question: "Do you assist with home loans or financing?",
    answer:
      "Yes, we partner with leading banks and financial institutions to help our clients with home loan assistance and documentation.",
  },
  {
    question: "Is there any brokerage or commission fee?",
    answer:
      "We maintain complete transparency. In most cases, we charge a standard brokerage fee which is disclosed upfront before any transaction.",
  },
  {
    question: "Can I schedule a site visit before making a decision?",
    answer:
      "Absolutely! We encourage site visits and can schedule one at your convenience with our sales team.",
  },
  {
    question: "How can I be sure the property is legally verified?",
    answer:
      "All our listings undergo thorough legal checks, including title verification, to ensure the property is free of any legal disputes.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="w-full mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="shadow-sm shadow-[#F8F3D9] border w-full">
            <button
              onClick={() => toggle(index)}
              className="w-full min-w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:accentbg"
            >
              <span className="max-sm:text-xs">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
              initial = {{opacity : 0}}
              animate = {{opacity : 1}}
              exit={{opacity: 0}}
              className="px-4 py-3  w-full accentfont">
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
