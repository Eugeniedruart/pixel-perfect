import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";
import { BadgeCheck } from "lucide-react";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import exponantes from "@/assets/clients/exponantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import valeuriad from "@/assets/clients/valeuriad.png.asset.json";

const companyLogos: Record<string, string> = {
  cite: citeCongres.url,
  mobiapps: mobiapps.url,
  kanoma: kanoma.url,
  exponantes: exponantes.url,
  prolaser: prolaser.url,
  valeuriad: valeuriad.url,
};

interface Company {
  key: string;
  name: string;
  sector: string;
  text: string;
}

const EntreprisesLabellisees = () => {
  const { t } = useTranslation();
  const companies = t("labeled.companies", { returnObjects: true }) as Company[];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-wel-blue-light/40 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {t("labeled.eyebrow")}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("labeled.h1")}
          </h1>
          <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t("labeled.intro")}
          </p>
        </div>
      </section>

      {/* Companies grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {companies.map((company) => (
              <article
                key={company.key}
                className="flex flex-col items-center text-center rounded-2xl border border-border bg-background p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  {companyLogos[company.key] ? (
                    <img
                      src={companyLogos[company.key]}
                      alt={company.name}
                      className="max-h-16 max-w-[160px] object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-lg font-bold text-wel-blue">{company.name}</span>
                  )}
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-foreground">{company.name}</h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">{company.sector}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{company.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/[0.08] px-3 py-1 text-[11px] font-semibold text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {t("labeled.badge")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default EntreprisesLabellisees;
