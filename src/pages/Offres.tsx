import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  Heart,
  Eye,
  Rocket,
  Search,
  MessageSquare,
  FileText,
  CheckCircle2,
  MapPin,
  Handshake,
  Settings,
  Target,
} from "lucide-react";
import offresHero from "@/assets/offres-hero-v2.jpg";
import offresLabellisation from "@/assets/offres-labellisation.jpg";
import offresConseil from "@/assets/offres-conseil-v2.jpg";
import offresFormation from "@/assets/pexels-mizunokozuki-12899165.jpg";
import offresEnquetes from "@/assets/offres-enquetes.jpg";
import offresApproche from "@/assets/offres-approche.jpg";
import patternHero from "@/assets/pattern-hero-clean.png";

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
const formations = [
  { icon: Users, title: "Égalité femmes-hommes", desc: "Quelle place pour les hommes ?" },
  { icon: Heart, title: "Parentalité & carrière", desc: "Comprendre et réduire les inégalités" },
  { icon: Eye, title: "Sexisme ordinaire", desc: "Ce que nous ne voyons plus" },
  { icon: Rocket, title: "Femmes et leadership", desc: "Dynamiques d'accès aux responsabilités" },
  { icon: Search, title: "Process de recrutement", desc: "Adopter un process de recrutement inclusif" },
];

const approche = [
  { icon: MapPin, title: "Sur le terrain", text: "Pas de théorie déconnectée. Nous venons chez vous, nous écoutons, nous observons." },
  { icon: Handshake, title: "Avec vos équipes", text: "Nous travaillons avec ceux qui font tourner l'organisation, pas en chambre." },
  { icon: Settings, title: "À votre rythme", text: "Chaque entreprise est différente. Notre approche s'adapte à vos réalités." },
  { icon: Target, title: "Pour du concret", text: "Des résultats mesurables, traduits en actions concrètes et accompagnés de mises en relation ciblées, nous allons bien au-delà d'un simple rapport." },
];

/* ── page ── */
const Offres = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden">
        <img src={patternHero} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">Nos offres</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
                Agir concrètement
                <br />
                pour l'égalité{" "}
                <span className="font-serif-display italic text-primary font-normal">professionnelle</span>
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                De l'évaluation à la transformation, WEL accompagne les organisations dans des démarches concrètes, mesurables et durables.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Échanger avec nous</Link>
              </Button>
            </Reveal>
            <Reveal>
              <div className="relative hidden md:block">
                <img
                  src={offresHero}
                  alt="Échange professionnel authentique"
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-xl shadow-foreground/[0.06] object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK ─── */}
      <Reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <blockquote className="text-xl sm:text-2xl font-serif-display italic text-foreground/80 leading-relaxed">
            "L'égalité ne se décrète pas. Elle se construit, au quotidien, avec celles et ceux qui la font vivre."
          </blockquote>
        </div>
      </Reveal>

      {/* ─── 2. LABELLISATION ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={offresLabellisation}
                  alt="Équipe en réunion stratégique"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Labellisation</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Le label{" "}
                <span className="font-serif-display italic text-primary font-normal">WEL</span>
              </h2>
              <p className="font-serif-display italic text-primary/80 text-lg mb-6">
                Un label, mais surtout un levier de transformation.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Évaluer vos pratiques. Reconnaître vos engagements. Vous inscrire dans une trajectoire de progrès durable, alignée aux exigences françaises et européennes.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Un diagnostic structuré autour de 4 piliers concrets",
                  "Des critères mesurables, pas déclaratif",
                  "Une reconnaissance qui valorise l'action",
                  "Un atout pour vos appels d'offres et votre stratégie ESG",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                <Link to="/methodologie">Découvrir la méthodologie <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 3. CONSEIL & ACCOMPAGNEMENT ─── */}
      <section className="py-20 bg-[hsl(var(--wel-cream)/0.3)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Accompagnement</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
              Conseil &{" "}
              <span className="font-serif-display italic text-primary font-normal">accompagnement</span>
            </h2>
            <p className="font-serif-display italic text-primary/80 text-center text-lg mb-16">
              Parce que l'égalité ne se décrète pas, elle se construit.
            </p>
          </Reveal>

          {/* 3.1 Formations */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <Reveal>
              <div className="relative">
                <img
                  src={offresFormation}
                  alt="Formation en entreprise"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full md:w-[85%] max-h-[200px] md:max-h-[400px]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Sensibilisation</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Formations &{" "}
                <span className="font-serif-display italic text-primary font-normal">conférences</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Des interventions conçues pour faire évoluer les regards et déclencher l'action.
              </p>
              <div className="space-y-4">
                {formations.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                      <f.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 3.2 Enquêtes */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <Reveal className="order-2 md:order-1">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Écoute</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Enquêtes{" "}
                <span className="font-serif-display italic text-primary font-normal">internes</span>
              </h3>
              <p className="font-serif-display italic text-primary/70 text-base mb-4">
                Donner la parole pour mieux comprendre et agir.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Des enquêtes quantitatives et qualitatives pour mesurer la perception, identifier les zones de risque et objectiver les enjeux.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Search, text: "Baromètres internes" },
                  { icon: MessageSquare, text: "Enquêtes anonymes" },
                  { icon: FileText, text: "Analyse et recommandations" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <b.icon className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-sm text-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={offresEnquetes}
                  alt="Échange entre collaborateurs"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>

          {/* 3.3 Missions de conseil */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src={offresConseil}
                  alt="Atelier collaboratif"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full aspect-[4/3]"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Sur mesure</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Missions de{" "}
                <span className="font-serif-display italic text-primary font-normal">conseil</span>
              </h3>
              <p className="font-serif-display italic text-primary/70 text-base mb-4">
                Transformer les intentions en actions concrètes.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Structurer votre stratégie, préparer vos audits, déployer vos plans d'action, communiquer en interne et en externe — nous vous accompagnons à chaque étape.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Stratégie", "Conformité", "Plans d'action", "Communication", "Audits"].map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK 2 ─── */}
      <Reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <blockquote className="text-xl sm:text-2xl font-serif-display italic text-foreground/80 leading-relaxed">
            "Un label n'a de valeur que par les transformations qu'il engage. C'est là que se mesure l'impact."
          </blockquote>
        </div>
      </Reveal>

      {/* ─── 4. NOTRE APPROCHE ─── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">Ce qui nous distingue</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Notre{" "}
              <span className="font-serif-display italic text-primary font-normal">approche</span>
            </h2>
            <p className="font-serif-display italic text-primary/70 text-center text-lg mb-10">
              Moins de slides, plus de terrain.
            </p>
          </Reveal>

          {/* Full-width image */}
          <Reveal>
            <div className="relative rounded-lg overflow-hidden mb-12">
              <img
                src={offresApproche}
                alt="Équipe en atelier collaboratif"
                width={1200}
                height={600}
                loading="lazy"
                className="w-full h-64 sm:h-80 object-cover object-bottom"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-lg" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {approche.map((item, i) => (
              <Reveal key={i}>
                <div className="group relative rounded-2xl border border-border bg-background p-6 hover:border-primary/20 hover:shadow-md hover:shadow-foreground/[0.03] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. CTA FINAL ─── */}
      <section className="py-24 bg-[hsl(var(--wel-cream)/0.25)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Parlons-en</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Échangeons sur votre{" "}
              <span className="font-serif-display italic text-primary font-normal">démarche</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Chaque organisation est unique. Discutons de vos enjeux pour construire ensemble la bonne approche.
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
