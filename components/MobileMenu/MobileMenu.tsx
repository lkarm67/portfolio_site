"use client";

import css from "./MobileMenu.module.css";
import { useEffect } from "react";
import Image from "next/image"; 
import { useLanguage } from "@/context/LanguageContext";

import en from "../../locales/en.json";
import uk from "../../locales/uk.json";

type Translations = {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : uk;

  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (!isOpen) return;

    window.addEventListener("keydown", handleEsc);

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("noScroll");

    (document.body as any).dataset.scrollY = scrollY.toString();

    return () => {
      window.removeEventListener("keydown", handleEsc);

      const savedScrollY = (document.body as any).dataset.scrollY;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.classList.remove("noScroll");

      if (savedScrollY) window.scrollTo(0, parseInt(savedScrollY));
    };
  }, [isOpen, onClose]);

    // 🔥 ГОЛОВНА ФУНКЦІЯ СКРОЛУ
  const handleScroll = (id: string) => {
    onClose(); // закриваємо меню

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 80;
      const y =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };  
  
  return (
    <>
      {/* Overlay */}
      <div
        className={`${css.overlay} ${isOpen ? css.show : ""}`}
        onClick={onClose}
      />

      {/* Menu */}
        <div className={`${css.mobileMenu} ${isOpen ? css.open : ""}`}>
          <button className={css.closeBtn} onClick={onClose}>
            ✕
          </button>

          <Image
            src="/images/logo_mobile.png"
            alt="Logo"
            width={70}
            height={70}
            className={css.logo}
            priority
          />

          <nav className={css.mobileNav}>
            <button onClick={() => handleScroll("home")}>{t.nav.home}</button>
            <button onClick={() => handleScroll("about")}>{t.nav.about}</button>
            <button onClick={() => handleScroll("projects")}>{t.nav.projects}</button>
            <button onClick={() => handleScroll("contact")}>{t.nav.contact}</button>
          </nav>

        </div>
    </>
  );
}