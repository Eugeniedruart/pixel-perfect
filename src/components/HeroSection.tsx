import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import frenchFlag from "@/assets/french-flag.png";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import certifiedWel from "@/assets/clients/certified-wel.png.asset.json";

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

        <div className="mt-8 sm:mt-12 relative max-w-4xl mx-auto pt-16 sm:pt-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            <img src={citeCongres.url} alt="La Cité Congrès Nantes" className="h-12 sm:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src={mobiapps.url} alt="Mobiapps" className="h-6 sm:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src={kanoma.url} alt="Kanoma" className="h-10 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src={prolaser.url} alt="Prolaser" className="h-10 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div className="absolute top-0 right-0 sm:right-2 -translate-y-1/4 sm:-translate-y-3/4 flex flex-col items-center">
            <img
              src={certifiedWel.url}
              alt="Certified WEL"
              className="h-16 sm:h-24 w-auto object-contain"
            />
            <svg
              className="text-foreground w-10 sm:w-16 h-8 sm:h-10 mt-1"
              viewBox="0 0 80 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M70 5 C 60 20, 40 35, 15 40" />
              <path d="M22 32 L 15 40 L 26 45" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
