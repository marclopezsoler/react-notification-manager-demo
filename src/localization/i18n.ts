import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import languages, { fallbackLng } from "./languages";
import { enUs } from "./locales/en";
import { esEs } from "./locales/es";

const resources = {
  "en-US": {
    components: enUs.components,
    data: enUs.data,
  },
  "es-ES": {
    components: esEs.components,
    data: esEs.data,
  },
};

const stored = localStorage.getItem("lang");
let initialLang = fallbackLng;

if (stored) {
  const parsed = JSON.parse(stored);
  if (parsed?.code) {
    initialLang = parsed.code;
  }
} else {
  const browserLang = navigator.language;
  const primarySubtag = browserLang.split("-")[0];
  const supportedLang = languages.find(
    (lang) => lang.code.split("-")[0] === primarySubtag
  );
  initialLang = supportedLang ? supportedLang.code : fallbackLng;
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: fallbackLng,
  lng: initialLang,
  ns: ["components", "data"],
  defaultNS: "screens",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18n;
