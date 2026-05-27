import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Step = { title: string; description: string; badge?: string };

const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Step[];

  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          {t("process.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          {t("process.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("process.title2")}</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-3xl mx-auto mt-3 mb-8 md:mb-16">
          {t("process.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex sm:block items-start gap-4 sm:gap-0">
              <div className="flex items-center mb-0 sm:mb-6 shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-border flex items-center justify-center text-base sm:text-lg font-semibold text-foreground">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 border-t-2 border-dashed border-border ml-2" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-1 sm:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                {step.badge && (
                  <span className="inline-block mt-2 sm:mt-4 text-xs font-medium text-wel-green-dark bg-wel-green/40 px-3 py-1 rounded-full">
                    {step.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-8 md:mt-14">
          <Button variant="outline" size="sm" className="h-9 text-xs sm:h-12 sm:text-base sm:px-8" asChild>
            <Link to="/eligibilite">{t("hero.ctaTest")}</Link>
          </Button>
          <Button size="sm" className="h-9 text-xs sm:h-12 sm:text-base sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">{t("nav.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
