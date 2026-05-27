import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import solutionLabellisation from "@/assets/solution-labellisation.jpg";
import solutionConseil from "@/assets/solution-conseil.jpg";

const SolutionsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="solutions" className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          {t("solutions.eyebrow")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          {t("solutions.title1")}
          <br />
          <span className="font-serif-display italic text-primary font-normal">{t("solutions.title2")}</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          {t("solutions.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-36 md:h-48 overflow-hidden">
              <img src={solutionLabellisation} alt="" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("solutions.labellisation.title")}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                {t("solutions.labellisation.desc")}
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm" asChild>
                <Link to="/contact">{t("nav.cta")}</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-36 md:h-48 overflow-hidden">
              <img src={solutionConseil} alt="" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("solutions.conseil.title")}</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6">
                {t("solutions.conseil.desc")}
              </p>
              <Button variant="outline" className="w-full h-11 gap-2" asChild>
                <Link to="/contact">{t("solutions.conseil.cta")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
