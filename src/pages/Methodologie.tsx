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
  ClipboardList,
  Search,
  Clock,
} from "lucide-react";
import patternHero from "@/assets/pattern-hero-clean.png";
import welCertifiedDark from "@/assets/wel-certified-dark.png";
import corporateMeeting from "@/assets/corporate-meeting.jpg";
import constructionWorkers from "@/assets/pexels-mikael-blomkvist-8961026.jpg";
import corporateLeadership from "@/assets/pexels-kampus-8190807.jpg";

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
  { num: "04", title: "Labellisation : pas un verdict, un levier de transformation", desc: "Restitution des résultats et mise en place d'une trajectoire de progrès durable." },
];

const timelineNodes = [
  { label: "Éligibilité", icon: ClipboardList },
  { label: "Diagnostic", icon: Search },
  { label: "Analyse", icon: BarChart3 },
  { label: "Labellisation", icon: Award },
];
const delays = ["~ 1 semaine", "~ 1 semaine", "2 à 3 semaines"];

const impacts = [
  { icon: TrendingUp, title: "Valorisation extra-financière", desc: "Structurez et objectivez vos engagements ESG." },
  { icon: Award, title: "Stratégie ESG renforcée", desc: "Intégrez l'égalité professionnelle à votre reporting durable." },
  { icon: Briefcase, title: "Avantage appels d'offres", desc: "Un atout différenciant dans les marchés publics et privés." },
];

const results = [
  { icon: FileText, title: "Plan d'action personnalisé", desc: "Un plan structuré, priorisé et adapté à vos enjeux, avec des actions concrètes et un rétro-planning pour progresser efficacement." },
  { icon: BarChart3, title: "Rapport d'indicateurs extra-financiers", desc: "Une synthèse claire de vos performances en égalité professionnelle, pour piloter votre stratégie et valoriser vos engagements." },
  { icon: Megaphone, title: "Kit de communication", desc: "Des éléments clés pour valoriser votre démarche en interne et en externe, en cohérence avec votre positionnement." },
  { icon: Handshake, title: "Écosystème de partenaires", desc: "Un accès à des acteurs engagés (formation, accompagnement, sensibilisation) pour déployer concrètement vos actions." },
];

/* ── page ── */
const Methodologie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        <img
          src={patternHero}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Méthodologie</p>
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Notre{" "}
                <span className="font-serif-display italic text-primary font-normal">méthodologie</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed mb-5 md:mb-8">
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
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Le référentiel</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">
              Une approche structurée autour de{" "}
              <span className="font-serif-display italic text-primary font-normal">4 piliers</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base text-center max-w-2xl mx-auto mb-8 md:mb-14">
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
      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Conformité & crédibilité</p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 md:mb-6">
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
              <div className="rounded-2xl border border-border bg-background p-6 md:p-8 lg:p-10 flex items-center justify-center shadow-sm">
                <img src={welCertifiedDark} alt="WEL Certified" className="w-28 md:w-44 h-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. AU-DELÀ DE LA CONFORMITÉ (image left) ─── */}
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={constructionWorkers}
                  alt="Professionnels sur un chantier"
                  width={1280}
                  height={854}
                  loading="lazy"
                  className="shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3] object-[center_30%] scale-[1.15]"
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
          {/* ── Timeline infographic ── */}
          <Reveal>
            {/* Desktop */}
            <div className="hidden md:block max-w-3xl mx-auto mb-14">
              <div className="relative">
                {/* Track line */}
                <div className="absolute top-[24px] left-[48px] right-[48px] h-[2px] bg-border">
                  <div
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{ background: "linear-gradient(90deg, hsl(var(--wel-purple)), hsl(var(--wel-blue)), hsl(var(--wel-purple)))" }}
                  />
                </div>

                {/* Nodes row */}
                <div className="relative grid grid-cols-7 items-start">
                  {timelineNodes.map((node, i) => (
                    <>
                      {/* Node */}
                      <div key={`node-${i}`} className={`flex flex-col items-center ${i === 0 ? "col-start-1" : ""}`} style={{ gridColumn: i * 2 + 1 }}>
                        <div
                          className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white relative z-10"
                          style={{
                            background: "linear-gradient(135deg, hsl(var(--wel-purple)), hsl(var(--wel-navy)))",
                            boxShadow: "0 4px 14px hsla(var(--wel-purple), 0.3)",
                          }}
                        >
                          <node.icon size={20} strokeWidth={2} />
                        </div>
                        <span className="mt-2 text-[11px] font-bold tracking-widest uppercase text-primary">
                          {node.label}
                        </span>
                      </div>
                      {/* Delay badge */}
                      {i < delays.length && (
                        <div key={`delay-${i}`} className="flex items-start justify-center pt-[14px]" style={{ gridColumn: i * 2 + 2 }}>
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap"
                            style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))" }}
                          >
                            {delays[i]}
                          </span>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              {/* Total duration */}
              <div className="flex justify-center mt-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))", border: "1px solid hsla(var(--wel-purple), 0.15)" }}
                >
                  <Clock size={14} />
                  Durée totale estimée : 4 à 6 semaines
                </span>
              </div>
            </div>

            {/* Mobile / Tablet */}
            <div className="md:hidden relative pl-8 mb-14">
              {/* Vertical line */}
              <div
                className="absolute left-[28px] top-4 bottom-12 w-[2px] opacity-40"
                style={{ background: "linear-gradient(180deg, hsl(var(--wel-purple)), hsl(var(--wel-blue)), hsl(var(--wel-purple)))" }}
              />
              {timelineNodes.map((node, i) => (
                <div key={i} className="relative flex items-start gap-4 mb-8">
                  <div
                    className="relative z-10 w-[38px] h-[38px] rounded-full flex items-center justify-center text-white shrink-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--wel-purple)), hsl(var(--wel-navy)))",
                      boxShadow: "0 3px 10px hsla(var(--wel-purple), 0.3)",
                    }}
                  >
                    <node.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="pt-1.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                      Étape {node.label === "Éligibilité" ? "01" : node.label === "Diagnostic" ? "02" : node.label === "Analyse" ? "03" : "04"}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{node.label}</p>
                    {i < delays.length && (
                      <span
                        className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))" }}
                      >
                        {delays[i]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="ml-[54px]">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium"
                  style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))", border: "1px solid hsla(var(--wel-purple), 0.15)" }}
                >
                  <Clock size={13} />
                  Durée totale : 6 à 8 semaines
                </span>
              </div>
            </div>
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
                Un comité composé d'experts indépendants, DRH, juristes, chercheurs et dirigeants, qui garantit la rigueur, la cohérence et l'intégrité du référentiel WEL.
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Livrables</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Des résultats{" "}
              <span className="font-serif-display italic text-primary font-normal">concrets</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              À l'issue de la démarche, vous recevez des livrables opérationnels pour structurer et valoriser votre engagement.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-border bg-[hsl(var(--wel-cream)/0.35)] backdrop-blur-sm p-6 h-full hover:border-primary/20 hover:shadow-lg hover:shadow-foreground/[0.04] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-5">
                    <r.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
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