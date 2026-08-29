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
    <section className="py-14 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          {t("trust.title")}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-14">
          {t("trust.subtitle")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 sm:gap-y-10">
          <img src={citeCongres.url} alt="La Cité des Congrès de Nantes" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
          <img src={mobiapps.url} alt="Mobiapps" className="h-4 sm:h-5 w-auto object-contain" loading="lazy" />
          <img src={kanoma.url} alt="Kanoma" className="h-6 sm:h-7 w-auto object-contain" loading="lazy" />
          <img src={prolaser.url} alt="Prolaser" className="h-14 sm:h-16 w-auto object-contain" loading="lazy" />
          <img src={exponantes.url} alt="Exponantes Le Parc" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
          <img src={valeuriad.url} alt="Valeuriad" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
          <img src={frenchTech.url} alt="La French Tech" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
          <img src={bpifrance.url} alt="Bpifrance" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
          <img src={paysDeLaLoire.url} alt="Région Pays de la Loire" className="h-10 sm:h-12 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
