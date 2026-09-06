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
  { path: "/mentions-legales", title: "Mentions légales | WEL – Women Equity Label" },
  { path: "/politique-confidentialite", title: "Politique de confidentialité | WEL – Women Equity Label" },
  { path: "/gestion-cookies", title: "Gestion des cookies | WEL – Women Equity Label" },
];
