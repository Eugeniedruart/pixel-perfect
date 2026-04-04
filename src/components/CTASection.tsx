import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ctaPortrait from "@/assets/cta-portrait.jpg";

const CTASection = () => {
  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote banner */}
        <div className="rounded-xl bg-primary p-5 sm:p-12 text-center mb-6 md:mb-16">
          <p className="text-primary-foreground text-sm sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            L'égalité femmes-hommes n'est pas un combat de genre.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            C'est une question de droits et de responsabilité collective.
          </p>
        </div>

        {/* CTA card */}
        <div className="max-w-3xl mx-auto rounded-xl bg-muted/50 border border-border overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Prêt·e à obtenir votre label ?</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
                Évaluez vos pratiques, identifiez vos leviers et obtenez un label reconnu.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-3">
                <Button variant="outline" size="sm" className="w-full sm:w-auto h-10" asChild>
                  <Link to="/eligibilite">Tester mon éligibilité</Link>
                </Button>
                <Button size="sm" className="w-full sm:w-auto h-10 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/contact">Je veux être Welbellisé</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Diagnostic · Accompagnement · Stratégie durable
              </p>
            </div>
            <div className="hidden md:block md:col-span-2 min-h-[200px]">
              <img src={ctaPortrait} alt="Professionnelle" className="w-full h-full object-cover object-[center_20%] scale-110" loading="lazy" width={600} height={800} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
