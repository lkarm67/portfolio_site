"use client";

import Image from "next/image";
import css from "./About.module.css";
import useT from "@/hooks/useT";

export default function About() {
  const t = useT();

  return (
    <section id="about" className={css.about}>
      <div className={css.aboutCard}>
        
        <h2>{t.about.title}</h2>
        <div>
          <h3 className={css.name}>{t.about.name}</h3>
          <h3 className={css.role}>{t.about.role}</h3>
        </div>
        
        <p>{t.about.description}</p>
        <p>
          <span className={css.tech}>{t.about.frontendLabel}: </span>
          {t.about.frontendStack}
        </p>
        <p>
          <span className={css.tech}>{t.about.backendLabel}: </span>
          {t.about.backendStack}
        </p>
        <p>
          {t.about.extra}
        </p>

        <div className={css.softSkills}>
          <span>{t.about.skills["1"]}</span>
          <span>{t.about.skills["2"]}</span>
          <span>{t.about.skills["3"]}</span>
          <span>{t.about.skills["4"]}</span>
        </div>
      </div>
      
      <div className={css.imgWrapper}>
        <Image 
          src="/images/about.jpg"
          alt="About me"
          width={300}
          height={389}
          className={css.imgAbout}
        />
      </div>
    </section>
  );
}