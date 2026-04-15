"use client";

import css from "./LanguageSwitcher.module.css";

type Lang = "en" | "uk";

type Props = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function LanguageSwitcher({ lang, setLang }: Props) {
  return (
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