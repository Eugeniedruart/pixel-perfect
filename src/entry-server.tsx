import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppProviders from "./AppProviders.tsx";
import AppRoutes from "./AppRoutes.tsx";
import i18n from "./i18n";
import { DEFAULT_LANGUAGE, langPrefix, type Language } from "./lib/i18n-routes";

export function render(url: string, lang: Language = DEFAULT_LANGUAGE) {
  i18n.changeLanguage(lang);
  return renderToString(
    <AppProviders>
      <StaticRouter location={url} basename={langPrefix(lang) || undefined}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>
  );
}
