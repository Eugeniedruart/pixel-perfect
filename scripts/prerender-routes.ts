export const SITE_URL = "https://www.womenequitylabel.fr";

export interface PrerenderRoute {
  path: string;
  title?: string;
  description?: string;
}

export const prerenderRoutes: PrerenderRoute[] = [
  { path: "/" },
  {
    path: "/offres",
    title: "Nos offres | WEL – Women Equity Label",
    description:
      "Labellisation, formations, enquêtes internes et missions de conseil : les offres WEL pour structurer l'égalité professionnelle femmes-hommes.",
  },
  {
    path: "/methodologie",
    title: "Méthodologie du label | WEL – Women Equity Label",
    description:
      "Découvrez la méthodologie WEL : diagnostic, analyse, labellisation et plan d'action pour progresser sur l'égalité professionnelle.",
  },
  {
    path: "/eligibilite",
    title: "Testez votre éligibilité | WEL – Women Equity Label",
    description:
      "Vérifiez en quelques minutes si votre organisation est éligible au label WEL pour l'égalité professionnelle femmes-hommes.",
  },
  {
    path: "/contact",
    title: "Contact | WEL – Women Equity Label",
    description: "Échangez avec l'équipe WEL sur la labellisation et l'accompagnement à l'égalité professionnelle.",
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales | WEL – Women Equity Label",
    description: "Mentions légales du site womenequitylabel.fr : éditeur, hébergement, propriété intellectuelle et contact de WEL – Women Equity Label.",
  },
  {
    path: "/politique-confidentialite",
    title: "Politique de confidentialité | WEL – Women Equity Label",
    description: "Politique de confidentialité de WEL : données collectées, finalités du traitement, durée de conservation et droits des utilisateurs.",
  },
  {
    path: "/gestion-cookies",
    title: "Gestion des cookies | WEL – Women Equity Label",
    description: "Gestion des cookies sur womenequitylabel.fr : cookies utilisés, finalités et modalités de paramétrage de vos préférences.",
  },
];
