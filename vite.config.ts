import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs/promises";
import { pathToFileURL } from "url";
import { componentTagger } from "lovable-tagger";
import { prerenderRoutes, SITE_URL } from "./scripts/prerender-routes";

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * Static pre-rendering (SSG).
 * After the client build, we build an SSR bundle, render every public route to
 * HTML and write it as dist/<route>/index.html so crawlers get real content
 * without executing JavaScript.
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
        render: (url: string) => string;
      };

      const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");

      for (const route of prerenderRoutes) {
        let html = template;
        const appHtml = render(route.path);
        html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

        const canonical = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
        html = html.replace(
          /<link rel="canonical" href="[^"]*" \/>/,
          `<link rel="canonical" href="${canonical}" />`
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*" \/>/,
          `<meta property="og:url" content="${canonical}" />`
        );

        if (route.title) {
          html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
          html = html.replace(
            /<meta property="og:title" content="[^"]*">/,
            `<meta property="og:title" content="${escapeAttr(route.title)}">`
          );
          html = html.replace(
            /<meta name="twitter:title" content="[^"]*" \/>/,
            `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`
          );
        }
        if (route.description) {
          html = html.replace(
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${escapeAttr(route.description)}">`
          );
          html = html.replace(
            /<meta property="og:description" content="[^"]*">/,
            `<meta property="og:description" content="${escapeAttr(route.description)}">`
          );
        }

        const outFile =
          route.path === "/"
            ? path.join(distDir, "index.html")
            : path.join(distDir, route.path, "index.html");
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await fs.writeFile(outFile, html, "utf-8");
        // Also emit dist/<route>.html for hosts that resolve extension-less files.
        if (route.path !== "/") {
          await fs.writeFile(path.join(distDir, `${route.path.slice(1)}.html`), html, "utf-8");
        }
      }

      await fs.rm(ssrDir, { recursive: true, force: true });
      // eslint-disable-next-line no-console
      console.log(`✓ pre-rendered ${prerenderRoutes.length} routes`);
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
