import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ctaPortrait from "@/assets/cta-portrait.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote banner */}
        <div className="rounded-xl bg-primary p-8 sm:p-12 text-center mb-16">
          <p className="text-primary-foreground text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            L'égalité femmes-hommes n'est pas un combat de genre.
            <br />
            C'est une question de droits, de chances égales et de responsabilité collective.
          </p>
        </div>

        {/* CTA card */}
        <div className="max-w-3xl mx-auto rounded-xl bg-muted/50 border border-border overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Prêt·e à obtenir votre label ?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Le diagnostic WEL vous permet d'évaluer vos pratiques,
                d'identifier vos leviers d'amélioration et d'obtenir une
                label reconnue, adaptée à votre entreprise.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="outline" size="sm">Tester mon éligibilité</Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link to="/contact">Je veux être Welbellisé</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Audit structuré · Accompagnement · Délai flexible
              </p>
            </div>
            <div className="md:col-span-2 min-h-[200px]">
              <img src={ctaPortrait} alt="Professionnelle" className="w-full h-full object-cover" loading="lazy" width={600} height={800} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
