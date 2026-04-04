import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import type { EligibiliteFormData } from "@/lib/eligibilite-schema";
import ctaPortrait from "@/assets/eugenie-portrait.png";
import patternBg from "@/assets/pattern-hero-clean.png";

interface ResultScreenProps {
  data: EligibiliteFormData;
}

const stats = [
  {
    value: "27%",
    description: "des emplois du numérique sont occupés par des femmes",
    source: "Source : Commission européenne",
    color: "wel-purple" as const,
  },
  {
    value: "–40%",
    description: "d'écart de pension de retraite entre les femmes et les hommes",
    source: "Source : DREES",
    color: "wel-navy" as const,
  },
  {
    value: "2x plus",
    description: "de temps consacré aux tâches domestiques par les femmes",
    source: "Source : INSEE",
    color: "wel-blue" as const,
  },
  {
    value: "–22%",
    description: "d'écart de rémunération entre les femmes et les hommes",
    source: "Source : INSEE",
    color: "destructive" as const,
  },
];

const colorMap = {
  "wel-purple": { bg: "bg-wel-blue-light", text: "text-wel-purple", border: "border-wel-purple/20", accent: "bg-wel-purple" },
  "wel-navy": { bg: "bg-wel-blue-light", text: "text-wel-navy", border: "border-wel-navy/20", accent: "bg-wel-navy" },
  "wel-blue": { bg: "bg-wel-blue-light", text: "text-wel-blue", border: "border-wel-blue/20", accent: "bg-wel-blue" },
  "destructive": { bg: "bg-red-50", text: "text-destructive", border: "border-destructive/20", accent: "bg-destructive" },
};

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const ResultScreen = ({ data }: ResultScreenProps) => {
  const companyName = data.companyName?.trim() || "Votre entreprise";
  const { ref: statsRef, visible: statsVisible } = useInView();

  return (
    <div>
      {/* Decorative header */}
      <div className="relative overflow-hidden py-16 min-h-[420px]">
        <img src={patternBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Merci, nous avons bien reçu
            <br />
            votre{" "}
            <span className="font-serif-display italic font-normal">
              test d'éligibilité !
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Nos équipes analysent actuellement vos réponses et reviendront vers vous rapidement avec des recommandations adaptées.
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
              Ce n'est pas le genre qui doit décider des opportunités, mais le talent.
              <br />
              Notre rôle est de structurer les conditions pour que cette promesse devienne une réalité.
            </p>
            <p className="font-bold text-foreground">Eugénie Druart</p>
            <p className="text-sm text-muted-foreground mb-3">Fondatrice du label WEL</p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contacter par e-mail</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div ref={statsRef} className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          État des lieux de
        </h2>
        <p className="text-2xl sm:text-3xl font-serif-display italic text-primary text-center mb-4">
          l'égalité professionnelle !
        </p>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-10 text-sm sm:text-base">
          Les inégalités ne disparaissent pas avec le temps. Elles se cumulent.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color];
            return (
              <div
                key={i}
                className={`group relative rounded-2xl border ${c.border} ${c.bg} p-7 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${c.accent} opacity-60`} />

                <p className={`text-5xl sm:text-6xl font-bold ${c.text} font-serif-display italic leading-none mb-3 mt-2`}>
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-foreground/80 leading-snug mb-3">
                  {stat.description}
                </p>
                <p className="text-xs text-muted-foreground/70">{stat.source}</p>
              </div>
            );
          })}
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
