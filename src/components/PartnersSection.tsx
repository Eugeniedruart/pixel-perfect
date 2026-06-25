import { useTranslation } from "react-i18next";
import bpifrance from "@/assets/partners/bpifrance.png.asset.json";
import paysDeLaLoire from "@/assets/partners/pays-de-la-loire.png.asset.json";
import frenchTech from "@/assets/partners/french-tech.webp.asset.json";

const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          {t("partners.title", "Nos partenaires")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20">
          <img src={paysDeLaLoire.url} alt="Région Pays de la Loire" className="h-16 sm:h-20 w-auto object-contain hover:opacity-100 transition-opacity -ml-4 sm:-ml-8" />
          <img src={bpifrance.url} alt="Bpifrance" className="h-16 sm:h-24 w-auto object-contain hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
