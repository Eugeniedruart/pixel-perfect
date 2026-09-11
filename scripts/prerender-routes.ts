import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  SITE_URL,
  langPrefix,
  type Language,
} from "../src/lib/i18n-routes";

export { SITE_URL };

export interface RouteMeta {
  title: string;
  description: string;
}

export interface RouteDefinition {
  path: string;
  meta: Record<Language, RouteMeta>;
}

export const routeDefinitions: RouteDefinition[] = [
  {
    path: "/",
    meta: {
      fr: {
        title: "WEL – Women Equity Label | Label égalité femmes-hommes",
        description:
          "WEL (Women Equity Label) est le label dédié à l'égalité professionnelle femmes-hommes. Diagnostic, certification et accompagnement des entreprises.",
      },
      en: {
        title: "WEL – Women Equity Label | Workplace gender equality label",
        description:
          "WEL (Women Equity Label) is the label dedicated to workplace gender equality. Diagnosis, certification and support for organisations.",
      },
      es: {
        title: "WEL – Women Equity Label | Sello de igualdad profesional",
        description:
          "WEL (Women Equity Label) es el sello dedicado a la igualdad profesional entre mujeres y hombres. Diagnóstico, certificación y acompañamiento.",
      },
      de: {
        title: "WEL – Women Equity Label | Label für Gleichstellung im Beruf",
        description:
          "WEL (Women Equity Label) ist das Label für berufliche Gleichstellung von Frauen und Männern. Analyse, Zertifizierung und Begleitung von Unternehmen.",
      },
      sv: {
        title: "WEL – Women Equity Label | Märkning för jämställdhet i arbetslivet",
        description:
          "WEL (Women Equity Label) är märkningen för jämställdhet i arbetslivet. Kartläggning, certifiering och stöd för organisationer.",
      },
    },
  },
  {
    path: "/offres",
    meta: {
      fr: {
        title: "Nos offres | WEL – Women Equity Label",
        description:
          "Labellisation, formations, enquêtes internes et missions de conseil : les offres WEL pour structurer l'égalité professionnelle femmes-hommes.",
      },
      en: {
        title: "Our offers | WEL – Women Equity Label",
        description:
          "Certification, training, internal surveys and consulting: WEL offers to structure workplace gender equality in your organisation.",
      },
      es: {
        title: "Nuestras ofertas | WEL – Women Equity Label",
        description:
          "Certificación, formaciones, encuestas internas y consultoría: las ofertas WEL para estructurar la igualdad profesional.",
      },
      de: {
        title: "Unsere Angebote | WEL – Women Equity Label",
        description:
          "Zertifizierung, Schulungen, interne Befragungen und Beratung: die WEL-Angebote für berufliche Gleichstellung.",
      },
      sv: {
        title: "Våra erbjudanden | WEL – Women Equity Label",
        description:
          "Certifiering, utbildningar, interna undersökningar och rådgivning: WEL:s erbjudanden för jämställdhet i arbetslivet.",
      },
    },
  },
  {
    path: "/methodologie",
    meta: {
      fr: {
        title: "Méthodologie du label | WEL – Women Equity Label",
        description:
          "Découvrez la méthodologie WEL : diagnostic, analyse, labellisation et plan d'action pour progresser sur l'égalité professionnelle.",
      },
      en: {
        title: "Label methodology | WEL – Women Equity Label",
        description:
          "Discover the WEL methodology: diagnosis, analysis, certification and action plan to make progress on workplace gender equality.",
      },
      es: {
        title: "Metodología del sello | WEL – Women Equity Label",
        description:
          "Descubra la metodología WEL: diagnóstico, análisis, certificación y plan de acción para avanzar en la igualdad profesional.",
      },
      de: {
        title: "Methodik des Labels | WEL – Women Equity Label",
        description:
          "Die WEL-Methodik: Analyse, Auswertung, Zertifizierung und Aktionsplan für Fortschritte bei der beruflichen Gleichstellung.",
      },
      sv: {
        title: "Märkningens metod | WEL – Women Equity Label",
        description:
          "Upptäck WEL:s metod: kartläggning, analys, certifiering och handlingsplan för att utveckla jämställdheten i arbetslivet.",
      },
    },
  },
  {
    path: "/eligibilite",
    meta: {
      fr: {
        title: "Testez votre éligibilité | WEL – Women Equity Label",
        description:
          "Vérifiez en quelques minutes si votre organisation est éligible au label WEL pour l'égalité professionnelle femmes-hommes.",
      },
      en: {
        title: "Test your eligibility | WEL – Women Equity Label",
        description:
          "Check in a few minutes whether your organisation is eligible for the WEL label for workplace gender equality.",
      },
      es: {
        title: "Compruebe su elegibilidad | WEL – Women Equity Label",
        description:
          "Compruebe en unos minutos si su organización es elegible para el sello WEL de igualdad profesional.",
      },
      de: {
        title: "Testen Sie Ihre Eignung | WEL – Women Equity Label",
        description:
          "Prüfen Sie in wenigen Minuten, ob Ihre Organisation für das WEL-Label für berufliche Gleichstellung infrage kommt.",
      },
      sv: {
        title: "Testa er behörighet | WEL – Women Equity Label",
        description:
          "Kontrollera på några minuter om er organisation är behörig för WEL-märkningen för jämställdhet i arbetslivet.",
      },
    },
  },
  {
    path: "/entreprises-labellisees",
    meta: {
      fr: {
        title: "Les entreprises labellisées WEL – Women Equity Label",
        description:
          "Découvrez les entreprises labellisées WEL : des organisations qui mesurent, structurent et font progresser l'égalité professionnelle femmes-hommes.",
      },
      en: {
        title: "WEL certified companies – Women Equity Label",
        description:
          "Discover the companies certified by WEL: organisations that measure, structure and advance workplace gender equality.",
      },
      es: {
        title: "Empresas certificadas WEL – Women Equity Label",
        description:
          "Descubra las empresas certificadas WEL: organizaciones que miden, estructuran y hacen avanzar la igualdad profesional.",
      },
      de: {
        title: "WEL-zertifizierte Unternehmen – Women Equity Label",
        description:
          "Entdecken Sie die von WEL zertifizierten Unternehmen: Organisationen, die berufliche Gleichstellung messen, strukturieren und voranbringen.",
      },
      sv: {
        title: "WEL-certifierade företag – Women Equity Label",
        description:
          "Upptäck de WEL-certifierade företagen: organisationer som mäter, strukturerar och utvecklar jämställdheten i arbetslivet.",
      },
    },
  },
  {
    path: "/contact",
    meta: {
      fr: {
        title: "Contact | WEL – Women Equity Label",
        description:
          "Échangez avec l'équipe WEL sur la labellisation et l'accompagnement à l'égalité professionnelle.",
      },
      en: {
        title: "Contact | WEL – Women Equity Label",
        description:
          "Talk to the WEL team about certification and support for workplace gender equality.",
      },
      es: {
        title: "Contacto | WEL – Women Equity Label",
        description:
          "Hable con el equipo WEL sobre la certificación y el acompañamiento en igualdad profesional.",
      },
      de: {
        title: "Kontakt | WEL – Women Equity Label",
        description:
          "Sprechen Sie mit dem WEL-Team über Zertifizierung und Begleitung zur beruflichen Gleichstellung.",
      },
      sv: {
        title: "Kontakt | WEL – Women Equity Label",
        description:
          "Prata med WEL-teamet om certifiering och stöd för jämställdhet i arbetslivet.",
      },
    },
  },
  {
    path: "/mentions-legales",
    meta: {
      fr: {
        title: "Mentions légales | WEL – Women Equity Label",
        description:
          "Mentions légales du site womenequitylabel.fr : éditeur, hébergement, propriété intellectuelle et contact de WEL – Women Equity Label.",
      },
      en: {
        title: "Legal notice | WEL – Women Equity Label",
        description:
          "Legal notice for womenequitylabel.fr: publisher, hosting, intellectual property and contact details of WEL – Women Equity Label.",
      },
      es: {
        title: "Aviso legal | WEL – Women Equity Label",
        description:
          "Aviso legal de womenequitylabel.fr: editor, alojamiento, propiedad intelectual y contacto de WEL – Women Equity Label.",
      },
      de: {
        title: "Impressum | WEL – Women Equity Label",
        description:
          "Impressum von womenequitylabel.fr: Herausgeber, Hosting, geistiges Eigentum und Kontakt von WEL – Women Equity Label.",
      },
      sv: {
        title: "Juridisk information | WEL – Women Equity Label",
        description:
          "Juridisk information för womenequitylabel.fr: utgivare, webbhotell, immateriella rättigheter och kontakt för WEL.",
      },
    },
  },
  {
    path: "/politique-confidentialite",
    meta: {
      fr: {
        title: "Politique de confidentialité | WEL – Women Equity Label",
        description:
          "Politique de confidentialité de WEL : données collectées, finalités du traitement, durée de conservation et droits des utilisateurs.",
      },
      en: {
        title: "Privacy policy | WEL – Women Equity Label",
        description:
          "WEL privacy policy: data collected, purposes of processing, retention periods and user rights.",
      },
      es: {
        title: "Política de privacidad | WEL – Women Equity Label",
        description:
          "Política de privacidad de WEL: datos recogidos, finalidades del tratamiento, plazos de conservación y derechos de los usuarios.",
      },
      de: {
        title: "Datenschutzerklärung | WEL – Women Equity Label",
        description:
          "Datenschutzerklärung von WEL: erhobene Daten, Zwecke der Verarbeitung, Speicherdauer und Rechte der Nutzerinnen und Nutzer.",
      },
      sv: {
        title: "Integritetspolicy | WEL – Women Equity Label",
        description:
          "WEL:s integritetspolicy: insamlade uppgifter, ändamål med behandlingen, lagringstid och användarnas rättigheter.",
      },
    },
  },
  {
    path: "/gestion-cookies",
    meta: {
      fr: {
        title: "Gestion des cookies | WEL – Women Equity Label",
        description:
          "Gestion des cookies sur womenequitylabel.fr : cookies utilisés, finalités et modalités de paramétrage de vos préférences.",
      },
      en: {
        title: "Cookie settings | WEL – Women Equity Label",
        description:
          "Cookie management on womenequitylabel.fr: cookies used, purposes and how to set your preferences.",
      },
      es: {
        title: "Gestión de cookies | WEL – Women Equity Label",
        description:
          "Gestión de cookies en womenequitylabel.fr: cookies utilizadas, finalidades y cómo configurar sus preferencias.",
      },
      de: {
        title: "Cookie-Verwaltung | WEL – Women Equity Label",
        description:
          "Cookie-Verwaltung auf womenequitylabel.fr: verwendete Cookies, Zwecke und Einstellung Ihrer Präferenzen.",
      },
      sv: {
        title: "Hantering av cookies | WEL – Women Equity Label",
        description:
          "Hantering av cookies på womenequitylabel.fr: cookies som används, ändamål och hur du ställer in dina preferenser.",
      },
    },
  },
];

export interface PrerenderRoute {
  /** Route path inside the app, e.g. "/offres". */
  path: string;
  lang: Language;
  /** URL path including the language prefix, e.g. "/en/offres". */
  urlPath: string;
  title: string;
  description: string;
}

export const prerenderRoutes: PrerenderRoute[] = LANGUAGES.flatMap((lang) =>
  routeDefinitions.map((route) => ({
    path: route.path,
    lang,
    urlPath: `${langPrefix(lang)}${route.path === "/" ? "/" : route.path}`,
    title: route.meta[lang].title,
    description: route.meta[lang].description,
  }))
);

export { DEFAULT_LANGUAGE, LANGUAGES };
