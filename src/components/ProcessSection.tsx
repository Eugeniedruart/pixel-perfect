import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Évaluer votre éligibilité",
    description: "Quelques questions sur votre entreprise afin de comprendre votre niveau de maturité et l'adéquation avec le label WEL.",
    badge: "Rien ne vous engage !",
  },
  {
    number: 2,
    title: "Réaliser le diagnostic",
    description: "Nos équipes interviennent au sein de votre entreprise pour conduire un diagnostic structuré autour des 4 piliers du label WEL, en collaboration avec vos équipes.",
    badge: null,
  },
  {
    number: 3,
    title: "Analyse et validation",
    description: "Les éléments recueillis sont analysés puis examinés par notre équipe d'experts afin d'assurer la rigueur et la cohérence de l'évaluation.",
    badge: null,
  },
  {
    number: 4,
    title: "Bravo, vous êtes welbellisés !",
    description: "Si votre niveau de maturité le permet, vous accédez à la labellisation WEL. Dans tous les cas, vous bénéficiez d'une analyse approfondie et de recommandations personnalisées pour inscrire votre démarche dans une trajectoire de progrès durable.",
    badge: null,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Notre processus de labellisation
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Une méthode objective
          <br />
          <span className="font-serif-display italic text-primary font-normal">adaptée à votre réalité</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mt-4 mb-16">
          Notre processus de labellisation WEL repose sur une démarche d'évaluation rigoureuse, adaptée à la taille de votre entreprise et votre secteur d'activité.
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Number circle */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-lg font-semibold text-foreground">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 border-t-2 border-dashed border-border ml-2" />
                )}
              </div>

              <h3 className="font-bold text-lg text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {step.badge && (
                <span className="inline-block mt-4 text-xs font-medium text-wel-green-dark bg-wel-green/40 px-3 py-1.5 rounded-full">
                  {step.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Button variant="outline" size="lg" asChild>
            <Link to="/eligibilite">Tester mon éligibilité</Link>
          </Button>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/contact">Je veux être Welbellisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
