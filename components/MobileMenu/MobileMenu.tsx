"use client";

import css from "./MobileMenu.module.css";
import { useEffect } from "react";
import Image from "next/image"; 

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  if (isOpen) {
    window.addEventListener("keydown", handleEsc);

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("noScroll");

    (document.body as any).dataset.scrollY = scrollY.toString();
  } else {
    window.removeEventListener("keydown", handleEsc);

    const scrollY = (document.body as any).dataset.scrollY;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("noScroll");

    if (scrollY) window.scrollTo(0, parseInt(scrollY));
  }

    return () => {
      window.removeEventListener("keydown", handleEsc);
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
            width={80}
            height={80}
            className={css.logo}
            priority
          />

          <nav className={css.mobileNav}>
            <button onClick={() => handleScroll("home")}>Home</button>
            <button onClick={() => handleScroll("about")}>About</button>
            <button onClick={() => handleScroll("projects")}>Projects</button>
            <button onClick={() => handleScroll("contact")}>Contact</button>
          </nav>

        </div>
    </>
  );
}