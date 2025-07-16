import React from "react";
import logobuilding from "../assets/logobuilding.svg";
import logoheader from "../assets/logoheader.svg";
import { AnimatePresence, motion } from "framer-motion";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-screen fixed top-0 left-0 themebg flex flex-col justify-center items-center"
      >
        <img src={logobuilding} alt="" className="h-[200px]" />
        <h2 className="text-2xl accentfont">Loading Luxury</h2>
        <div className="flex items-center justify-center space-x-2 mt-5">
          <span className="w-2 h-2 bg-[#4B352A] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-[#4B352A] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-[#4B352A] rounded-full animate-bounce"></span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
