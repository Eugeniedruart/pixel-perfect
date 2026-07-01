import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import frenchFlag from "@/assets/french-flag.png";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import certifiedWel from "@/assets/clients/certified-wel.png.asset.json";
import exponantes from "@/assets/clients/exponantes.png.asset.json";
import frenchTech from "@/assets/partners/french-tech.webp.asset.json";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(35,40%,92%)] via-[hsl(30,30%,95%)] to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-8 sm:pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6">
          {t("hero.eyebrow")}
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
          <br />
          <span className="font-serif-display italic text-foreground font-normal">{t("hero.title3")}</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-10 w-full px-2 sm:px-0">
          <Button variant="outline" size="default" className="w-full sm:w-auto sm:min-w-[200px] h-10 sm:h-12 text-sm sm:text-base" asChild>
            <Link to="/eligibilite">{t("hero.ctaTest")}</Link>
          </Button>
          <Button size="default" className="w-full sm:w-auto sm:min-w-[200px] h-10 sm:h-12 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">{t("hero.ctaLabel")}</Link>
          </Button>
        </div>

        <p className="mt-5 sm:mt-8 text-xs sm:text-sm text-muted-foreground text-center">
          <img src={frenchFlag} alt="" className="inline-block h-4 w-4 sm:h-5 sm:w-5 object-contain align-middle mr-1" width={512} height={512} />
          <span className="align-middle" dangerouslySetInnerHTML={{ __html: t("hero.tagline") }} />
        </p>

        <div className="mt-3 sm:mt-4 flex flex-col items-center justify-center gap-1">
          <span className="text-xs sm:text-sm text-muted-foreground">{t("hero.frenchTech")}</span>
          <img src={frenchTech.url} alt="French Tech" className="h-10 sm:h-14 w-auto object-contain" />
        </div>

        <div className="mt-8 sm:mt-12 relative w-full pt-16 sm:pt-6 px-4 sm:px-8">
          <div className="flex flex-nowrap items-center justify-between w-full overflow-x-auto">
            <img src={citeCongres.url} alt="La Cité Congrès Nantes" className="h-20 sm:h-32 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
            <img src={mobiapps.url} alt="Mobiapps" className="h-5 sm:h-8 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
            <img src={kanoma.url} alt="Kanoma" className="h-12 sm:h-16 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
            <img src={prolaser.url} alt="Prolaser" className="h-40 sm:h-52 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
            <img src={exponantes.url} alt="Exponantes Le Parc" className="h-20 sm:h-28 w-auto object-contain grayscale opacity-60 hover:opacity-90 transition-opacity shrink-0" />
          </div>

          <div className="absolute top-0 right-0 sm:right-2 -translate-y-1/4 sm:-translate-y-3/4 flex flex-col items-center">
            <img
              src={certifiedWel.url}
              alt="Certified WEL"
              className="h-12 sm:h-16 w-auto object-contain rotate-[-8deg]"
            />
            <svg
              className="text-foreground w-10 sm:w-16 h-8 sm:h-12 mt-1"
              viewBox="0 0 80 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M60 5 C 65 20, 60 35, 60 50" />
              <path d="M52 43 L 60 50 L 68 43 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
