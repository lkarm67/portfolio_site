"use client";

import css from "./LanguageSwitcher.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();return (
    <div className={css.langButtons}>
      <button
        className={`${css.button} ${lang === "en" ? css.active : ""}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>

      <button
        className={`${css.button} ${lang === "uk" ? css.active : ""}`}
        onClick={() => setLang("uk")}
      >
        UA
      </button>
    </div>
  );
}