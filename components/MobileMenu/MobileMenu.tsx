"use client";

import css from "./MobileMenu.module.css";
import { useEffect } from "react";
import Image from "next/image"; 
import useT from "@/hooks/useT";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const t = useT();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScroll = (id: string) => {
    onClose();

    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 90;

      const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 250);
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
  
