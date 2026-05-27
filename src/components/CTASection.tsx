import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-primary p-5 sm:p-12 text-center mb-6 md:mb-16 -mt-2">
          <p
            className="text-primary-foreground text-xs sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: t("cta.quote") }}
          />
        </div>

        <div className="max-w-3xl mx-auto rounded-xl bg-muted/50 border border-border overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2">{t("cta.title")}</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
                {t("cta.desc")}
              </p>
              <div className="flex flex-row gap-2 md:gap-3 mb-3 items-center justify-center">
                <Button variant="outline" size="sm" className="h-9 text-xs sm:text-sm" asChild>
                  <Link to="/eligibilite">{t("hero.ctaTest")}</Link>
                </Button>
                <Button size="sm" className="h-9 text-xs sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/contact">{t("nav.cta")}</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("cta.footer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
