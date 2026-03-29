import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import whyImg from "@/assets/why-section.jpg";
import womanTablet from "@/assets/woman-tablet.jpg";

const WhySection = () => {
  return (
    <section id="label" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Découvrir le label
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Pourquoi un label d'égalité
          <br />
          <span className="font-serif-display italic text-primary font-normal">femmes-hommes ?</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 mb-12">
          Women Equity Label est le premier label européen qui certifie et accompagne les entreprises engagées
          pour l'égalité professionnelle femmes-hommes.
        </p>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto py-0 my-0">
          {/* Top left - image */}
          <div className="rounded-xl overflow-hidden h-64">
            <img src={whyImg} alt="Équipe diverse collaborant" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
          </div>

          {/* Top right - stat */}
          <div className="rounded-xl bg-primary p-8 flex flex-col items-center justify-center text-primary-foreground relative">
            <p className="text-lg mb-2 text-center">
              À ce rythme, l'égalité professionnelle <br /> sera atteinte en
            </p>
            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-1">
              <path d="M25 2 C30 8 35 18 35 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M30 26 L35 32 L40 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <p className="text-7xl font-bold font-serif-display italic text-center sm:text-5xl">2167</p>
          </div>

          {/* Bottom left - quote */}
          <div className="rounded-xl bg-wel-cream p-8 flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-foreground text-center">
              L'égalité ne peut plus être une intention : elle doit devenir un standard clair,
              mesurable et partagé.
            </p>
            <p className="text-lg font-serif-display italic mt-4 text-foreground text-center font-medium">
              C'est de cette conviction qu'est né WEL, le Women Equity Label
            </p>
          </div>

          {/* Bottom right - image */}
          <div className="rounded-xl overflow-hidden h-72">
            <img src={womanTablet} alt="Femme professionnelle" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Je veux être Welbellisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
