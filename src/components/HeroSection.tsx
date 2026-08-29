import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import exponantes from "@/assets/clients/exponantes.png.asset.json";
import valeuriad from "@/assets/clients/valeuriad.png.asset.json";
import frenchTech from "@/assets/partners/french-tech.webp.asset.json";

const HeroSection = () => {
  const { t } = useTranslation();
  const reassuranceItems =
    (t("hero.reassuranceItems", { returnObjects: true }) as string[]) ?? [];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(35,42%,93%)] via-[hsl(30,32%,96%)] to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-6 text-center">
        {/* Eyebrow / surtitre */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center gap-3">
          <span className="hidden sm:block h-px w-10 bg-primary/40" />
          <p className="text-[11px] sm:text-xs tracking-[0.34em] uppercase text-primary font-medium">
            {t("hero.eyebrow")}
          </p>
          <span className="hidden sm:block h-px w-10 bg-primary/40" />
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold text-foreground leading-[1.08] tracking-tight mb-6 sm:mb-7">
          {t("hero.title")}
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-9 sm:mb-11">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto sm:min-w-[220px] h-12 sm:h-13 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            asChild
          >
            <Link to="/methodologie">{t("hero.ctaPrimary")}</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto sm:min-w-[220px] h-12 sm:h-13 text-sm sm:text-base border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50"
            asChild
          >
            <Link to="/contact">{t("hero.ctaSecondary")}</Link>
          </Button>
        </div>

        {/* Ligne de réassurance */}
        <div className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground">
          {reassuranceItems.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-x-4">
              {i > 0 && (
                <span className="text-primary/50 select-none" aria-hidden="true">
                  •
                </span>
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bandeau logos clients — preuve sociale discrète */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-14">
        <div className="flex flex-nowrap items-center justify-start md:justify-between gap-5 md:gap-6 overflow-x-auto md:overflow-x-visible mobile-logos-scroll pb-3 md:pb-0">
          <img src={citeCongres.url} alt="La Cité Congrès Nantes" className="h-14 sm:h-16 lg:h-20 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          <img src={mobiapps.url} alt="Mobiapps" className="h-4 sm:h-5 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          <img src={kanoma.url} alt="Kanoma" className="h-7 sm:h-8 lg:h-9 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          <img src={prolaser.url} alt="Prolaser" className="h-28 sm:h-32 lg:h-36 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          <img src={exponantes.url} alt="Exponantes Le Parc" className="h-12 sm:h-14 lg:h-16 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          <img src={valeuriad.url} alt="Valeuriad" className="h-14 sm:h-16 lg:h-20 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-1">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
            {t("hero.frenchTech")}
          </span>
          <img src={frenchTech.url} alt="French Tech" className="h-8 sm:h-10 w-auto object-contain opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
