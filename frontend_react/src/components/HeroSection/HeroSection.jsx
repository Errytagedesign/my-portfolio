import React from "react";
import "./HeroSection.scss";
import { motion } from "framer-motion";

function HeroSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 1,
      opacity: 1,
    },
  };

  return (
    <div className=" mt-3 hero" id="herosection">
      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.p> Hi, my name is </motion.p>

        <motion.h2 className="mb-4" variants={item}>
          Sodeeq Awoyemi.
        </motion.h2>

        <motion.h2 className="mb-4" variants={item}>
          I build amazing things for the web.
        </motion.h2>
        <motion.p className="desc" variants={item}>
          I’m a software engineer specializing in building exceptional digital
          experiences and accessible, human-centered products.
        </motion.p>
      </motion.section>
    </div>
  );
}

export default HeroSection;
