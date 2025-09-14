// components/FadeInSection.jsx
import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}        // start hidden + slightly down
      whileInView={{ opacity: 1, y: 0 }}     // fade in + slide up
      viewport={{ once: true, amount: 0.1 }} // trigger when 10% visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
