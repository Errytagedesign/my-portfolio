"use client";

import { motion } from "framer-motion";

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

const heading =
  "mb-6 text-big leading-[1.2em] text-light transition-all duration-500 ease-in hover:text-transparent hover:[-webkit-text-stroke:2px_#44d7a8] md:w-4/5 md:text-super font-bold";

function HeroSection() {
  return (
    <div className="mt-4 mb-40" id="herosection">
      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.p className="text-pry"> Hey There, I&apos;m </motion.p>

        <motion.h2 className={heading} variants={item}>
          Sodeeq Awoyemi.
        </motion.h2>

        <motion.h2 className={heading} variants={item}>
          Web &amp; Mobile App Developer | Crafting Exceptional User Experiences
        </motion.h2>

        <motion.p
          className="text-base font-thin text-light md:w-3/5 md:text-2xl"
          variants={item}
        >
          I design and build fast, responsive web applications with React and
          Next.js, and cross-platform mobile apps with React Native and Expo.
          Focused on interfaces that feel effortless to use, and open to
          exciting opportunities.
        </motion.p>
      </motion.section>
    </div>
  );
}

export default HeroSection;
