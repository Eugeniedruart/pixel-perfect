import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import whyImg from "@/assets/team-meeting.jpg";
import womanTablet from "@/assets/woman-tablet.jpg";

const WhySection = () => {
  const { t } = useTranslation();
  return (
    <section id="label" className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          {t("why.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          {t("why.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("why.title2")}</span>
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          {t("why.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          <div className="hidden md:block rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded overflow-hidden h-72">
              <img src={whyImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
            </div>
          </div>

          <div className="rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded bg-primary p-5 md:p-8 flex flex-col justify-center text-primary-foreground h-full">
              <p className="text-xs md:text-lg mb-2 text-center" dangerouslySetInnerHTML={{ __html: t("why.statText") }} />
              <p className="text-5xl md:text-7xl font-bold font-serif-display italic text-center">2167</p>
            </div>
          </div>

          <div className="md:hidden rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded overflow-hidden h-56">
              <img src={womanTablet} alt="" className="w-full h-full object-cover object-[center_8%]" loading="lazy" width={768} height={1024} />
            </div>
          </div>

          <div className="rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded bg-wel-cream p-4 md:p-6 flex flex-col justify-center h-full">
              <p className="text-xs md:text-lg leading-relaxed text-foreground text-center">
                {t("why.quote1")}
              </p>
              <p className="text-xs md:text-lg font-serif-display italic mt-3 text-foreground text-center font-medium">
                {t("why.quote2")}
              </p>
            </div>
          </div>

          <div className="hidden md:block rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded overflow-hidden h-72">
              <img src={womanTablet} alt="" className="w-full h-full object-cover object-[center_30%]" loading="lazy" width={768} height={1024} />
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-10 px-0">
          <div className="flex justify-center">
            <Button size="sm" className="w-full sm:w-auto h-9 text-xs sm:h-12 sm:text-base sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">{t("nav.cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
