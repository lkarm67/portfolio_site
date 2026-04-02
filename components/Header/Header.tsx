"use client";

import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logo}>MyPortfolio</div>

      <nav className={css.nav}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}