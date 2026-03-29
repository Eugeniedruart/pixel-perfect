const pillars = [
  { title: "La gouvernance", questions: "15 questions" },
  { title: "L'égalité salariale", questions: "15 questions" },
  { title: "Prévention du sexisme, du harcèlement et promotion de la culture inclusive", questions: "15 questions" },
  { title: "L'équilibre vie pro-vie perso", questions: "15 questions" },
];

const AuditSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          L'audit en 4 piliers
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Complétez un audit
          <br />
          <span className="font-serif-display italic text-primary font-normal">personnalisé à votre entreprise</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mt-4 mb-12">
          Nos équipes interviennent au sein de votre entreprise pour réaliser un{" "}
          <strong className="text-foreground">audit structuré autour des 4 piliers du label WEL</strong>.{" "}
          Les éléments sont ensuite analysés et validés par notre équipe d'experts. Cette démarche s'accompagne d'outils concrets, afin d'inscrire votre engagement dans une trajectoire de progrès durable.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex items-center justify-between"
              style={{
                background: `linear-gradient(135deg, hsl(245 58% ${63 + i * 5}%), hsl(245 58% ${70 + i * 5}%))`,
              }}
            >
              <p className="text-primary-foreground font-medium text-sm pr-4">{pillar.title}</p>
              <span className="text-primary-foreground/80 text-sm whitespace-nowrap">{pillar.questions}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
