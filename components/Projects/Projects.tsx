"use client";

import { motion } from "framer-motion";
import css from "./Projects.module.css";

const projects = [
  {
    title: "Image Search App",
    desc: "Search images using Pixabay API with pagination",
    img: "/projects/img-search.jpg",
    tech: ["React", "Axios", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Travel Trucks",
    desc: "Truck rental app with filters and booking",
    img: "/projects/trucks.jpg",
    tech: ["React", "Redux", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio with animations",
    img: "/projects/portfolio.jpg",
    tech: ["Next.js", "CSS", "Framer Motion"],
    live: "#",
    github: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className={css.projectsSection}>
      <h2 className={css.title}>Projects</h2>

      <motion.ul
        className={css.projectsGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.li key={i} variants={item} className={css.card}>
            <div className={css.imageWrapper}>
              <img src={p.img} alt={p.title} />

              <div className={css.overlay}>
                <a href={p.live} target="_blank">Live</a>
                <a href={p.github} target="_blank">GitHub</a>
              </div>
            </div>

            <div className={css.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className={css.tech}>
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}