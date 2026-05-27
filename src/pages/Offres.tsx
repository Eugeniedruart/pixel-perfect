import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, Users, Heart, Eye, Rocket, Search, MessageSquare, FileText,
  CheckCircle2, MapPin, Handshake, Settings, Target, ChevronDown,
} from "lucide-react";
import offresHero from "@/assets/offres-hero-v2.jpg";
import offresLabellisation from "@/assets/offres-labellisation.jpg";
import offresConseil from "@/assets/offres-conseil-v2.jpg";
import offresFormation from "@/assets/pexels-mizunokozuki-12899165.jpg";
import offresEnquetes from "@/assets/offres-enquetes.jpg";
import offresApproche from "@/assets/offres-approche.jpg";
import patternHero from "@/assets/pattern-hero-clean.png";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("animate-fade-in"); el.classList.remove("opacity-0", "translate-y-4"); obs.unobserve(el); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useScrollReveal();
  return <div ref={ref} className={`opacity-0 translate-y-4 ${className}`} style={{ animationFillMode: "forwards" }}>{children}</div>;
};

const formationIcons = [Users, Heart, Eye, Rocket, Search];
const approcheIcons = [MapPin, Handshake, Settings, Target];
const enqueteIcons = [Search, MessageSquare, FileText];

const ApprochAccordionCard = ({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left rounded-2xl border border-border bg-background p-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-primary" /></div>
        <h3 className="font-semibold text-foreground text-sm flex-1">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground text-xs leading-relaxed pl-12">{text}</p>
      </div>
    </button>
  );
};

const Offres = () => {
  const { t } = useTranslation();
  const formations = (t("offres.formations", { returnObjects: true }) as Array<{ title: string; desc: string }>).map((f, i) => ({ ...f, icon: formationIcons[i] }));
  const labelBullets = t("offres.labelBullets", { returnObjects: true }) as string[];
  const enquetesBullets = (t("offres.enquetesBullets", { returnObjects: true }) as string[]).map((text, i) => ({ icon: enqueteIcons[i], text }));
  const missionsTags = t("offres.missionsTags", { returnObjects: true }) as string[];
  const approche = (t("offres.approche", { returnObjects: true }) as Array<{ title: string; text: string }>).map((a, i) => ({ ...a, icon: approcheIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden">
        <img src={patternHero} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-[70%] object-cover opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-5">{t("offres.eyebrow")}</p>
              <h1 className="text-2xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-4 md:mb-6">
                {t("offres.title1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("offres.title2")}</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed mb-5 md:mb-8 max-w-lg">
                {t("offres.subtitle")}
              </p>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-11" asChild>
                <Link to="/contact">{t("offres.heroCta")}</Link>
              </Button>
            </Reveal>
            <Reveal>
              <div className="relative hidden md:block">
                <img src={offresHero} alt="" width={1280} height={720} className="rounded-lg shadow-xl shadow-foreground/[0.06] object-cover w-full aspect-[4/3]" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-10 -mt-2 text-center">
          <blockquote className="text-lg sm:text-2xl font-serif-display italic text-foreground/80 leading-relaxed">
            {t("offres.quote1")}
          </blockquote>
        </div>
      </Reveal>

      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                <img src={offresLabellisation} alt="" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3]" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("offres.labelEyebrow")}</p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-2 md:mb-3">
                {t("offres.labelTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("offres.labelTitle2")}</span>
              </h2>
              <p className="font-serif-display italic text-primary/80 text-base md:text-lg mb-4 md:mb-6">{t("offres.labelTagline")}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{t("offres.labelIntro")}</p>
              <div className="space-y-2 md:space-y-3 mb-5 md:mb-8">
                {labelBullets.map((text, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs md:text-sm text-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto h-11" asChild>
                <Link to="/methodologie">{t("offres.labelCta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.3)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("offres.conseilEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 md:mb-3">
              {t("offres.conseilTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("offres.conseilTitle2")}</span>
            </h2>
            <p className="font-serif-display italic text-primary/80 text-center text-base md:text-lg mb-8 md:mb-16">
              {t("offres.conseilTagline")}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center mb-12 md:mb-24">
            <Reveal>
              <div className="relative">
                <img src={offresFormation} alt="" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full md:w-[85%] max-h-[200px] md:max-h-[400px]" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("offres.formationsEyebrow")}</p>
              <h3 className="text-xl sm:text-3xl font-bold mb-2 md:mb-3">
                {t("offres.formationsTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("offres.formationsTitle2")}</span>
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-8">{t("offres.formationsIntro")}</p>
              <div className="space-y-3 md:space-y-4">
                {formations.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
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

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center mb-12 md:mb-24">
            <Reveal className="order-2 md:order-1">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("offres.enquetesEyebrow")}</p>
              <h3 className="text-xl sm:text-3xl font-bold mb-2 md:mb-3">
                {t("offres.enquetesTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("offres.enquetesTitle2")}</span>
              </h3>
              <p className="font-serif-display italic text-primary/70 text-sm md:text-base mb-3 md:mb-4">{t("offres.enquetesTagline")}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{t("offres.enquetesIntro")}</p>
              <div className="space-y-3">
                {enquetesBullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <b.icon className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-xs md:text-sm text-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <div className="relative">
                <img src={offresEnquetes} alt="" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3]" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img src={offresConseil} alt="" width={800} height={600} loading="lazy" className="rounded-lg shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3]" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("offres.missionsEyebrow")}</p>
              <h3 className="text-xl sm:text-3xl font-bold mb-2 md:mb-3">
                {t("offres.missionsTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("offres.missionsTitle2")}</span>
              </h3>
              <p className="font-serif-display italic text-primary/70 text-sm md:text-base mb-3 md:mb-4">{t("offres.missionsTagline")}</p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{t("offres.missionsIntro")}</p>
              <div className="flex flex-wrap gap-2">
                {missionsTags.map((tag, i) => (
                  <span key={i} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground hover:border-primary/30 transition-colors">{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-center">
          <blockquote className="text-lg sm:text-2xl font-serif-display italic text-foreground/80 leading-relaxed">
            {t("offres.quote2")}
          </blockquote>
        </div>
      </Reveal>

      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("offres.approcheEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-3 md:mb-4">
              {t("offres.approcheTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("offres.approcheTitle2")}</span>
            </h2>
            <p className="font-serif-display italic text-primary/70 text-center text-sm md:text-lg mb-6 md:mb-10">
              {t("offres.approcheTagline")}
            </p>
          </Reveal>

          <Reveal>
            <div className="relative rounded-lg overflow-hidden mb-6 md:mb-12">
              <img src={offresApproche} alt="" width={1200} height={600} loading="lazy" className="w-full h-48 sm:h-80 object-cover object-bottom" />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-lg" />
            </div>
          </Reveal>

          <div className="hidden sm:grid sm:grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto">
            {approche.map((item, i) => (
              <Reveal key={i}>
                <div className="group relative rounded-2xl border border-border bg-background p-4 md:p-6 hover:border-primary/20 hover:shadow-md hover:shadow-foreground/[0.03] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="sm:hidden space-y-3">
            {approche.map((item, i) => <ApprochAccordionCard key={i} icon={item.icon} title={item.title} text={item.text} />)}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[hsl(var(--wel-cream)/0.25)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("offres.ctaEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 md:mb-4">
              {t("offres.ctaTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("offres.ctaTitle2")}</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
              {t("offres.ctaSubtitle")}
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto h-11" asChild>
              <Link to="/contact">{t("offres.ctaButton")}</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offres;
