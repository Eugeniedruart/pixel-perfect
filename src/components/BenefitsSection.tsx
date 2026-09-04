import { useTranslation } from "react-i18next";
import { TrendingUp, Scale, Users, ArrowDown } from "lucide-react";
import welLogo from "@/assets/wel-logo.png";
import benefitsBg from "@/assets/benefits-woman.jpg";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const enjeux = t("benefits.enjeux", { returnObjects: true }) as Array<{
    title: string;
    highlight?: string;
    detail: string;
    source?: string;
  }>;
  const resultats = t("benefits.resultats", { returnObjects: true }) as Array<{ num: string; title: string; detail: string }>;
  const icons = [TrendingUp, Scale, Users];

  return (
    <section className="relative isolate overflow-hidden py-6 md:py-8 lg:py-10">
      {/* Photo de fond */}
      <div className="absolute inset-0 z-0">
        <img
          src={benefitsBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary text-center mb-2">
          {t("benefits.eyebrow")}
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          {t("benefits.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("benefits.title2")}</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* 3 enjeux */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-primary/40" />
            <p className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-primary font-semibold shadow-sm">
              {t("benefits.enjeuxLabel")}
            </p>
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {enjeux.map((e, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="flex flex-col h-full text-center rounded-xl bg-white/90 backdrop-blur-sm px-4 py-4 md:px-5 md:py-5 shadow-[0_6px_20px_-10px_hsl(var(--wel-navy)/0.2)]"
                >
                  <div className="flex flex-col items-center flex-1">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary mb-2" strokeWidth={1.5} />
                    <p className="font-bold text-foreground text-sm md:text-base leading-tight">{e.title}</p>
                    {e.highlight ? (
                      <>
                        <p className="font-serif-display italic text-primary text-lg md:text-xl mt-1 leading-none">
                          {e.highlight}
                        </p>
                        <p className="text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug max-w-[16rem] mx-auto">
                          {e.detail}
                        </p>
                        {e.source && (
                          <p className="mt-auto pt-2 text-[10px] text-muted-foreground/70 leading-none">
                            {e.source}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-muted-foreground text-xs md:text-sm mt-2 leading-snug flex-1">
                        {e.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transition vers WEL */}
          <div className="flex items-center justify-center gap-4 my-3 md:my-4 text-primary/40">
            <span className="hidden sm:block h-px flex-1 max-w-[6rem] bg-primary/25" />
            <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="hidden sm:block h-px flex-1 max-w-[6rem] bg-primary/25" />
          </div>

          {/* WEL */}
          <div className="mx-auto w-fit rounded-lg bg-wel-blue-light px-5 py-2 md:px-6 md:py-2.5 text-center shadow-[0_6px_18px_-10px_hsl(var(--primary)/0.3)] transition-transform duration-300 hover:-translate-y-0.5">
            <img src={welLogo} alt="WEL — Women Equity Label" className="h-8 md:h-10 w-auto mx-auto" />
          </div>

          <div className="flex items-center justify-center gap-4 my-3 md:my-4 text-primary/40">
            <span className="hidden sm:block h-px flex-1 max-w-[6rem] bg-primary/25" />
            <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="hidden sm:block h-px flex-1 max-w-[6rem] bg-primary/25" />
          </div>

          {/* 3 résultats */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-primary/40" />
            <p className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-primary font-semibold shadow-sm">
              {t("benefits.resultatsLabel")}
            </p>
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {resultats.map((r) => (
              <div
                key={r.num}
                className="flex flex-col h-full justify-center text-center rounded-xl bg-white/90 backdrop-blur-sm px-4 py-4 md:px-5 md:py-5 shadow-[0_6px_20px_-10px_hsl(var(--wel-navy)/0.2)]"
              >
                <p className="font-serif-display italic text-primary/60 text-base md:text-lg leading-none">{r.num}</p>
                <p className="font-bold text-foreground text-sm md:text-base mt-1.5 leading-tight">{r.title}</p>
                <p className="text-muted-foreground text-[11px] md:text-xs mt-1.5 leading-snug flex-1">
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
