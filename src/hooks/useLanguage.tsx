import { useEffect } from "react";

import i18n from "../localization/i18n";

import languages, { fallbackLng, type Lang } from "../localization/languages";

export default function useLanguage() {
  const storedLang = localStorage.getItem("lang");
  const locale = storedLang ? JSON.parse(storedLang).code : fallbackLng;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const handleLangChange = (langCode: string) => {
    localStorage.setItem("lang", JSON.stringify({ code: langCode }));
    window.location.reload();
  };

  const currentLang: Lang = languages.find((l) => l.code === locale) ?? {
    code: fallbackLng,
    label: "",
  };

  return { locale, currentLang, handleLangChange };
}
