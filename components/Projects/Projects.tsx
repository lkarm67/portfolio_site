"use client";

import { motion } from "framer-motion";
import css from "./Projects.module.css";
import useT from "@/hooks/useT";
import type { ProjectKey } from "@/types/translations";

type Project = {
  key: ProjectKey;
  title: string;
  img: string;
  tech: string[];
  role: string;
  type: "individual" | "team";
  live: string;
  github: string | { label: string; link: string }[];
  details?: string;
};

const projects: Project[] = [
  {
    key: "nanny",
    title: "Nanny.Services",
    img: "/projects/nanny.jpg",
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
      "Vercel",
    ],
    role: "Frontend Developer",
    type: "individual",
    live: "https://nanny-services-neon.vercel.app/",
    github: "https://github.com/lkarm67/nanny-services",
  },
  {
    key: "traveltrucks",
    title: "TravelTrucks",
    img: "/projects/camper.jpg",
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
    type: "individual",
    live: "https://traveltrucks-rent.vercel.app/",
    github: "https://github.com/lkarm67/traveltrucks-rent",
  },
  {
    key: "toolnext",
    title: "ToolNext",
    img: "/projects/toolnext.jpg",
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
      "Vercel",
    ],
    role: "Fullstack Developer",
    type: "team",
    details:
      "Created 'New Tool' endpoint (backend) and Registration page (frontend)",
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
    key: "notehub",
    title: "NoteHub",
    img: "/projects/notehub.jpg",
    tech: ["Next.js", "React", "JavaScript", "HTML5", "CSS3", "Vite", "Vercel", "GitHub"],
    role: "Frontend Developer",
    type: "individual",
    live: "https://09-auth-alpha-three.vercel.app/",
    github: "https://github.com/lkarm67/09-auth/",
  },
  {
    key: "mebleria",
    title: "Меблерія",
    img: "/projects/furniture.jpg",
    tech: [
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
    type: "team",
    live: "https://buievska.github.io/js-shop-group-10/",
    github: "https://github.com/Buievska/js-shop-group-10/",
  },
  {
    key: "webstudio",
    title: "WebStudio",
    img: "/projects/webstudio.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    role: "Frontend Developer",
    type: "individual",
    live: "https://lkarm67.github.io/goit-markup-hw-06/",
    github: "https://github.com/lkarm67/goit-markup-hw-06",
  },
  {
    key: "watchcharm",
    title: "WatchCharm",
    img: "/projects/watchcharm.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    role: "Frontend Developer",
    type: "team",
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
  const t = useT();

  return (
    <section id="projects" className={css.projectsSection}>
      <h2 className={css.title}>{t.projects.title}</h2>

      <motion.ul
        className={css.projectsGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => {
          const typeLabel =
            p.type === "individual"
              ? t.projects.individual
              : t.projects.team;

          return (
            <motion.li key={i} variants={item} className={css.card}>
              <div className={css.imageWrapper}>
                <img src={p.img} alt={p.title} />

                <div className={css.overlay}>
                  <a href={p.live} target="_blank">
                    {t.projects.live}
                  </a>

                  {Array.isArray(p.github) ? (
                    p.github.map((g, i) => (
                      <a key={i} href={g.link} target="_blank">
                        {g.label}
                      </a>
                    ))
                  ) : (
                    <a href={p.github} target="_blank">
                      {t.projects.github}
                    </a>
                  )}
                </div>
              </div>

              <div className={css.content}>
                <h3>{p.title}</h3>

                <p>{t.projects.items[p.key]}</p>

                <p>
                  <span className={css.span}>{t.projects.type}: </span>
                  {typeLabel}
                </p>

                <p>
                  <span className={css.span}>{t.projects.role}: </span>
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
          );
        })}
      </motion.ul>
    </section>
  );
}

