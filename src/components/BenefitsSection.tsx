import benefitsWoman from "@/assets/benefits-woman.jpg";

const benefits = [
  {
    title: "Un outil de pilotage RH & RSE",
    description: "→ Identifiez vos leviers d'action et suivez vos progrès dans le temps.",
  },
  {
    title: "Un cadre de conformité clair",
    description: "→ Anticipez les obligations françaises et européennes liées à l'égalité professionnelle.",
  },
  {
    title: "Une marque employeur renforcée",
    description: "→ Attirez talents, partenaires et investisseurs engagés.",
  },
  {
    title: "Un levier de performance durable",
    description: "→ L'égalité comme moteur d'engagement et de transformation.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Les bénéfices
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Ce que le label WEL
          <br />
          <span className="font-serif-display italic text-primary font-normal">apporte à votre entreprise</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 mb-12">
          Grâce à une méthodologie de mesure et de pilotage de l’impact, WEL vous offre :
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left - benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{benefit.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - image */}
          <div className="rounded-xl overflow-hidden">
            <img src={benefitsWoman} alt="Professionnelle souriante" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
