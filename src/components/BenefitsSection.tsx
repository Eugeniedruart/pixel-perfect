import { useTranslation } from "react-i18next";
import { TrendingUp, Scale, Users, Star, UserRound, CheckCircle2 } from "lucide-react";
import welLogo from "@/assets/wel-logo.png";
import workPhoto from "@/assets/pexels-kampus-8190807.jpg";

type Card = { title: string; description: string };

const issueIcons = [TrendingUp, Scale, Users];
const resultIcons = [Star, Users, UserRound];

const BenefitsSection = () => {
  const { t } = useTranslation();
  const issues = t("whyAct.issues", { returnObjects: true }) as Card[];
  const results = t("whyAct.results", { returnObjects: true }) as Card[];

  return (
    <section className="relative py-14 md:py-24 bg-background overflow-hidden">
      {/* Photographie organique à gauche */}
      <div className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-[300px] xl:w-[340px] pointer-events-none select-none" aria-hidden="true">
        <img
          src={workPhoto}
          alt=""
          loading="lazy"
          className="w-full h-[460px] object-cover opacity-90"
          style={{ borderRadius: "0 999px 999px 0" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* En-tête */}
        <p className="text-xs tracking-[0.35em] uppercase text-primary text-center mb-4">
          {t("whyAct.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center leading-tight">
          {t("whyAct.title1")}
          <br />
          {t("whyAct.title2")}{" "}
          <span className="font-serif-display italic text-primary font-normal">{t("whyAct.title3")}</span>
        </h2>

        {/* 3 enjeux clés */}
        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16 mb-8">
          <span className="h-px w-16 sm:w-24 bg-primary/40" />
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary whitespace-nowrap">
            {t("whyAct.issuesEyebrow")}
          </p>
          <span className="h-px w-16 sm:w-24 bg-primary/40" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {issues.map((issue, i) => {
            const Icon = issueIcons[i];
            return (
              <div
                key={i}
                className="bg-background border border-border/60 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-12px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_hsl(var(--primary)/0.25)]"
              >
                <div className="w-11 h-11 rounded-full bg-wel-blue-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-foreground text-base md:text-lg mb-2">{issue.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{issue.description}</p>
              </div>
            );
          })}
        </div>

        {/* Lignes de convergence vers WEL */}
        <div className="hidden md:flex justify-center gap-40 mt-2" aria-hidden="true">
          <span className="block w-px h-10 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/60 rotate-[12deg] origin-bottom" />
          <span className="block w-px h-10 bg-primary/50" />
          <span className="block w-px h-10 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/60 -rotate-[12deg] origin-bottom" />
        </div>

        {/* Bloc central WEL + statistique */}
        <div className="mt-6 md:mt-2 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="bg-background border border-border/60 rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-[0_16px_40px_-20px_hsl(var(--primary)/0.3)] flex flex-col items-center gap-3">
            <img src={welLogo} alt="WEL" className="h-9 md:h-11 w-auto" loading="lazy" />
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/80 text-center">
              {t("whyAct.welPillars")}
            </p>
          </div>

          <div className="bg-background border border-border/60 rounded-xl px-6 py-5 shadow-[0_4px_20px_-12px_hsl(var(--primary)/0.15)] max-w-[240px] text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold text-primary leading-none">{t("whyAct.statValue")}</p>
            <p className="text-sm font-medium text-foreground mt-1">{t("whyAct.statLabel")}</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{t("whyAct.statSource")}</p>
          </div>
        </div>

        {/* 3 résultats concrets */}
        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16 mb-8">
          <span className="h-px w-16 sm:w-24 bg-primary/40" />
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary whitespace-nowrap">
            {t("whyAct.resultsEyebrow")}
          </p>
          <span className="h-px w-16 sm:w-24 bg-primary/40" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {results.map((result, i) => {
            const Icon = resultIcons[i];
            return (
              <div
                key={i}
                className="bg-background border border-border/60 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-12px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_hsl(var(--primary)/0.25)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-serif-display italic text-4xl md:text-5xl text-primary leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-wel-blue-light flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-base md:text-lg mb-2">{result.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{result.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bande finale */}
        <div className="mt-12 md:mt-16 bg-wel-blue-light/70 rounded-2xl px-6 py-6 md:px-10 md:py-7 flex items-center justify-center gap-3 text-center">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
          <p className="text-sm md:text-base text-foreground font-medium">
            {t("whyAct.closing")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
