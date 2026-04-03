"use client";

import { motion } from "framer-motion";
import css from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />

        <p className={css.text}>
          Built with Next.js & love 🚀
        </p>

        <div className={css.links}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className={css.copy}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}