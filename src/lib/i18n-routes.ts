export const SITE_URL = "https://www.womenequitylabel.fr";

export const LANGUAGES = ["fr", "en", "es", "de", "sv"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "fr";

export const HTML_LANG: Record<Language, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  de: "de",
  sv: "sv",
};

export const OG_LOCALE: Record<Language, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  de: "de_DE",
  sv: "sv_SE",
};

/** URL prefix for a language ("" for the default language). */
export const langPrefix = (lang: Language) => (lang === DEFAULT_LANGUAGE ? "" : `/${lang}`);

export const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value);

/** Splits "/en/offres" into { lang: "en", path: "/offres" }. */
export function parseLocalizedPath(pathname: string): { lang: Language; path: string } {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLanguage(segments[0]) && segments[0] !== DEFAULT_LANGUAGE) {
    const lang = segments[0] as Language;
    return { lang, path: `/${segments.slice(1).join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { lang: DEFAULT_LANGUAGE, path: pathname.replace(/\/$/, "") || "/" };
}

/** Absolute URL of a route in a given language. */
export const localizedUrl = (lang: Language, path: string) =>
  `${SITE_URL}${langPrefix(lang)}${path === "/" ? "/" : path}`;
