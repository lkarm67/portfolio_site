"use client";

import Link from "next/link";
import css from "./HeroBlock.module.css";
import { motion } from "framer-motion";
import useT from "@/hooks/useT";

export default function HeroBlock() {
  const t = useT();

  return (
    <section id="home" className={css.hero}>
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <p className={css.tag}>{t.home.tag}</p>

        <h1>
          {t.home.titlePart1} <span>{t.home.titleHighlight}</span>
        </h1>

        <p className={css.subtitle}>
          {t.home.subtitle}
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
            {t.home.primaryBtn}
          </a>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
            }}  
            className={css.secondary}
          >
            {t.home.secondaryBtn}
          </button>
        </div>
      </motion.div>

      <div className={css.glow} />
    </section>
  );
}