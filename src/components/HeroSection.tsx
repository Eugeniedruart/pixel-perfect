import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const partners = ["MARRIOTT", "fnac", "Capgemini", "SAFRAN", "Manpower", "AIRFRANCE", "accenture"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Women Equity Label
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
          La référence de
          <br />
          l'égalité professionnelle
          <br />
          <span className="font-serif-display italic text-foreground font-normal">femmes-hommes</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Tester mon éligibilité
          </Button>
          <Button size="lg" className="min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90">
            Je veux être Welbellisé
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
          <span className="text-lg">🇫🇷</span>
          <span>Premier label français, 100% digital qui certifie et accompagne les entreprises</span>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-60">
          {partners.map((partner) => (
            <span key={partner} className="text-sm font-semibold text-muted-foreground tracking-wider">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
