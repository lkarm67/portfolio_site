"use client";

import Link from "next/link";
import css from "./HeroBlock.module.css";
import { motion } from "framer-motion";

export default function HeroBlock() {
  return (
    <section id="home" className={css.hero}>
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <p className={css.tag}>Frontend / Fullstack Developer</p>

        <h1>
          Creating modern <span>web experiences</span>
        </h1>

        <p className={css.subtitle}>
          I build clean, fast and aesthetic interfaces with React & Next.js.
        </p>

        <div className={css.buttons}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume PDF"
            className={css.primary}
          >
            <svg
              className={css.icon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <use href={`/icons.svg#icon-file-text2`} />
            </svg>
            View Resume
          </a>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
            }}  
            className={css.secondary}
          >
            Contact me
          </button>
        </div>
      </motion.div>

      <div className={css.glow} />
    </section>
  );
}