import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";
import { Play, ImageIcon } from "lucide-react";
import citeCongres from "@/assets/clients/cite-congres-nantes.png.asset.json";
import mobiapps from "@/assets/clients/mobiapps.png.asset.json";
import kanoma from "@/assets/clients/kanoma.png.asset.json";
import exponantes from "@/assets/clients/exponantes.png.asset.json";
import prolaser from "@/assets/clients/prolaser.png.asset.json";
import valeuriad from "@/assets/clients/valeuriad.png.asset.json";
import citePhoto from "@/assets/testimonials/cite-photo.jpg.asset.json";
import valeuriadPhoto from "@/assets/testimonials/valeuriad-photo.jpg.asset.json";
import kanomaVideo from "@/assets/testimonials/kanoma-video.mp4.asset.json";
import mobiappsVideo from "@/assets/testimonials/mobiapps-video.mp4.asset.json";
import certifiedBadge from "@/assets/wel-certified-logo.png";

const companyLogos: Record<string, string> = {
  cite: citeCongres.url,
  mobiapps: mobiapps.url,
  kanoma: kanoma.url,
  exponantes: exponantes.url,
  prolaser: prolaser.url,
  valeuriad: valeuriad.url,
};

const companyWebsites: Record<string, string> = {
  cite: "https://www.lacite-nantes.fr",
  mobiapps: "https://www.mobiapps.fr",
  kanoma: "https://www.kanoma.fr",
  exponantes: "https://www.exponantes.com",
  prolaser: "https://www.pro-laser.fr",
  valeuriad: "https://www.valeuriad.fr",
};

const companyPhotos: Record<string, string> = {
  cite: citePhoto.url,
  valeuriad: valeuriadPhoto.url,
};

const companyVideos: Record<string, string> = {
  kanoma: kanomaVideo.url,
  mobiapps: mobiappsVideo.url,
};

interface Company {
  key: string;
  name: string;
  sector: string;
  text: string;
  labelDate?: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  mediaType?: "photo" | "video" | null;
  mediaPlaceholder?: boolean;
}

const initialsOf = (name?: string) =>
  (name ?? "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const CertifiedBadge = ({ label }: { label: string }) => (
  <img
    src={certifiedBadge}
    alt={label}
    title={label}
    className="mt-4 h-14 w-auto object-contain"
    loading="lazy"
  />
);

const CompanyMedia = ({ company }: { company: Company }) => {
  if (company.mediaType === "video") {
    const src = companyVideos[company.key];
    if (src) {
      return (
        <div className="w-full sm:w-72 lg:w-80 shrink-0 overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
          <video
            src={src}
            controls
            preload="metadata"
            playsInline
            className="aspect-video h-full w-full object-cover"
          />
        </div>
      );
    }
    return (
      <div className="relative aspect-video w-full sm:w-72 lg:w-80 shrink-0 rounded-2xl border border-dashed border-primary/40 bg-wel-blue-light/50 flex flex-col items-center justify-center gap-2 text-primary">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Play className="h-5 w-5 fill-current" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-primary/70">
          Vidéo à venir
        </span>
      </div>
    );
  }

  const photo = companyPhotos[company.key];
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Remise du label WEL – ${company.name}`}
        className="h-32 w-32 sm:h-40 sm:w-40 shrink-0 rounded-full border border-border object-cover shadow-sm"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-primary/40 bg-wel-blue-light/50 text-primary">
        {company.quoteAuthor ? (
          <span className="text-lg font-bold">{initialsOf(company.quoteAuthor)}</span>
        ) : (
          <ImageIcon className="h-6 w-6" />
        )}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-wide text-primary/70">
        Photo à venir
      </span>
    </div>
  );
};

const CompanyName = ({
  company,
  className,
}: {
  company: Company;
  className: string;
}) => {
  const href = companyWebsites[company.key];
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline underline-offset-4 decoration-primary/60"
    >
      {company.name}
    </a>
  ) : (
    company.name
  );
  return <h2 className={className}>{content}</h2>;
};

const EntreprisesLabellisees = () => {
  const { t } = useTranslation();
  const companies = t("labeled.companies", { returnObjects: true }) as Company[];
  const badgeLabel = t("labeled.badge");

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
            {companies.map((company) =>
              company.mediaType ? (
                <article
                  key={company.key}
                  className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CompanyMedia company={company} />
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                      {companyLogos[company.key] && (
                        <img
                          src={companyLogos[company.key]}
                          alt={company.name}
                          className="max-h-8 max-w-[110px] object-contain"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <CompanyName
                          company={company}
                          className="text-base sm:text-lg font-semibold text-foreground leading-tight"
                        />
                        {company.labelDate && (
                          <p className="text-xs text-muted-foreground">
                            Labellisée depuis {company.labelDate}
                          </p>
                        )}
                        <p className="text-xs font-medium uppercase tracking-wide text-primary">
                          {company.sector}
                        </p>
                      </div>
                    </div>
                    {company.quote ? (
                      <blockquote>
                        <p className="font-serif-display italic text-sm sm:text-base text-foreground leading-relaxed">
                          « {company.quote} »
                        </p>
                        <footer className="mt-3 text-sm">
                          <span className="font-semibold text-foreground">{company.quoteAuthor}</span>
                          {company.quoteRole && (
                            <span className="text-muted-foreground"> — {company.quoteRole}</span>
                          )}
                        </footer>
                      </blockquote>
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed">{company.text}</p>
                    )}
                    <CertifiedBadge label={badgeLabel} />
                  </div>
                </article>
              ) : (
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
                  <CompanyName
                    company={company}
                    className="text-base sm:text-lg font-semibold text-foreground"
                  />
                  {company.labelDate && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Labellisée depuis {company.labelDate}
                    </p>
                  )}
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">{company.sector}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{company.text}</p>
                  <CertifiedBadge label={badgeLabel} />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default EntreprisesLabellisees;
