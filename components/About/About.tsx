"use client";

import css from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={css.about}>
      <div className={css["about-card"]}>
        <h2>About me</h2>

        <p>
          I am a frontend developer focused on creating modern, aesthetic and
          user-friendly web interfaces using React and Next.js.
        </p>

        <p>
          I love clean UI, smooth animations and building projects that feel
          alive and premium.
        </p>

        <div className="skills">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>CSS</span>
        </div>
      </div>
    </section>
  );
}