"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import css from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={css.wrapper}>
      <motion.div
        className={css.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={css.title}>404</h1>

        <p className={css.subtitle}>
          Oops… this page doesn't exist
        </p>

        <Link href="/" className={css.button}>
          Go Home
        </Link>
      </motion.div>

      <div className={css.glow} />
    </section>
  );
}