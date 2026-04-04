import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import frenchFlag from "@/assets/french-flag.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(35,40%,92%)] via-[hsl(30,30%,95%)] to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-8 sm:pb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 sm:mb-6">
          Women Equity Label
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
          La référence de
          <br />
          <span className="hidden sm:inline">l'égalité professionnelle</span>
          <span className="sm:hidden">l'égalité pro</span>
          <br />
          <span className="font-serif-display italic text-foreground font-normal">femmes-hommes</span>
        </h1>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-10">
          <Button variant="outline" size="default" className="sm:min-w-[200px] h-10 sm:h-12 text-sm sm:text-base" asChild>
            <Link to="/eligibilite">Tester mon éligibilité</Link>
          </Button>
          <Button size="default" className="sm:min-w-[200px] h-10 sm:h-12 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Je veux être Welbellisé</Link>
          </Button>
        </div>

        <p className="mt-5 sm:mt-8 text-xs sm:text-sm text-muted-foreground text-center">
          <img src={frenchFlag} alt="Drapeau français" className="inline-block h-4 w-4 sm:h-5 sm:w-5 object-contain align-middle mr-1" width={512} height={512} />
          <span className="align-middle">Premier label français<br />qui certifie et accompagne les entreprises</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
