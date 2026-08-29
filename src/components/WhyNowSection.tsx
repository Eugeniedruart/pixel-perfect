import { useTranslation } from "react-i18next";

const items = [
  { num: "01", catKey: "whyNow.items.regulation.category", titleKey: "whyNow.items.regulation.title", textKey: "whyNow.items.regulation.text" },
  { num: "02", catKey: "whyNow.items.employer.category", titleKey: "whyNow.items.employer.title", textKey: "whyNow.items.employer.text" },
  { num: "03", catKey: "whyNow.items.piloting.category", titleKey: "whyNow.items.piloting.title", textKey: "whyNow.items.piloting.text" },
];

const WhyNowSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t("whyNow.eyebrow")}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            {t("whyNow.title1")}{" "}
            <span className="font-serif-display italic text-primary font-normal">
              {t("whyNow.title2")}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0">
          {items.map((item, idx) => (
            <div
              key={item.num}
              className={[
                "px-2 md:px-8",
                idx !== 0 ? "md:border-l md:border-[hsl(228,25%,90%)]" : "",
                idx !== 0 ? "pt-8 md:pt-0" : "",
              ].join(" ")}
            >
              <p className="font-serif-display italic text-2xl sm:text-3xl text-wel-purple/70 mb-3">
                {item.num}
              </p>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                {t(item.catKey)}
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-snug">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(item.textKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex items-center gap-6 max-w-3xl mx-auto">
          <div className="flex-1 h-px bg-[hsl(228,25%,88%)]" aria-hidden="true" />
          <p className="font-serif-display italic text-sm sm:text-base text-wel-blue text-center">
            {t("whyNow.conclusion")}
          </p>
          <div className="flex-1 h-px bg-[hsl(228,25%,88%)]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
