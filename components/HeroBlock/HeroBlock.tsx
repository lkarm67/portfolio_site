"use client";

import css from "./HeroBlock.module.css";

export default function HeroBlock() {
  return (
    <section className={css.hero}>
      <div className={css.heroContent}>
        <p className={css.tag}>Frontend Developer</p>

        <h1>
          Creating modern <span>web experiences</span>
        </h1>

        <p className={css.subtitle}>
          I build clean, fast and aesthetic interfaces with React & Next.js.
        </p>

        <div className={css.buttons}>
          <button className={css.primary}>View Projects</button>
          <button className={css.secondary}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}