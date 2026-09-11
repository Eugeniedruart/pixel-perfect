import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppProviders from "./AppProviders.tsx";
import AppRoutes from "./AppRoutes.tsx";
import { HTML_LANG, langPrefix, parseLocalizedPath } from "./lib/i18n-routes";

const App = () => {
  const { i18n } = useTranslation();
  const { lang } = parseLocalizedPath(
    typeof window === "undefined" ? "/" : window.location.pathname
  );

  useEffect(() => {
    if (i18n.language?.split("-")[0] !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = HTML_LANG[lang];
  }, [i18n, lang]);

  return (
    <AppProviders>
      <BrowserRouter basename={langPrefix(lang) || undefined}>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;
