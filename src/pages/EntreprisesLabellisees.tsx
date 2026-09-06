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
import kanomaPoster from "@/assets/testimonials/kanoma-poster.jpg.asset.json";
import mobiappsPoster from "@/assets/testimonials/mobiapps-poster.jpg.asset.json";
import certifiedBadge from "@/assets/wel-certified-logo-dark.png.asset.json";

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

const companyVideoPosters: Record<string, string> = {
  kanoma: kanomaPoster.url,
  mobiapps: mobiappsPoster.url,
};

const companyVideoCaptions: Record<string, string> = {
  kanoma: "Xavier Maire — Fondateur, Kanoma",
  mobiapps: "Annabelle Sadet, Responsable des Ressources Humaines",
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
    src={certifiedBadge.url}
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
        <figure className="w-full sm:w-72 lg:w-80 shrink-0">
          <div className="overflow-hidden rounded-xl border border-border bg-foreground shadow-sm">
            <video
              src={src}
              poster={companyVideoPosters[company.key]}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>
          {companyVideoCaptions[company.key] && (
            <figcaption className="mt-2 text-center text-xs font-medium text-muted-foreground">
              {companyVideoCaptions[company.key]}
            </figcaption>
          )}
        </figure>
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
        className="aspect-[4/3] w-full sm:w-64 lg:w-72 shrink-0 rounded-xl border border-border object-cover shadow-sm"
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

const CompanyHeader = ({
  company,
  className = "mb-3",
}: {
  company: Company;
  className?: string;
}) => (
  <div className={`flex items-center justify-center sm:justify-start gap-3 ${className}`}>
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
);

const CompanyQuote = ({ company }: { company: Company }) => (
  <blockquote>
    <p
      className="font-serif-display italic text-sm sm:text-base text-foreground leading-relaxed"
      style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic" }}
    >
      « {company.quote} »
    </p>
    <footer className="mt-3 text-sm">
      <span className="font-semibold text-foreground">{company.quoteAuthor}</span>
      {company.quoteRole && (
        <span className="text-muted-foreground"> — {company.quoteRole}</span>
      )}
    </footer>
  </blockquote>
);

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
                company.key === "kanoma" ? (
                  <article
                    key={company.key}
                    className="sm:col-span-2 lg:col-span-3 flex flex-col rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CompanyHeader company={company} className="mb-6" />
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8">
                      <div className="w-full sm:w-auto shrink-0">
                        <CompanyMedia company={company} />
                      </div>
                      <div className="hidden sm:block w-px bg-border shrink-0" />
                      <hr className="sm:hidden w-full border-border" />
                      <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
                        <CompanyQuote company={company} />
                      </div>
                    </div>
                    <CertifiedBadge label={badgeLabel} />
                  </article>
                ) : (
                  <article
                    key={company.key}
                    className="sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CompanyMedia company={company} />
                    <div className="flex-1 text-center sm:text-left">
                      <CompanyHeader company={company} />
                      {company.quote ? (
                        <CompanyQuote company={company} />
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">{company.text}</p>
                      )}
                      <CertifiedBadge label={badgeLabel} />
                    </div>
                  </article>
                )
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
