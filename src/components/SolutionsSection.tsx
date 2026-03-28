import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import solutionLabellisation from "@/assets/solution-labellisation.jpg";
import solutionConseil from "@/assets/solution-conseil.jpg";

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Nos solutions
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Des solutions
          <br />
          <span className="font-serif-display italic text-primary font-normal">sur-mesure</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 mb-12">
          Nous vous proposons des solutions adaptées à votre niveau de maturité
          en termes d'égalité femmes-hommes.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Labellisation card */}
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-48 overflow-hidden">
              <img src={solutionLabellisation} alt="Labellisation" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Labellisation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Faites connaître votre engagement pour l'égalité avec :
              </p>
              <div className="space-y-3 mb-6">
                <div className="border border-border rounded-lg p-3">
                  <p className="text-sm text-foreground text-center">
                    Audit, évaluation et labellisation de vos pratiques
                    en matière d'égalité professionnelle.
                  </p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground text-center">
                    Un accompagnement pragmatique, progressif et adapté à vos enjeux.
                  </p>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                Je veux être Welbellisé
              </Button>
            </div>
          </div>

          {/* Conseil card */}
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="h-48 overflow-hidden">
              <img src={solutionConseil} alt="Conseil" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Conseil</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Parcours sur mesure : formations, sensibilisation, enquêtes internes,
                préparation à la conformité réglementaire.
              </p>
              <Button variant="outline" className="w-full gap-2">
                Nous contacter <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
