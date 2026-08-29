import { useTranslation } from "react-i18next";
import { TrendingUp, Scale, Users, ArrowDown } from "lucide-react";
import welLogo from "@/assets/wel-logo.png";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const enjeux = t("benefits.enjeux", { returnObjects: true }) as Array<{ title: string; highlight?: string; detail: string }>;
  const resultats = t("benefits.resultats", { returnObjects: true }) as Array<{ num: string; title: string; detail: string }>;
  const icons = [TrendingUp, Scale, Users];

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-primary text-center mb-3">
          {t("benefits.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-10">
          {t("benefits.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("benefits.title2")}</span>
        </h2>

        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card shadow-[0_10px_40px_-20px_hsl(var(--wel-navy)/0.15)] px-5 py-6 md:px-10 md:py-8">
          {/* 3 enjeux */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hidden sm:block h-px w-14 bg-primary/40" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">{t("benefits.enjeuxLabel")}</p>
            <span className="hidden sm:block h-px w-14 bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-border">
            {enjeux.map((e, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="text-center sm:px-6">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" strokeWidth={1.5} />
                  <p className="font-bold text-foreground text-sm md:text-base">{e.title}</p>
                  {e.highlight && (
                    <p className="font-serif-display italic text-primary text-xl md:text-2xl mt-1">{e.highlight}</p>
                  )}
                  <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-snug">{e.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Transition vers WEL */}
          <div className="flex items-center justify-center gap-6 my-5 text-primary/50">
            <span className="hidden sm:block h-px flex-1 bg-primary/25" />
            <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:block h-px flex-1 bg-primary/25" />
          </div>

          {/* WEL */}
          <div className="mx-auto w-fit rounded-xl bg-wel-blue-light px-8 py-4 text-center shadow-[0_8px_25px_-12px_hsl(var(--primary)/0.35)] transition-transform duration-300 hover:-translate-y-0.5">
            <p className="font-serif-display italic text-2xl md:text-3xl text-wel-navy">WEL</p>
            <p className="text-[11px] md:text-xs tracking-[0.15em] uppercase text-primary mt-1">
              {t("benefits.welTagline")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 my-5 text-primary/50">
            <span className="hidden sm:block h-px flex-1 bg-primary/25" />
            <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:block h-px flex-1 bg-primary/25" />
          </div>

          {/* 3 résultats */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="hidden sm:block h-px w-14 bg-primary/40" />
            <p className="text-[11px] tracking-[0.25em] uppercase text-primary font-semibold">{t("benefits.resultatsLabel")}</p>
            <span className="hidden sm:block h-px w-14 bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-border">
            {resultats.map((r, i) => (
              <div key={i} className="text-center sm:px-6">
                <p className="font-serif-display italic text-primary/60 text-lg md:text-xl">{r.num}</p>
                <p className="font-bold text-foreground text-sm md:text-base mt-0.5">{r.title}</p>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-snug">{r.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground text-center mt-5">{t("benefits.source")}</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
