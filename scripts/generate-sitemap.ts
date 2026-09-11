// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs"
import { resolve } from "path"
import { LANGUAGES, SITE_URL, langPrefix } from "../src/lib/i18n-routes"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/offres", changefreq: "monthly", priority: "0.8" },
  { path: "/methodologie", changefreq: "monthly", priority: "0.8" },
  { path: "/entreprises-labellisees", changefreq: "monthly", priority: "0.8" },
  { path: "/eligibilite", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.2" },
  { path: "/politique-confidentialite", changefreq: "yearly", priority: "0.2" },
  { path: "/gestion-cookies", changefreq: "yearly", priority: "0.2" },
]

const urlFor = (lang: string, path: string) =>
  `${SITE_URL}${langPrefix(lang as (typeof LANGUAGES)[number])}${path === "/" ? "/" : path}`

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.flatMap((e) =>
    LANGUAGES.map((lang) =>
      [
        `  <url>`,
        `    <loc>${urlFor(lang, e.path)}</loc>`,
        ...LANGUAGES.map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt}" href="${urlFor(alt, e.path)}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor("fr", e.path)}" />`,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n"),
    ),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length * LANGUAGES.length} URLs)`)
