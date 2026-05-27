import { useTranslation } from "react-i18next";
import benefitsWoman from "@/assets/benefits-woman.jpg";

const BenefitsSection = () => {
  const { t } = useTranslation();
  const benefits = t("benefits.items", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          {t("benefits.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          {t("benefits.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("benefits.title2")}</span>
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          {t("benefits.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch max-w-5xl mx-auto">
          <div className="space-y-3 md:space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{benefit.title}</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-0.5">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden h-48 md:h-auto">
            <img src={benefitsWoman} alt="" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
