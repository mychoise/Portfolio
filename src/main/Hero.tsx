import React from "react";
import { motion } from "framer-motion";
import Intro from "../components/mainComponents/Intro";
import Projects from "../components/mainComponents/Projects";
import Experience from "../components/mainComponents/Experience";
import Education from "../components/mainComponents/Education";
import Contacts from "../components/mainComponents/Contacts";
import Cursor from "../components/Cursor";
import Fotter from "../components/Fotter";

// Variants for Framer Motion
const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const springAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Hero = () => {
  return (
    <div className="pt-10 lg:pt-10 hero-area pl-0 lg:pl-44 px-6 lg:px-0 flex flex-col gap-10 cursor-none">
      <Cursor />

      {/* Intro - simple fade */}
      <motion.div
        id="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Intro />
      </motion.div>

      {/* Projects slide in from right */}
      <motion.div
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideFromRight}
      >
        <Projects />
      </motion.div>

      {/* Experience - fade in on scroll */}
      <motion.div
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInOnScroll}
      >
        <Experience />
      </motion.div>

      {/* Education - fade in on scroll */}
      <motion.div
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInOnScroll}
      >
        <Education />
      </motion.div>

      {/* Contacts - fade in on scroll */}
      <motion.div
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInOnScroll}
      >
        <Contacts />
      </motion.div>
    </div>
  );
};

export default Hero;
