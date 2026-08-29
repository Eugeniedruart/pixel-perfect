import { useTranslation } from "react-i18next";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import exponantes from "@/assets/clients/exponantes.png.asset.json";
import valeuriad from "@/assets/clients/valeuriad.png.asset.json";
import frenchTech from "@/assets/partners/french-tech.webp.asset.json";
import bpifrance from "@/assets/partners/bpifrance.png.asset.json";
import paysDeLaLoire from "@/assets/partners/pays-de-la-loire.png.asset.json";

const TrustSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          {t("trust.title")}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12">
          {t("trust.subtitle")}
        </p>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:gap-x-0 lg:justify-between">
          <img src={frenchTech.url} alt="La French Tech" className="h-7 sm:h-8 lg:h-9 w-auto object-contain shrink-0" loading="lazy" />
          <img src={bpifrance.url} alt="Bpifrance" className="h-7 sm:h-8 lg:h-10 w-auto object-contain shrink-0" loading="lazy" />
          <img src={paysDeLaLoire.url} alt="Région Pays de la Loire" className="h-7 sm:h-8 lg:h-9 w-auto object-contain shrink-0" loading="lazy" />
          <img src={citeCongres.url} alt="La Cité des Congrès de Nantes" className="h-8 sm:h-9 lg:h-11 w-auto object-contain shrink-0" loading="lazy" />
          <img src={mobiapps.url} alt="Mobiapps" className="h-3 sm:h-3.5 lg:h-4 w-auto object-contain shrink-0" loading="lazy" />
          <img src={kanoma.url} alt="Kanoma" className="h-5 sm:h-5.5 lg:h-6 w-auto object-contain shrink-0" loading="lazy" />
          <img src={prolaser.url} alt="Prolaser" className="h-11 sm:h-12 lg:h-14 w-auto object-contain shrink-0" loading="lazy" />
          <img src={exponantes.url} alt="Exponantes Le Parc" className="h-8 sm:h-9 lg:h-10 w-auto object-contain shrink-0" loading="lazy" />
          <img src={valeuriad.url} alt="Valeuriad" className="h-8 sm:h-9 lg:h-11 w-auto object-contain shrink-0" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
