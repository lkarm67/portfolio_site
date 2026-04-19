"use client";

import { useLanguage } from "@/context/LanguageContext";
import en from "@/locales/en.json";
import uk from "@/locales/uk.json";

export default function useT() {
  const { lang } = useLanguage();

  return lang === "en" ? en : uk;
}