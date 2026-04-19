
"use client";

import css from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
/*import { useLanguage } from "@/context/LanguageContext";

import en from "../../locales/en.json";
import uk from "../../locales/uk.json";*/
import useT from "@/hooks/useT";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useT();
  /*const { lang, setLang } = useLanguage();

  const translations: Record<"en" | "uk", Translations> = {
    en,
    uk,
  };

  const t = translations[lang];*/

  return (
    <header className={css.header}>
      {/* LOGO  */}
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

      <div className={css.navLangBox}> 
        {/* NAV  */}
        <nav className={css.nav}>
          <a href="#home">{t.nav.home}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        {/* LANGUAGE SWITCHER  */}
        <LanguageSwitcher />
      </div>

      {/* BURGER  */}
      <button
        className={css.burgerBtn}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}