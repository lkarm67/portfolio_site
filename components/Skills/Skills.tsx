"use client";

import css from "./Skills.module.css";
import { TbApi } from "react-icons/tb";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiSlack,
  SiTrello,
  SiVercel,
  SiNetlify,
  SiRender,
  SiOpenai,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Query", icon: SiReactquery },
  { name: "Axios", icon: SiAxios },
  { name: "REST API", icon: TbApi },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
  { name: "Slack", icon: SiSlack },
  { name: "Trello", icon: SiTrello },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Render", icon: SiRender },  
  { name: "AI Tools", icon: SiOpenai },
];

export default function Skills() {
  return (
    <section id="skills" className={css.skillsSection}>
      <div className={css.marquee}>
        <div className={css.track}>
          {[...skills, ...skills].map((s, i) => {
            const Icon = s.icon;
            return (
              <div className={css["skill-card"]} key={i}>
                <Icon size={36} />
                <span>{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}