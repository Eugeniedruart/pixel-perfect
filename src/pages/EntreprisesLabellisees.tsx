import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";
import { Play } from "lucide-react";
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

const logoSizes: Record<string, string> = {
  cite: "max-h-12 max-w-[150px]",
  mobiapps: "max-h-8 max-w-[130px]",
  kanoma: "max-h-10 max-w-[130px]",
  exponantes: "max-h-12 max-w-[150px]",
  prolaser: "max-h-16 max-w-[170px]",
  valeuriad: "max-h-12 max-w-[150px]",
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
  mobiapps: "Annabelle Sadet — Responsable des Ressources Humaines, Mobiapps",
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

/** Video thumbnail that only loads the video file once the visitor clicks play. */
const VideoTestimonial = ({ company }: { company: Company }) => {
  const [playing, setPlaying] = useState(false);
  const src = companyVideos[company.key];
  const poster = companyVideoPosters[company.key];
  const caption = companyVideoCaptions[company.key];

  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-xl border border-border bg-foreground">
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            preload="metadata"
            playsInline
            className="aspect-video w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Lire le témoignage vidéo de ${company.name}`}
            className="group relative block aspect-video w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={poster}
              alt={`Témoignage vidéo – ${company.name}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-foreground/25 transition-colors group-hover:bg-foreground/40" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-primary shadow-md transition-transform group-hover:scale-105">
                <Play className="h-6 w-6 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs font-medium text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const PhotoTestimonial = ({ company }: { company: Company }) => (
  <img
    src={companyPhotos[company.key]}
    alt={`Remise du label WEL à l'équipe de ${company.name}`}
    loading="lazy"
    className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
  />
);

const Quote = ({ company }: { company: Company }) => (
  <blockquote className="mt-4">
    <p
      className="font-serif-display italic text-sm text-foreground leading-relaxed"
      style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic" }}
    >
      « {company.quote} »
    </p>
    {company.quoteAuthor && (
      <footer className="mt-2 text-sm">
        <span className="font-semibold text-foreground">{company.quoteAuthor}</span>
        {company.quoteRole && (
          <span className="text-muted-foreground"> — {company.quoteRole}</span>
        )}
      </footer>
    )}
  </blockquote>
);

const CompanyCard = ({ company, badgeLabel }: { company: Company; badgeLabel: string }) => {
  const href = companyWebsites[company.key];
  const logo = companyLogos[company.key];
  const hasVideo = company.mediaType === "video" && companyVideos[company.key];
  const hasPhoto = company.mediaType === "photo" && companyPhotos[company.key];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Logo */}
      <div className="flex h-16 items-center">
        {logo ? (
          <img
            src={logo}
            alt={`Logo de ${company.name}, entreprise labellisée WEL`}
            loading="lazy"
            className={`object-contain ${logoSizes[company.key] ?? "max-h-12 max-w-[150px]"}`}
          />
        ) : (
          <span className="text-lg font-bold text-wel-blue">{company.name}</span>
        )}
      </div>

      {/* Identity */}
      <h2 className="mt-3 text-lg font-semibold leading-tight text-foreground">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 decoration-primary/60 hover:underline"
          >
            {company.name}
          </a>
        ) : (
          company.name
        )}
      </h2>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-wel-blue-light px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-wel-navy">
          {company.sector}
        </span>
        {company.labelDate && (
          <span className="text-xs text-muted-foreground">
            Labellisée depuis {company.labelDate}
          </span>
        )}
      </div>

      {/* Testimonial slot */}
      <div className="mt-4 flex-1">
        {hasVideo && <VideoTestimonial company={company} />}
        {hasPhoto && <PhotoTestimonial company={company} />}
        {company.quote ? (
          <Quote company={company} />
        ) : (
          !hasVideo &&
          !hasPhoto && (
            <p className="text-sm leading-relaxed text-muted-foreground">{company.text}</p>
          )
        )}
        {!company.quote && (hasVideo || hasPhoto) && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{company.text}</p>
        )}
      </div>

      {/* Label badge */}
      <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
        <img
          src={certifiedBadge.url}
          alt={badgeLabel}
          loading="lazy"
          className="h-10 w-auto object-contain"
        />
        <span className="text-xs font-medium text-muted-foreground">{badgeLabel}</span>
      </div>
    </article>
  );
};

const EntreprisesLabellisees = () => {
  const { t } = useTranslation();
  const companies = t("labeled.companies", { returnObjects: true }) as Company[];
  const badgeLabel = t("labeled.badge");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-wel-blue-light/40 py-10 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {t("labeled.eyebrow")}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t("labeled.h1Main")}
              <span className="block mt-1 text-lg sm:text-xl font-medium text-muted-foreground">
                {t("labeled.h1Sub")}
              </span>
            </h1>
            <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {t("labeled.intro")}
            </p>
          </div>
        </section>

        {/* Companies grid */}
        <section className="py-10 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {companies.map((company) => (
                <CompanyCard key={company.key} company={company} badgeLabel={badgeLabel} />
              ))}
            </div>

            <p className="mt-10 md:mt-20 text-center text-base sm:text-lg font-medium text-foreground">
              {t("labeled.transition")}
            </p>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default EntreprisesLabellisees;
