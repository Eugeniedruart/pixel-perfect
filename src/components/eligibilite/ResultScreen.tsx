import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import type { EligibiliteFormData } from "@/lib/eligibilite-schema";
import ctaPortrait from "@/assets/eugenie-portrait.png";
import patternBg from "@/assets/pattern-hero-clean.png";

interface ResultScreenProps {
  data: EligibiliteFormData;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Animated bar ── */
const Bar = ({ pct, color, label, animate }: { pct: number; color: string; label: string; animate: boolean }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-semibold w-16 text-right shrink-0 text-foreground/70">{label}</span>
    <div className="flex-1 h-7 rounded-full bg-muted/60 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: animate ? `${pct}%` : "0%" }}
      />
    </div>
    <span className="text-sm font-bold w-10 shrink-0 text-foreground">{pct}%</span>
  </div>
);

/* ── Icon row for domestic work ── */
const PersonIcons = ({ count, color, animate }: { count: number; color: string; animate: boolean }) => (
  <div className="flex gap-1.5">
    {Array.from({ length: count }).map((_, i) => (
      <User
        key={i}
        className={`h-7 w-7 transition-all duration-500 ${color} ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        style={{ transitionDelay: `${i * 150}ms` }}
        fill="currentColor"
        strokeWidth={0}
      />
    ))}
  </div>
);

const ResultScreen = ({ data }: ResultScreenProps) => {
  const companyName = data.companyName?.trim() || "Votre entreprise";
  const { ref: statsRef, visible } = useInView(0.15);

  return (
    <div>
      {/* Decorative header */}
      <div className="relative overflow-hidden py-16 min-h-[420px]">
        <img src={patternBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Merci, nous avons bien reçu<br />
            votre <span className="font-serif-display italic font-normal">test d'éligibilité !</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Nos équipes analysent actuellement vos réponses et reviendront vers vous rapidement avec des recommandations adaptées.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
            <Link to="/contact">Je veux être Welbellisé <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <div className="mt-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Revenir à l'accueil</Link>
          </div>
        </div>
      </div>

      {/* Contact card */}
      <div className="max-w-3xl mx-auto px-4 -mt-2 mb-16">
        <div className="rounded-xl bg-wel-cream p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
          <img src={ctaPortrait} alt="Eugénie Druart" className="w-20 h-20 rounded-full object-cover shrink-0" />
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Votre contact privilégié WEL</p>
            <p className="text-sm text-muted-foreground mb-3">
              Ce n'est pas le genre qui doit décider des opportunités, mais le talent.<br />
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

      {/* ═══ Infographic stats section ═══ */}
      <div ref={statsRef} className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">État des lieux de</h2>
        <p className="text-2xl sm:text-3xl font-serif-display italic text-primary text-center mb-4">l'égalité professionnelle !</p>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12 text-sm sm:text-base">
          Les inégalités ne disparaissent pas avec le temps. Elles se cumulent.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* ── Bloc 1 : Tech ── */}
          <div
            className={`group rounded-2xl border border-border bg-background p-6 sm:p-7 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0ms" }}
          >
            
            <p className="font-bold text-foreground mb-5">Représentation des femmes dans le numérique</p>
            <div className="space-y-3 mb-4">
              <Bar pct={27} color="bg-wel-purple" label="Femmes" animate={visible} />
              <Bar pct={73} color="bg-wel-navy" label="Hommes" animate={visible} />
            </div>
            <p className="text-[11px] text-muted-foreground/60">Source : Commission européenne</p>
          </div>

          {/* ── Bloc 2 : Retraite ── */}
          <div
            className={`group rounded-2xl border border-border bg-background p-6 sm:p-7 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "120ms" }}
          >
            
            <p className="font-bold text-foreground mb-5">Écart de pension de retraite</p>
            <div className="space-y-3 mb-4">
              <Bar pct={100} color="bg-wel-blue" label="Hommes" animate={visible} />
              <Bar pct={60} color="bg-destructive" label="Femmes" animate={visible} />
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl font-bold text-destructive font-serif-display italic">–40%</span>
              <span className="text-xs text-muted-foreground">d'écart</span>
            </div>
            <p className="text-[11px] text-muted-foreground/60">Source : DREES</p>
          </div>

          {/* ── Bloc 3 : Travail domestique ── */}
          <div
            className={`group rounded-2xl border border-border bg-background p-6 sm:p-7 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "240ms" }}
          >
            
            <p className="font-bold text-foreground mb-5">Répartition du travail domestique</p>
            <div className="flex items-end justify-around mb-4 pt-2">
              {/* Femmes — 2x */}
              <div className="flex flex-col items-center gap-2">
                <PersonIcons count={4} color="text-wel-purple" animate={visible} />
                <PersonIcons count={4} color="text-wel-purple" animate={visible} />
                <span className="text-xs font-semibold text-foreground/70 mt-1">Femmes</span>
                <span className="text-lg font-bold text-wel-purple font-serif-display italic">2x</span>
              </div>
              <div className="text-2xl font-bold text-muted-foreground/30 self-center">vs</div>
              {/* Hommes — 1x */}
              <div className="flex flex-col items-center gap-2">
                <PersonIcons count={4} color="text-wel-navy" animate={visible} />
                <span className="text-xs font-semibold text-foreground/70 mt-1">Hommes</span>
                <span className="text-lg font-bold text-wel-navy font-serif-display italic">1x</span>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground/60">Source : INSEE</p>
          </div>

          {/* ── Bloc 4 : Rémunération ── */}
          <div
            className={`group rounded-2xl border border-border bg-background p-6 sm:p-7 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "360ms" }}
          >
            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Bloc 4</p>
            <p className="font-bold text-foreground mb-5">Écart de rémunération</p>
            {/* Gauge visual */}
            <div className="relative mx-auto w-40 h-40 mb-4">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                {/* Background ring */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" opacity="0.4" />
                {/* Hommes full ring */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--wel-blue))" strokeWidth="12"
                  strokeDasharray={`${314} 314`}
                  strokeLinecap="round" opacity="0.2"
                />
                {/* Femmes partial ring */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--destructive))" strokeWidth="12"
                  strokeDasharray={`${visible ? 314 * 0.78 : 0} 314`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-destructive font-serif-display italic">78%</span>
                <span className="text-[10px] text-muted-foreground">du salaire masculin</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl font-bold text-destructive font-serif-display italic">–22%</span>
              <span className="text-xs text-muted-foreground">d'écart</span>
            </div>
            <p className="text-[11px] text-muted-foreground/60">Source : INSEE</p>
          </div>
        </div>

        {/* Quote banner */}
        <div className="rounded-xl bg-primary p-8 sm:p-10 text-center">
          <p className="text-primary-foreground text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto font-serif-display italic">
            L'égalité professionnelle n'est ni acquise, ni automatique : elle demande une volonté, des moyens et des preuves
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
