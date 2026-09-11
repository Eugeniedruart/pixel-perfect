import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import sv from "./locales/sv.json";
import { DEFAULT_LANGUAGE, LANGUAGES, parseLocalizedPath } from "@/lib/i18n-routes";

const isBrowser = typeof window !== "undefined";

// The URL is the single source of truth for the language: /offres (fr), /en/offres...
const initialLanguage = isBrowser
  ? parseLocalizedPath(window.location.pathname).lang
  : DEFAULT_LANGUAGE;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      es: { translation: es },
      de: { translation: de },
      sv: { translation: sv },
    },
    lng: initialLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: [...LANGUAGES],
    interpolation: { escapeValue: false },
  });

export default i18n;
