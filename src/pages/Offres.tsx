import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  CheckCircle2,
  ClipboardList,
  BarChart3,
  Megaphone,
  Network,
  Users,
  Mic,
  Search,
  ShieldCheck,
  Lightbulb,
  Target,
  Building2,
  Eye,
  FileText,
  MessageSquare,
  ArrowRight,
  Compass,
  Scale,
  Heart,
  Rocket,
} from "lucide-react";
import offresHero from "@/assets/offres-hero.jpg";
import offresLabellisation from "@/assets/offres-labellisation.jpg";
import offresEnquetes from "@/assets/offres-enquetes.jpg";

/* ── scroll reveal ── */
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
const labellisationBullets = [
  { icon: ClipboardList, text: "Évaluation structurée autour de 4 piliers" },
  { icon: BarChart3, text: "Critères mesurables et analyse rigoureuse" },
  { icon: ShieldCheck, text: "Reconnaissance des engagements" },
  { icon: Megaphone, text: "Valorisation extra-financière et appels d'offres" },
];

const formations = [
  { icon: Users, title: "Égalité femmes-hommes", desc: "Quelle place pour les hommes ?" },
  { icon: Heart, title: "Parentalité & carrière", desc: "Comprendre et réduire les inégalités" },
  { icon: Eye, title: "Sexisme ordinaire", desc: "Ce que nous ne voyons plus" },
  { icon: Rocket, title: "Femmes et leadership", desc: "Dynamiques d'accès aux responsabilités" },
];

const enquetesBullets = [
  { icon: Search, text: "Baromètres internes" },
  { icon: MessageSquare, text: "Enquêtes anonymes" },
  { icon: FileText, text: "Analyse et recommandations" },
];

const missionsBullets = [
  "Structuration de la stratégie",
  "Mise en conformité réglementaire",
  "Déploiement de plans d'action",
  "Communication interne & externe",
  "Préparation aux audits",
];

const pourquoiWel = [
  { icon: Compass, title: "Approche stratégique et opérationnelle", desc: "Un cadre alliant vision et pragmatisme." },
  { icon: Scale, title: "Expertise terrain et réglementaire", desc: "Une maîtrise des réalités et du cadre légal." },
  { icon: Building2, title: "Adapté à chaque organisation", desc: "Des solutions sur mesure, pas de modèle unique." },
  { icon: Target, title: "Vision long terme", desc: "Une trajectoire de progrès durable." },
];

/* ── page ── */
const Offres = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <img
          src={offresHero}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Women Equity Label</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Nos{" "}
                <span className="font-serif-display italic text-primary font-normal">offres</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Structurer, déployer et valoriser votre démarche d'égalité professionnelle.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/methodologie">Découvrir la méthodologie</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── divider ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* ─── 2. LABELLISATION ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Offre principale</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Labellisation{" "}
                <span className="font-serif-display italic text-primary font-normal">WEL</span>
              </h2>
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                Structurer, mesurer et valoriser votre engagement
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Le label WEL permet d'évaluer votre organisation selon une méthodologie rigoureuse, alignée aux exigences françaises et européennes. Au-delà de la conformité, il valorise les actions concrètes et inscrit votre organisation dans une trajectoire de progrès durable.
              </p>
              <div className="space-y-3 mb-8">
                {labellisationBullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                      <b.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                <Link to="/methodologie">Découvrir la méthodologie <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
            <Reveal>
              <div className="relative">
                <img
                  src={offresLabellisation}
                  alt="Comité stratégique en réunion"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-2xl shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 3. CONSEIL & ACCOMPAGNEMENT ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.35)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Accompagnement</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
              Conseil &{" "}
              <span className="font-serif-display italic text-primary font-normal">accompagnement</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Passer de l'intention à l'action.
            </p>
          </Reveal>

          {/* 3.1 Formations */}
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Expertise</p>
            <h3 className="text-2xl font-bold mb-8">
              Formations &{" "}
              <span className="font-serif-display italic text-primary font-normal">conférences</span>
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {formations.map((f, i) => (
              <Reveal key={i}>
                <div className="group rounded-2xl border border-border bg-background p-6 h-full hover:shadow-md hover:shadow-foreground/[0.03] hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/[0.06] flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{f.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 3.2 Enquêtes internes */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Diagnostic</p>
              <h3 className="text-2xl font-bold mb-4">
                Enquêtes{" "}
                <span className="font-serif-display italic text-primary font-normal">internes</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Des enquêtes quantitatives et qualitatives pour mesurer la perception des collaborateurs, identifier les zones de risque et objectiver les enjeux.
              </p>
              <div className="space-y-3">
                {enquetesBullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                      <b.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative">
                <img
                  src={offresEnquetes}
                  alt="Équipe RH en échange"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-2xl shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>

          {/* 3.3 Missions de conseil */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="rounded-2xl border border-border bg-background p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Sur mesure</p>
                <h3 className="text-2xl font-bold mb-4">
                  Missions de{" "}
                  <span className="font-serif-display italic text-primary font-normal">conseil</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Un accompagnement sur mesure pour structurer et déployer une stratégie d'égalité professionnelle adaptée à votre organisation.
                </p>
                <div className="space-y-2.5">
                  {missionsBullets.map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <p className="text-sm text-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-col items-center justify-center text-center p-8">
                <Lightbulb className="h-12 w-12 text-primary/30 mb-6" />
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Chaque mission est conçue autour de vos enjeux spécifiques, pour un impact concret et mesurable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 4. POURQUOI WEL ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Nos forces</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
              Pourquoi{" "}
              <span className="font-serif-display italic text-primary font-normal">WEL</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pourquoiWel.map((item, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-[hsl(var(--wel-cream)/0.5)] to-background p-6 h-full text-center hover:shadow-md hover:shadow-foreground/[0.03] hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mx-auto mb-5">
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

      {/* ─── 5. CTA FINAL ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.35)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Échangeons sur votre{" "}
              <span className="font-serif-display italic text-primary font-normal">démarche</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Notre équipe vous accompagne pour structurer et valoriser votre engagement pour l'égalité professionnelle.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offres;
