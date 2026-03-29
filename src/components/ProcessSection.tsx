import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Obtenez un devis personnalisé",
    description: "Quelques questions sur votre entreprise afin de vous fournir un devis personnalisé à vos besoins.",
    badge: "Rien ne vous engage !",
  },
  {
    number: 2,
    title: "Complétez l'audit basé sur 4 piliers",
    description: "Une fois votre devis signé et renvoyé, vous avez 3 mois pour remplir l'audit et vous le renvoyer pour validation",
    badge: null,
  },
  {
    number: 3,
    title: "Analyse par nos experts WEL",
    description: "Vous obtenez un score provisoire pendant que nous vérifions vos réponses. Sous quelques semaines, obtenez votre score final ainsi que votre label WEL !",
    badge: null,
  },
  {
    number: 4,
    title: "Bravo, vous êtes Welbelisé !",
    description: "Communiquez dès maintenant sur votre label et mettez en place des actions concrètes grâce à nos recommandations personnalisées",
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
          Notre processus de label WEL repose sur une démarche d'évaluation rigoureuse, adaptée à la taille de votre entreprise,
          votre convention collective et votre secteur d'activité.
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
          <Button variant="outline" size="lg">Tester mon éligibilité</Button>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Je veux être Welbellisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
