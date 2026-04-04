import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DecorativeBackground from "@/components/eligibilite/DecorativeBackground";

import type { EligibiliteFormData } from "@/lib/eligibilite-schema";
import ctaPortrait from "@/assets/cta-portrait.jpg";
interface ResultScreenProps {
  data: EligibiliteFormData;
}

const stats = [
  {
    title: "Les Femmes dans le numérique",
    value: "24%",
    description: "contre 76% d'hommes",
    source: "Source : xxxxxx",
  },
  {
    title: "Le Travail domestique",
    value: "71%",
    description: "du travail domestique non rémunéré est fait par les femmes",
    source: "Source : xxxxxx",
  },
  {
    title: "Les femmes dirigeantes",
    value: "22%",
    description: "contre 78% d'hommes",
    source: "Source : Banque de France",
  },
  {
    title: "Les postes les mieux rémunérés dans le privé",
    value: "24%",
    description: "de ces postes sont occupés par des femmes",
    source: "Source : Fondation des Femmes & Genres",
  },
];

const ResultScreen = ({ data }: ResultScreenProps) => {
  const companyName = data.companyName?.trim() || "Votre entreprise";

  return (
    <div>
      {/* Decorative header */}
      <div className="relative overflow-hidden py-16 min-h-[420px]">
        {/* Quarter-circle grid background */}
        <div className="absolute inset-0 opacity-60">
          <DecorativeBackground />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bravo, {companyName}
            <br />
            est éligible au{" "}
            <span className="font-serif-display italic font-normal">
              Women Equity Label !
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Votre entreprise répond aux critères d'éligibilité du Women Equity Label.
            Vous pouvez dès maintenant entamer votre démarche de labellisation pour
            valoriser vos engagements en faveur de l'égalité professionnelle.
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
            <Link to="/contact">
              Je veux être Welbellisé <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <div className="mt-4">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Revenir à l'accueil
            </Link>
          </div>
        </div>
      </div>

      {/* Contact card */}
      <div className="max-w-3xl mx-auto px-4 -mt-2 mb-16">
        <div className="rounded-xl bg-wel-cream p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
          <img
            src={ctaPortrait}
            alt="Eugénie Druart"
            className="w-20 h-20 rounded-full object-cover shrink-0"
          />
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Votre contact privilégié WEL
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Ma conviction : l'égalité doit devenir un véritable indicateur de performance,
              et non une simple célébration annuelle. Cette conviction a donné naissance au
              label Women Equity Label !
            </p>
            <p className="font-bold text-foreground">Eugénie Druart</p>
            <p className="text-sm text-muted-foreground mb-3">Fondatrice du label WEL</p>
            <Button variant="outline" size="sm">
              Contacter par e-mail
            </Button>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          État des lieux de
        </h2>
        <p className="text-2xl sm:text-3xl font-serif-display italic text-primary text-center mb-10">
          l'égalité professionnelle !
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.title} className="border border-border rounded-xl p-6">
              <p className="font-bold text-foreground mb-2">{stat.title}</p>
              <p className="text-4xl font-bold text-primary font-serif-display italic mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="rounded-xl bg-primary p-8 sm:p-10 text-center">
          <p className="text-primary-foreground text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto font-serif-display italic">
            L'égalité professionnelle n'est ni acquise, ni automatique : elle demande une
            volonté, des moyens et des preuves
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
