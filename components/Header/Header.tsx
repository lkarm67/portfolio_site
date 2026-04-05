"use client";

import css from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
      </div>

      <nav className={css.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}