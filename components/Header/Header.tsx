"use client";

import css from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Image
          src="/images/logo_header.png"
          alt="Logo"
          width={500}
          height={100}
          className={css.logoDesktop}
          priority
        />

        <Image
          src="/images/logo_mobile.png"
          alt="Logo"
          width={80}
          height={80}
          className={css.logoMobile}
          priority
        />
      </div>

      <nav className={css.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className={css.burgerBtn}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}