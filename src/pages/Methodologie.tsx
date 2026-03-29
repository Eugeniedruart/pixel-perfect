import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  Scale,
  Users,
  ShieldCheck,
  Heart,
  CheckCircle2,
  FileText,
  BarChart3,
  Megaphone,
  Handshake,
  TrendingUp,
  Award,
  Briefcase,
} from "lucide-react";
import patternHero from "@/assets/pattern-hero-clean.png";
import welCertifiedDark from "@/assets/wel-certified-dark.png";
import corporateMeeting from "@/assets/corporate-meeting.jpg";
import corporateCollaboration from "@/assets/corporate-collaboration.jpg";
import corporateLeadership from "@/assets/corporate-leadership.jpg";

/* ── scroll reveal hook ── */
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0", "translate-y-4");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`opacity-0 translate-y-4 ${className}`} style={{ animationFillMode: "forwards" }}>
      {children}
    </div>
  );
};

/* ── data ── */
const pillars = [
  { emoji: "⚖️", title: "Égalité salariale", desc: "Analyse des écarts de rémunération et des pratiques d'égalité salariale." },
  { emoji: "👥", title: "Représentation dans les instances de décision", desc: "Mesure de la représentation des femmes aux postes de cadres dirigeants, au sein des comités exécutifs (COMEX) et des conseils d'administration." },
  { emoji: "🛡️", title: "Prévention du sexisme et du harcèlement", desc: "Évaluation des dispositifs de prévention et de la culture inclusive." },
  { emoji: "💜", title: "Équilibre de vie", desc: "Politiques de flexibilité, parentalité et bien-être au travail." },
];

const steps = [
  { num: "01", title: "Évaluation de l'éligibilité", desc: "Vérification des prérequis réglementaires et de la conformité de base." },
  { num: "02", title: "Diagnostic sur site", desc: "Intervention des équipes WEL au sein de votre organisation pour un audit structuré." },
  { num: "03", title: "Analyse et revue experte", desc: "Revue approfondie des données collectées par notre comité d'experts." },
  { num: "04", title: "Résultats et structuration", desc: "Restitution des résultats et mise en place d'une trajectoire de progrès durable." },
];

const impacts = [
  { icon: TrendingUp, title: "Valorisation extra-financière", desc: "Structurez et objectivez vos engagements ESG." },
  { icon: Award, title: "Stratégie ESG renforcée", desc: "Intégrez l'égalité professionnelle à votre reporting durable." },
  { icon: Briefcase, title: "Avantage appels d'offres", desc: "Un atout différenciant dans les marchés publics et privés." },
];

const results = [
  { icon: FileText, title: "Plan d'action personnalisé" },
  { icon: BarChart3, title: "Indicateurs extra-financiers" },
  { icon: Megaphone, title: "Kit de communication" },
  { icon: Handshake, title: "Écosystème de partenaires" },
];

/* ── page ── */
const Methodologie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <img
          src={corporateCollaboration}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Méthodologie</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Notre{" "}
                <span className="font-serif-display italic text-primary font-normal">méthodologie</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Une approche rigoureuse, structurée et alignée aux exigences françaises et européennes.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/contact">Découvrir notre approche</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── thin divider ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* ─── 2. 4 PILIERS ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Le référentiel</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Une approche structurée autour de{" "}
              <span className="font-serif-display italic text-primary font-normal">4 piliers</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              Quatre dimensions fondamentales couvrant l'ensemble des enjeux de l'égalité professionnelle.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={i}>
                <div className="group rounded-2xl border border-border bg-gradient-to-br from-[hsl(var(--wel-cream)/0.5)] to-background p-6 h-full hover:shadow-md hover:shadow-foreground/[0.03] hover:border-primary/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mb-5">
                    <span className="text-xl">{p.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CONFORMITÉ & CRÉDIBILITÉ (image right) ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Conformité & crédibilité</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Un référentiel aligné aux{" "}
                <span className="font-serif-display italic text-primary font-normal">exigences légales</span>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Aligné aux lois françaises (Index Égalité, loi Rixain) et directives européennes",
                  "Seules les entreprises conformes peuvent être labellisées",
                  "Complémentaire à l'Index Égalité Professionnelle",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-border bg-background p-8 lg:p-10 flex items-center justify-center shadow-sm">
                <img src={welCertifiedDark} alt="WEL Certified" className="w-44 h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. AU-DELÀ DE LA CONFORMITÉ (image left) ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={corporateCollaboration}
                  alt="Collaboration entre professionnels"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="rounded-2xl shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Au-delà de la conformité</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Valoriser les{" "}
                <span className="font-serif-display italic text-primary font-normal">actions concrètes</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                WEL valorise les démarches engagées des entreprises, quels que soient leur secteur et leurs réalités opérationnelles, en reconnaissant les initiatives concrètes mises en œuvre, y compris lorsque certains équilibres sont structurellement plus difficiles à atteindre.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── thin divider ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* ─── 5. TIMELINE / ÉTAPES ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Le processus</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Une démarche en{" "}
              <span className="font-serif-display italic text-primary font-normal">4 étapes</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i}>
                <div className="relative rounded-2xl border border-border bg-background p-6 h-full hover:shadow-md hover:shadow-foreground/[0.03] transition-all duration-300">
                  <span className="text-4xl font-bold text-primary/[0.07] absolute top-4 right-5">{step.num}</span>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. GOUVERNANCE (image right) ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Gouvernance</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Un comité éthique{" "}
                <span className="font-serif-display italic text-primary font-normal">indépendant</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Composé de dirigeants, avocats, DRH et académiciens, le comité éthique supervise le référentiel et les standards du label, garantissant la rigueur, la cohérence et la crédibilité de la démarche.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dirigeants", "Avocats", "DRH", "Académiciens"].map((role, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative">
                <img
                  src={corporateLeadership}
                  alt="Comité de direction en réunion"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="rounded-2xl shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 7. IMPACT & VALEUR ESG ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Impact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Un levier de{" "}
              <span className="font-serif-display italic text-primary font-normal">valeur ESG</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <Reveal key={i}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(var(--wel-cream)/0.4)] p-6 text-center h-full hover:shadow-md hover:shadow-foreground/[0.03] transition-all duration-300">
                  <div className="relative w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── thin divider ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* ─── 8. RÉSULTATS CONCRETS ─── */}
      <section className="relative overflow-hidden py-20">
        <img src={patternHero} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.65]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Livrables</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Des résultats{" "}
              <span className="font-serif-display italic text-primary font-normal">concrets</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-border bg-background p-6 text-center h-full hover:border-primary/20 hover:shadow-md hover:shadow-foreground/[0.03] transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mx-auto mb-4">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{r.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. TARIFICATION ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-background p-10 lg:p-14 text-center shadow-sm">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Tarification</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Les modalités d'accompagnement WEL débutent à partir de <strong className="text-foreground">3 900€</strong> et sont ajustées en fonction de la taille de l'organisation et du périmètre du diagnostic. Une brochure détaillant l'offre est disponible sur demande.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/contact">Demander la brochure</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodologie;