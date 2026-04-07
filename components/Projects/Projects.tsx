"use client";

import { motion } from "framer-motion";
import css from "./Projects.module.css";

const projects = [
  {
    title: "Nanny.Services",
    desc: "SPA for finding and booking babysitters with authentication and scheduling.",
    img: "/projects/nanny.png",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "React Hook Form",
      "Yup",
      "React Router",
      "React Hot Toast",
      "React Router DOM",
      "HTML5",
      "CSS3",
      "Vite",
      "Vercel"
    ],
    role: "Frontend Developer",
    type: "Individual",
    live: "https://nanny-services-neon.vercel.app/",
    github: "https://github.com/lkarm67/nanny-services",
  },
  {
    title: "TravelTrucks",
    desc: "Camper rental platform with catalog, filtering, booking and reviews.",
    img: "/projects/camper.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "MockApi",
      "Formik",
      "Yup",
      "HTML5",
      "CSS3",
      "React Hot Toast",
      "React Datepicker",
      "Vite",
      "Vercel",
    ],
    role: "Frontend Developer",
    type: "Individual",
    live: "https://traveltrucks-rent.vercel.app/",
    github: "https://github.com/lkarm67/traveltrucks-rent",
  },
  {
    title: "ToolNext",
    desc: "Full-stack platform for renting and booking tools with authentication and reviews.",
    img: "/projects/toolnext.png",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML5",
      "CSS3", 
      "Render",
      "Vercel"
    ],
    role: "Fullstack Developer",
    details: "Created 'New Tool' endpoint (backend) and Registration page (frontend)",
    type: "Team",
    live: "https://project-group-6-fronted.vercel.app/",
    github: [
      {
        label: "Backend",
        link: "https://github.com/Buievska/project_group_6_backend",
      },
      {
        label: "Frontend",
        link: "https://github.com/Buievska/project_group_6_fronted",
      },
    ],
  },
  {
    title: "NoteHub",
    desc: "Simple and clean app for managing personal notes.",
    img: "/projects/notehub.png",
    tech: 
      [
        "Next.js", 
        "React", 
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
        "Vercel",
        "GitHub"
      ],
    role: "Frontend Developer",
    type: "Individual",
    live: "https://09-auth-alpha-three.vercel.app/",
    github: "https://github.com/lkarm67/09-auth/",
  },
  {
    title: "Меблерія",
    desc: "Responsive furniture store website with product catalog and pagination.",
    img: "/projects/furniture.png",
    tech: 
      [
        "HTML5", 
        "CSS3", 
        "JavaScript", 
        "Axios", 
        "Accordion", 
        "Swiper", 
        "Izitoast", 
        "GitHub Pages",
        "Vite",
      ],
    role: "Frontend Developer",
    details: "Developed Header section",
    type: "Team",
    live: "https://buievska.github.io/js-shop-group-10/",
    github: "https://github.com/Buievska/js-shop-group-10/",
  },
  /*{
    title: "Image Search App",
    desc: "Application for searching images using Pixabay API with pagination and lightbox.",
    img: "/projects/image-search.png",
    tech: 
      [
        "JavaScript", 
        "Axios", 
        "Pixabay API", 
        "SimpleLightbox", 
        "iziToast", 
        "Vite",
      ],
    role: "Frontend Developer",
    type: "Individual",
    live: "https://lkarm67.github.io/goit-js-hw-12/",
    github: "https://github.com/lkarm67/goit-js-hw-12",
  },*/
  {
    title: "WebStudio",
    desc: "Responsive business website with modern layout and interactive elements.",
    img: "/projects/webstudio.png",
    tech:
      [
        "HTML5", 
        "CSS3", 
        "JavaScript",
        "GitHub Pages",
    ],
    role: "Frontend Developer",
    type: "Individual",
    live: "https://lkarm67.github.io/goit-markup-hw-06/",
    github: "https://github.com/lkarm67/goit-markup-hw-06",
  },
  {
    title: "WatchCharm",
    desc: "Landing page for a premium watch brand with modern UI and smooth interactions.",
    img: "/projects/watchcharm.png",
    tech:
      [
        "HTML5", 
        "CSS3", 
        "JavaScript",
        "GiHub Pages",
      ],
    role: "Frontend Developer",
    type: "Team",
    details: "Developed Sale section",
    live: "https://buievska.github.io/project-DreamTeam13/",
    github: "https://github.com/Buievska/project-DreamTeam13",
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
                {Array.isArray(p.github) ? (
                  p.github.map((g, i) => (
                    <a key={i} href={g.link} target="_blank">
                      {g.label}
                    </a>
                  ))
                ) : (
                  <a href={p.github} target="_blank">GitHub</a>
                )}
              </div>
            </div>

            <div className={css.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p>
                <span className={css.span}>Type: </span>{p.type}
              </p>
              <p>
                <span className={css.span}>Role: </span>
                  {p.role}
                  {p.details && ` - ${p.details}`}
              </p>

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