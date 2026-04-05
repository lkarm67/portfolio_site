"use client";

import Image from "next/image";
import css from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={css.about}>
      <div className={css.aboutCard}>
        
        <h2>About me</h2>

        <h3>
          I'm<span className={css.name}> Liudmyla Karmeliuk</span> - a frontend / fullstack developer.
        </h3>
        
        <p>I create modern and user-friendly web interfaces.</p>
        <p>
          <span className={css.tech}>Frontend: </span>HTML5, CSS3, JavaScript, React, Next.js, TypeScript
        </p>
        <p>
          <span className={css.tech}>Fullstack: </span>Node.js, Express.js, MongoDB, Firebase, RESTful APIs  
        </p>
        <p>
          I love clean UI, smooth animations and building projects that feel
          alive and premium.
        </p>

        <div className={css.softSkills}>
          <span>Problem-solving</span>
          <span>Team collaboration</span>
          <span>Communication</span>
          <span>Attention to detail</span>
        </div>
      </div>
      <div className={css.imgWrapper}>
        <Image 
          src="/images/about.jpg"
          alt="About me"
          width={300}
          height={380}
          className={css.imgAbout}
        />
      </div>
    </section>
  );
}