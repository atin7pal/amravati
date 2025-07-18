// components/MotionPageWrapper.jsx
import { motion } from "framer-motion";

export default function MotionPageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
