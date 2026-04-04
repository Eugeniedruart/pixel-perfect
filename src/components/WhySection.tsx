import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import whyImg from "@/assets/team-meeting.jpg";
import womanTablet from "@/assets/woman-tablet.jpg";

const WhySection = () => {
  return (
    <section id="label" className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Découvrir le label
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Pourquoi un label
          <br />
          <span className="font-serif-display italic text-primary font-normal">d'égalité F/H ?</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          Premier label européen qui certifie et accompagne les entreprises engagées
          pour l'égalité professionnelle.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {/* Image - hidden on mobile */}
          <div className="hidden md:block rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded overflow-hidden h-72">
              <img src={whyImg} alt="Équipe diverse collaborant" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
            </div>
          </div>

          {/* Stat */}
          <div className="rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded bg-primary p-6 md:p-8 flex flex-col justify-center text-primary-foreground h-full">
              <p className="text-sm md:text-lg mb-2 text-center">
                À ce rythme, l'égalité pro sera atteinte en
              </p>
              <p className="text-5xl md:text-7xl font-bold font-serif-display italic text-center">2167</p>
            </div>
          </div>

          {/* Quote */}
          <div className="rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded bg-wel-cream p-4 md:p-6 flex flex-col justify-center h-full">
              <p className="text-sm md:text-lg leading-relaxed text-foreground text-center">
                L'égalité doit devenir un standard clair, mesurable et partagé.
              </p>
              <p className="text-sm md:text-lg font-serif-display italic mt-3 text-foreground text-center font-medium">
                C'est de cette conviction qu'est né WEL
              </p>
            </div>
          </div>

          {/* Image - hidden on mobile */}
          <div className="hidden md:block rounded-lg border border-wel-cream bg-card p-2">
            <div className="rounded overflow-hidden h-72">
              <img src={womanTablet} alt="Femme professionnelle" className="w-full h-full object-cover object-[center_30%]" loading="lazy" width={768} height={1024} />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 px-0">
          <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 mx-auto block" asChild>
            <Link to="/contact">Je veux être Welbellisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
