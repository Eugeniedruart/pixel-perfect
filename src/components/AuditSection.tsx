const pillars = [
  { title: "La gouvernance", questions: "15 questions" },
  { title: "L'égalité salariale", questions: "15 questions" },
  { title: "Prévention du sexisme et culture inclusive", questions: "15 questions" },
  { title: "L'équilibre de vie", questions: "15 questions" },
];

const AuditSection = () => {
  return (
    <section className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-3">
          L'audit en 4 piliers
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-2">
          Un audit
          <br />
          <span className="font-serif-display italic text-primary font-normal">personnalisé</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-3xl mx-auto mt-3 mb-8 md:mb-12">
          Un <strong className="text-foreground">audit structuré autour de 4 piliers</strong>, analysé par nos experts pour inscrire votre engagement dans une trajectoire durable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-xl p-4 md:p-5 flex items-center justify-between"
              style={{
                background: `linear-gradient(135deg, hsl(245 58% ${63 + i * 5}%), hsl(245 58% ${70 + i * 5}%))`,
              }}
            >
              <p className="text-primary-foreground font-medium text-xs sm:text-sm pr-3">{pillar.title}</p>
              <span className="text-primary-foreground/80 text-xs sm:text-sm whitespace-nowrap">{pillar.questions}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
