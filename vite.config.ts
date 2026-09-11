import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs/promises";
import { pathToFileURL } from "url";
import { componentTagger } from "lovable-tagger";
import { prerenderRoutes, routeDefinitions, SITE_URL } from "./scripts/prerender-routes";
import {
  HTML_LANG,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  OG_LOCALE,
  langPrefix,
  type Language,
} from "./src/lib/i18n-routes";

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * Static pre-rendering (SSG).
 * After the client build, we build an SSR bundle, render every public route in
 * every language to HTML and write it as dist/<lang>/<route>/index.html so
 * crawlers get real, localized content without executing JavaScript.
 */
function prerenderPlugin(): Plugin {
  return {
    name: "wel-prerender",
    apply: "build",
    enforce: "post",
    async closeBundle() {
      if (process.env.WEL_SSR_BUILD === "1") return;
      process.env.WEL_SSR_BUILD = "1";

      const root = __dirname;
      const distDir = path.resolve(root, "dist");
      const ssrDir = path.resolve(root, "dist-ssr");

      const { build } = await import("vite");
      await build({
        logLevel: "warn",
        build: {
          ssr: path.resolve(root, "src/entry-server.tsx"),
          outDir: ssrDir,
          emptyOutDir: true,
          minify: false,
        },
      });

      const entryPath = path.join(ssrDir, "entry-server.js");
      const { render } = (await import(pathToFileURL(entryPath).href)) as {
        render: (url: string, lang: Language) => string;
      };

      const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");

      for (const route of prerenderRoutes) {
        let html = template;
        const appHtml = render(route.urlPath, route.lang);
        html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

        html = html.replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[route.lang]}">`);

        const canonical = `${SITE_URL}${route.urlPath}`;
        const alternates = [
          ...LANGUAGES.map(
            (lang) =>
              `<link rel="alternate" hreflang="${lang}" href="${SITE_URL}${langPrefix(lang)}${
                route.path === "/" ? "/" : route.path
              }" />`
          ),
          `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${
            route.path === "/" ? "/" : route.path
          }" />`,
        ].join("\n    ");

        html = html.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${canonical}" />\n    ${alternates}`
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*" \/>/,
          `<meta property="og:url" content="${canonical}" />`
        );
        html = html.replace(
          /<meta property="og:locale" content="[^"]*" \/>/,
          [
            `<meta property="og:locale" content="${OG_LOCALE[route.lang]}" />`,
            ...LANGUAGES.filter((lang) => lang !== route.lang).map(
              (lang) => `<meta property="og:locale:alternate" content="${OG_LOCALE[lang]}" />`
            ),
          ].join("\n    ")
        );

        html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
        html = html.replace(
          /<meta property="og:title" content="[^"]*">/,
          `<meta property="og:title" content="${escapeAttr(route.title)}">`
        );
        html = html.replace(
          /<meta name="twitter:title" content="[^"]*" ?\/?>/,
          `<meta name="twitter:title" content="${escapeAttr(route.title)}">`
        );
        html = html.replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${escapeAttr(route.description)}">`
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*">/,
          `<meta property="og:description" content="${escapeAttr(route.description)}">`
        );
        html = html.replace(
          /<meta name="twitter:description" content="[^"]*" ?\/?>/,
          `<meta name="twitter:description" content="${escapeAttr(route.description)}">`
        );

        const outFile =
          route.urlPath === "/"
            ? path.join(distDir, "index.html")
            : path.join(distDir, route.urlPath, "index.html");
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await fs.writeFile(outFile, html, "utf-8");
        // Also emit dist/<route>.html for hosts that resolve extension-less files.
        if (route.urlPath !== "/") {
          const flatFile = path.join(distDir, `${route.urlPath.slice(1)}.html`);
          await fs.mkdir(path.dirname(flatFile), { recursive: true });
          await fs.writeFile(flatFile, html, "utf-8");
        }
      }

      await fs.rm(ssrDir, { recursive: true, force: true });
      // eslint-disable-next-line no-console
      console.log(
        `✓ pre-rendered ${prerenderRoutes.length} pages (${routeDefinitions.length} routes × ${LANGUAGES.length} languages, default ${DEFAULT_LANGUAGE})`
      );
    },
  };
}


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
