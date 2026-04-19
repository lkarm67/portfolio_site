"use client";

import { motion } from "framer-motion";
import css from "./Footer.module.css";
import useT from "@/hooks/useT";


export default function Footer() {
  const year = new Date().getFullYear();
  const t = useT();

  return (
    <footer className={css.footer}>
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ul className={css.socialList}>
          {[
            { href: "https://www.instagram.com/frontend_fullstack_developer/", icon: "icon-instagram" },
            { href: "https://wa.me/380971647012", icon: "icon-whatsapp" },
            { href: "https://t.me/lkarm67", icon: "icon-telegram" },
            { href: "https://www.linkedin.com/in/liudmyla-karmeliuk-full-stack/", icon: "icon-linkedin" },
            { href: "https://github.com/lkarm67", icon: "icon-github" },
          ].map((item) => (
            <li key={item.icon} className={css.item}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                <svg className={css.icon} width="18" height="18">
                  <use href={`/icons.svg#${item.icon}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
           
        <p className={css.text}>
          {t.footer.developer} | 
            <a className={css.fA} href="mailto:fsdkl04@gmail.com"> {t.footer.email}</a> | 
            <a className={css.fA} href="/resume.pdf" target="_blank" rel="noopener noreferrer"> {t.footer.resume}</a>
        </p>

        <p className={css.copy}>© {year} {t.footer.copyright}</p>
      </motion.div>
    </footer>
  );
}