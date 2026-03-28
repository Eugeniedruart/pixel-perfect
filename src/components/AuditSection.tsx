const pillars = [
  { title: "La gouvernance", questions: "XX questions" },
  { title: "L'égalité salariale", questions: "XX questions" },
  { title: "Prévention du sexisme, du harcèlement et promotion de la culture inclusive", questions: "XX questions" },
  { title: "L'équilibre vie pro-vie perso", questions: "XX questions" },
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
          Dès la signature du devis, vous avez 3 mois pour{" "}
          <strong className="text-foreground">remplir à votre rythme l'audit qui repose sur 4 piliers</strong>{" "}
          essentiels à la label WEL. Une fois l'audit complet, vous pourrez l'envoyer pour validation à notre équipe d'experts WEL.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left - platform mockup */}
          <div className="rounded-xl border border-border bg-muted/30 p-4 flex items-center justify-center min-h-[300px]">
            <div className="w-full max-w-md bg-background rounded-lg shadow-sm border border-border p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <div className="w-2 h-2 rounded-full bg-wel-green" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-muted-foreground ml-2">www.womenequitylabel.fr</span>
              </div>
              <p className="font-semibold text-sm text-foreground">Votre audit <span className="font-serif-display italic text-primary">WEL</span></p>
              {pillars.map((p, i) => (
                <div key={i} className="border border-border rounded-lg p-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Pilier {i + 1}</p>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                  <div className="mt-2">
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Compléter le pilier →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - pillar cards */}
          <div className="space-y-3">
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
      </div>
    </section>
  );
};

export default AuditSection;
