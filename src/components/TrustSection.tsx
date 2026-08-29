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
    <section className="py-8 sm:py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center gap-6 mb-2">
          <div className="flex-1 h-px bg-[hsl(228,25%,88%)]" aria-hidden="true" />
          <h2 className="font-serif-display italic text-xl sm:text-2xl text-wel-blue whitespace-nowrap">
            {t("trust.title")}
          </h2>
          <div className="flex-1 h-px bg-[hsl(228,25%,88%)]" aria-hidden="true" />
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
          {t("trust.subtitle")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-5">
          <img src={frenchTech.url} alt="La French Tech" className="trust-logo h-7 sm:h-8" loading="lazy" />
          <img src={bpifrance.url} alt="Bpifrance" className="trust-logo h-7 sm:h-9" loading="lazy" />
          <img src={paysDeLaLoire.url} alt="Région Pays de la Loire" className="trust-logo h-7 sm:h-9" loading="lazy" />
          <img src={citeCongres.url} alt="La Cité des Congrès de Nantes" className="trust-logo h-8 sm:h-10" loading="lazy" />
          <img src={mobiapps.url} alt="Mobiapps" className="trust-logo h-[18px] sm:h-5" loading="lazy" />
          <img src={kanoma.url} alt="Kanoma" className="trust-logo h-6 sm:h-7" loading="lazy" />
          <img src={prolaser.url} alt="Prolaser" className="trust-logo h-12 sm:h-14" loading="lazy" />
          <img src={exponantes.url} alt="Exponantes Le Parc" className="trust-logo h-8 sm:h-9" loading="lazy" />
          <img src={valeuriad.url} alt="Valeuriad" className="trust-logo h-8 sm:h-10" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
