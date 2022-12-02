import { Section } from "../section/Section";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    ></motion.div>
  );
}
