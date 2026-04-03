import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import frenchFlag from "@/assets/french-flag.png";



const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(35,40%,92%)] via-[hsl(30,30%,95%)] to-background" />

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
          <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
            <Link to="/eligibilite">Tester mon éligibilité</Link>
          </Button>
          <Button size="lg" className="min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Je veux être Welbellisé</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
          <img src={frenchFlag} alt="Drapeau français" className="h-5 w-5 object-contain" width={512} height={512} />
          <span>Premier label français, 100% digital qui certifie et accompagne les entreprises</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
