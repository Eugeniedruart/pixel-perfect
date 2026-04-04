import benefitsWoman from "@/assets/benefits-woman.jpg";

const benefits = [
  {
    title: "Pilotage RH & RSE",
    description: "Identifiez vos leviers d'action et suivez vos progrès.",
  },
  {
    title: "Conformité claire",
    description: "Anticipez les obligations françaises et européennes.",
  },
  {
    title: "Marque employeur renforcée",
    description: "Attirez talents, partenaires et investisseurs engagés.",
  },
  {
    title: "Performance durable",
    description: "L'égalité comme moteur d'engagement et de transformation.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          Les bénéfices
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Ce que WEL vous
          <br />
          <span className="font-serif-display italic text-primary font-normal">apporte</span>
        </h2>
        <p className="text-xs sm:text-base text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-8 md:mb-12">
          Une méthodologie de mesure et de pilotage de l'impact :
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Benefits list */}
          <div className="space-y-3 md:space-y-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-foreground shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{benefit.title}</p>
                  <p className="text-muted-foreground text-xs md:text-sm mt-0.5">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image - compact on mobile, tall on desktop */}
          <div className="rounded-xl overflow-hidden h-48 md:h-auto">
            <img src={benefitsWoman} alt="Professionnelle souriante" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
