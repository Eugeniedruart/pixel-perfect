import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import solutionLabellisation from "@/assets/solution-labellisation.jpg";
import solutionConseil from "@/assets/solution-conseil.jpg";

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Nos solutions
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Des solutions
          <br />
          <span className="font-serif-display italic text-primary font-normal">sur-mesure</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          Adaptées à votre niveau de maturité en égalité F/H.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Labellisation card */}
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-36 md:h-48 overflow-hidden">
              <img src={solutionLabellisation} alt="Labellisation" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Labellisation</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                Diagnostic, évaluation et labellisation de vos pratiques en égalité professionnelle.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm" asChild>
                <Link to="/contact">Je veux être Welbellisé</Link>
              </Button>
            </div>
          </div>

          {/* Conseil card */}
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-36 md:h-48 overflow-hidden">
              <img src={solutionConseil} alt="Conseil" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Conseil</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-6">
                Formations, sensibilisation, enquêtes internes et préparation à la conformité. Un accompagnement pragmatique et progressif.
              </p>
              <Button variant="outline" className="w-full h-11 gap-2" asChild>
                <Link to="/contact">En savoir plus <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
