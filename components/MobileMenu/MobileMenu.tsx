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
            priority
          />

          <nav className={css.mobileNav}>
            <a onClick={onClose} href="#home">Home</a>
            <a onClick={onClose} href="#about">About</a>
            <a onClick={onClose} href="#projects">Projects</a>
            <a onClick={onClose} href="#contact">Contact</a>
          </nav>

          <ul className={css.socialList}>
            {[
              { href: "https://www.instagram.com/frontend_fullstack_developer/", icon: "icon-instagram" },
              { href: "https://www.facebook.com/profile.php?id=100007795920929", icon: "icon-facebook" },
              { href: "https://wa.me/380971647012", icon: "icon-whatsapp" },
              { href: "https://t.me/lkarm67", icon: "icon-telegram" },
              { href: "https://www.linkedin.com/in/liudmyla-karmeliuk-full-stack/", icon: "icon-linkedin" },
              { href: "https://github.com/lkarm67", icon: "icon-github" },
              { href: "mailto:fsdkl04@gmail.com", icon: "icon-mail" },
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
      </div>
    </>
  );
}