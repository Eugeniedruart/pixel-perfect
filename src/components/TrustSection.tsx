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

const logos = [
  { src: mobiapps.url, alt: "Mobiapps", mobileH: "h-3", desktopH: "sm:h-3.5" },
  { src: bpifrance.url, alt: "Bpifrance", mobileH: "h-7", desktopH: "sm:h-11" },
  { src: paysDeLaLoire.url, alt: "Région Pays de la Loire", mobileH: "h-6", desktopH: "sm:h-9" },
  { src: citeCongres.url, alt: "La Cité des Congrès de Nantes", mobileH: "h-9", desktopH: "sm:h-14" },
  { src: frenchTech.url, alt: "La French Tech", mobileH: "h-8", desktopH: "sm:h-12" },
  { src: kanoma.url, alt: "Kanoma", mobileH: "h-5", desktopH: "sm:h-7" },
  { src: prolaser.url, alt: "Prolaser", mobileH: "h-12", desktopH: "sm:h-24" },
  { src: exponantes.url, alt: "Exponantes Le Parc", mobileH: "h-7", desktopH: "sm:h-9" },
  { src: valeuriad.url, alt: "Valeuriad", mobileH: "h-9", desktopH: "sm:h-14" },
];

const TrustSection = () => {
  const { t } = useTranslation();

  const Logo = ({ logo, index }: { logo: typeof logos[0]; index: number }) => (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`trust-logo ${logo.mobileH} ${logo.desktopH}`}
      loading="lazy"
      data-index={index}
    />
  );

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

        {/* Desktop : une seule ligne */}
        <div className="trust-desktop-row items-center justify-center">
          {logos.map((logo, i) => (
            <Logo key={i} logo={logo} index={i} />
          ))}
        </div>

        {/* Mobile : exactement 2 lignes (5 + 4 logos) */}
        <div className="trust-mobile-row flex-col items-center gap-y-5">
          <div className="flex items-center justify-center gap-x-3.5 flex-nowrap">
            {logos.slice(0, 5).map((logo, i) => (
              <Logo key={i} logo={logo} index={i} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-x-3.5 flex-nowrap">
            {logos.slice(5).map((logo, i) => (
              <Logo key={i + 5} logo={logo} index={i + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
