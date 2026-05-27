import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CheckCircle2, FileText, BarChart3, Megaphone, Handshake, ChevronDown,
  TrendingUp, Award, Briefcase, ClipboardList, Search, Clock,
} from "lucide-react";
import patternHero from "@/assets/pattern-hero-clean.png";
import welCertifiedDark from "@/assets/wel-certified-dark.png";
import constructionWorkers from "@/assets/pexels-mikael-blomkvist-8961026.jpg";
import corporateLeadership from "@/assets/pexels-vlada-karpovich-7433850-2.jpg";

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

const timelineIcons = [ClipboardList, Search, BarChart3, Award];
const impactIcons = [TrendingUp, Award, Briefcase];
const resultIcons = [FileText, BarChart3, Megaphone, Handshake];

const ResultAccordionCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left rounded-2xl border border-border bg-[hsl(var(--wel-cream)/0.35)] backdrop-blur-sm p-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-primary" /></div>
        <h3 className="font-semibold text-foreground text-sm leading-snug flex-1">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground text-xs leading-relaxed pl-12">{desc}</p>
      </div>
    </button>
  );
};

const PillarAccordionCard = ({ emoji, title, desc }: { emoji: string; title: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left rounded-2xl border border-border bg-gradient-to-br from-[hsl(var(--wel-cream)/0.5)] to-background p-4 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0"><span className="text-lg">{emoji}</span></div>
        <h3 className="font-semibold text-foreground text-sm leading-snug flex-1">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground text-xs leading-relaxed pl-12">{desc}</p>
      </div>
    </button>
  );
};

const Methodologie = () => {
  const { t } = useTranslation();
  const pillars = t("methodologie.pillars", { returnObjects: true }) as Array<{ emoji: string; title: string; desc: string }>;
  const complianceItems = t("methodologie.complianceItems", { returnObjects: true }) as string[];
  const timelineLabels = t("methodologie.timelineLabels", { returnObjects: true }) as string[];
  const delays = t("methodologie.delays", { returnObjects: true }) as string[];
  const steps = t("methodologie.steps", { returnObjects: true }) as Array<{ num: string; title: string; desc: string }>;
  const governanceRoles = t("methodologie.governanceRoles", { returnObjects: true }) as string[];
  const impacts = (t("methodologie.impacts", { returnObjects: true }) as Array<{ title: string; desc: string }>).map((it, i) => ({ ...it, icon: impactIcons[i] }));
  const results = (t("methodologie.results", { returnObjects: true }) as Array<{ title: string; desc: string }>).map((it, i) => ({ ...it, icon: resultIcons[i] }));
  const timelineNodes = timelineLabels.map((label, i) => ({ label, icon: timelineIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden py-10 md:py-24 lg:py-32">
        <img src={patternHero} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">{t("methodologie.eyebrow")}</p>
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                {t("methodologie.title1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("methodologie.title2")}</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed mb-5 md:mb-8">
                {t("methodologie.subtitle")}
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" asChild>
                <Link to="/contact">{t("methodologie.heroCta")}</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-border" /></div>

      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("methodologie.pillarsEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">
              {t("methodologie.pillarsTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("methodologie.pillarsTitle2")}</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base text-center max-w-2xl mx-auto mb-8 md:mb-14">
              {t("methodologie.pillarsSubtitle")}
            </p>
          </Reveal>
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={i}>
                <div className="group rounded-2xl border border-border bg-gradient-to-br from-[hsl(var(--wel-cream)/0.5)] to-background p-6 h-full hover:shadow-md hover:shadow-foreground/[0.03] hover:border-primary/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mb-5"><span className="text-xl">{p.emoji}</span></div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="sm:hidden space-y-3">
            {pillars.map((p, i) => <PillarAccordionCard key={i} emoji={p.emoji} title={p.title} desc={p.desc} />)}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("methodologie.complianceEyebrow")}</p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 md:mb-6">
                {t("methodologie.complianceTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("methodologie.complianceTitle2")}</span>
              </h2>
              <div className="space-y-4 mb-8">
                {complianceItems.map((text, i) => (
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

      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img src={constructionWorkers} alt="" width={1280} height={854} loading="lazy" className="shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3] object-[center_30%] scale-[1.15]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("methodologie.beyondEyebrow")}</p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 md:mb-6">
                {t("methodologie.beyondTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("methodologie.beyondTitle2")}</span>
              </h2>
              <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{t("methodologie.beyondText")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-border" /></div>

      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("methodologie.processEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 md:mb-14">
              {t("methodologie.processTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("methodologie.processTitle2")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="hidden md:block max-w-3xl mx-auto mb-14">
              <div className="relative">
                <div className="absolute top-[24px] left-[48px] right-[48px] h-[2px] bg-border">
                  <div className="absolute inset-0 rounded-full opacity-50" style={{ background: "linear-gradient(90deg, hsl(var(--wel-purple)), hsl(var(--wel-blue)), hsl(var(--wel-purple)))" }} />
                </div>
                <div className="relative grid grid-cols-7 items-start">
                  {timelineNodes.map((node, i) => (
                    <>
                      <div key={`node-${i}`} className={`flex flex-col items-center ${i === 0 ? "col-start-1" : ""}`} style={{ gridColumn: i * 2 + 1 }}>
                        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white relative z-10" style={{ background: "linear-gradient(135deg, hsl(var(--wel-purple)), hsl(var(--wel-navy)))", boxShadow: "0 4px 14px hsla(var(--wel-purple), 0.3)" }}>
                          <node.icon size={20} strokeWidth={2} />
                        </div>
                        <span className="mt-2 text-[11px] font-bold tracking-widest uppercase text-primary">{node.label}</span>
                      </div>
                      {i < delays.length && (
                        <div key={`delay-${i}`} className="flex items-start justify-center pt-[14px]" style={{ gridColumn: i * 2 + 2 }}>
                          <span className="px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap" style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))" }}>
                            {delays[i]}
                          </span>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium" style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))", border: "1px solid hsla(var(--wel-purple), 0.15)" }}>
                  <Clock size={14} />
                  {t("methodologie.totalDuration")}
                </span>
              </div>
            </div>

            <div className="md:hidden relative pl-8 mb-14">
              <div className="absolute left-[28px] top-4 bottom-12 w-[2px] opacity-40" style={{ background: "linear-gradient(180deg, hsl(var(--wel-purple)), hsl(var(--wel-blue)), hsl(var(--wel-purple)))" }} />
              {timelineNodes.map((node, i) => (
                <div key={i} className="relative flex items-start gap-4 mb-8">
                  <div className="relative z-10 w-[38px] h-[38px] rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "linear-gradient(135deg, hsl(var(--wel-purple)), hsl(var(--wel-navy)))", boxShadow: "0 3px 10px hsla(var(--wel-purple), 0.3)" }}>
                    <node.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="pt-1.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                      {t("methodologie.stepLabel")} {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{node.label}</p>
                    {i < delays.length && (
                      <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium" style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))" }}>
                        {delays[i]}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="ml-[54px]">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium" style={{ background: "hsl(var(--wel-blue-light))", color: "hsl(var(--wel-navy))", border: "1px solid hsla(var(--wel-purple), 0.15)" }}>
                  <Clock size={13} />
                  {t("methodologie.totalDurationMobile")}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={i}>
                <div className="relative rounded-2xl border border-border bg-background p-6 h-full hover:shadow-md hover:shadow-foreground/[0.03] transition-all duration-300">
                  <span className="text-4xl font-bold text-primary/[0.07] absolute top-4 right-5">{step.num}</span>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mb-4">{step.num}</div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">{t("methodologie.governanceEyebrow")}</p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 md:mb-6">
                {t("methodologie.governanceTitle1")}{" "}
                <span className="font-serif-display italic text-primary font-normal">{t("methodologie.governanceTitle2")}</span>
              </h2>
              <p className="text-muted-foreground text-xs md:text-base leading-relaxed mb-6 md:mb-8">{t("methodologie.governanceText")}</p>
              <div className="flex flex-wrap gap-2">
                {governanceRoles.map((role, i) => (
                  <span key={i} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground">{role}</span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="relative">
                <img src={corporateLeadership} alt="" width={1280} height={854} loading="lazy" className="rounded-2xl shadow-lg shadow-foreground/5 object-cover w-full max-h-[200px] md:max-h-none aspect-auto md:aspect-[4/3]" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("methodologie.impactEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 md:mb-14">
              {t("methodologie.impactTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("methodologie.impactTitle2")}</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {impacts.map((item, i) => (
              <Reveal key={i}>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(var(--wel-cream)/0.4)] p-6 text-center h-full hover:shadow-md hover:shadow-foreground/[0.03] transition-all duration-300">
                  <div className="relative w-11 h-11 rounded-lg bg-primary/[0.06] flex items-center justify-center mx-auto mb-5"><item.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-border" /></div>

      <section className="relative overflow-hidden py-10 md:py-20">
        <img src={patternHero} alt="" aria-hidden className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.65]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">{t("methodologie.resultsEyebrow")}</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4">
              {t("methodologie.resultsTitle1")}{" "}
              <span className="font-serif-display italic text-primary font-normal">{t("methodologie.resultsTitle2")}</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-base text-center max-w-2xl mx-auto mb-8 md:mb-14">
              {t("methodologie.resultsSubtitle")}
            </p>
          </Reveal>
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border border-border bg-[hsl(var(--wel-cream)/0.35)] backdrop-blur-sm p-6 h-full hover:border-primary/20 hover:shadow-lg hover:shadow-foreground/[0.04] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-5"><r.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="sm:hidden space-y-3">
            {results.map((r, i) => <ResultAccordionCard key={i} icon={r.icon} title={r.title} desc={r.desc} />)}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[hsl(var(--wel-cream)/0.4)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-background p-6 md:p-10 lg:p-14 text-center shadow-sm">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">{t("methodologie.pricingEyebrow")}</p>
              <p
                className="text-muted-foreground text-base leading-relaxed mb-8 [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: t("methodologie.pricingText") }}
              />
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" asChild>
                <Link to="/contact">{t("methodologie.pricingCta")}</Link>
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
