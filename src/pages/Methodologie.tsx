import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Équité salariale",
  "Représentation des femmes dans les instances de décision",
  "Prévention du sexisme et du harcèlement",
  "Équilibre entre vie professionnelle et personnelle",
];

const resultsList = [
  "un plan d'action personnalisé",
  "un rapport d'indicateurs extra-financiers",
  "un kit de communication pour valoriser votre engagement",
  "une mise en relation avec un écosystème de partenaires engagés",
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{title}</h2>
    {children}
  </div>
);

const Methodologie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Méthodologie
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Notre{" "}
            <span className="font-serif-display italic text-primary font-normal">méthodologie</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Le label WEL repose sur une méthodologie rigoureuse, alignée aux exigences réglementaires françaises et européennes, et conçue pour accompagner les organisations dans une transformation durable en matière d'égalité professionnelle.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 4 Piliers */}
          <Section title="Une approche structurée autour de 4 piliers">
            <p className="text-muted-foreground mb-6">
              La méthodologie WEL s'articule autour de quatre piliers couvrant l'ensemble des enjeux structurants de l'égalité professionnelle :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border p-4 bg-card">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground font-medium text-sm">{pillar}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Référentiel */}
          <Section title="Un référentiel aligné aux exigences légales">
            <p className="text-muted-foreground mb-4">
              Le référentiel WEL est construit en alignement avec les lois françaises (Index Égalité Professionnelle, loi Rixain…) et les directives européennes, notamment en matière de transparence salariale.
            </p>
            <p className="text-muted-foreground">
              La labellisation repose sur un principe fondamental : seules les organisations respectant leurs obligations légales peuvent accéder au label.
            </p>
          </Section>

          {/* Complémentaire */}
          <Section title="Une démarche complémentaire à l'Index Égalité">
            <p className="text-muted-foreground mb-4">
              Le label WEL est complémentaire à l'Index Égalité Professionnelle. Là où l'Index mesure un niveau de conformité, WEL permet de valoriser l'ensemble des actions mises en place par l'organisation.
            </p>
            <p className="text-muted-foreground">
              Il reconnaît notamment les efforts des entreprises évoluant dans des secteurs historiquement masculins, pour lesquelles l'atteinte d'une parfaite mixité peut être structurellement plus complexe, mais qui déploient des initiatives concrètes et engagées.
            </p>
          </Section>

          {/* Évaluation */}
          <Section title="Une évaluation fondée sur des éléments concrets">
            <p className="text-muted-foreground mb-4">
              L'évaluation repose sur un diagnostic structuré, fondé sur des critères mesurables, l'analyse de données et des échanges avec les équipes.
            </p>
            <p className="text-muted-foreground">
              La démarche ne repose pas sur du déclaratif, mais sur des éléments tangibles permettant de garantir une évaluation objective, rigoureuse et cohérente.
            </p>
          </Section>

          {/* Adaptée */}
          <Section title="Une méthodologie adaptée à chaque organisation">
            <p className="text-muted-foreground mb-4">
              Le diagnostic WEL est conçu pour s'adapter aux spécificités de chaque structure :
            </p>
            <div className="flex gap-4 mb-4">
              {["entreprises privées", "organisations publiques"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 bg-card">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              Il prend également en compte la taille, le secteur d'activité et les réalités opérationnelles de l'organisation.
            </p>
          </Section>

          {/* Gouvernance */}
          <Section title="Une gouvernance garantissant la crédibilité du label">
            <p className="text-muted-foreground mb-4">
              Le référentiel et les standards du label sont supervisés par un comité éthique indépendant, composé de dirigeants, DRH et experts académiques.
            </p>
            <p className="text-muted-foreground">
              Ce comité veille à la rigueur, à la cohérence et à l'évolution du label dans le temps.
            </p>
          </Section>

          {/* Transformation */}
          <Section title="Une démarche orientée transformation">
            <p className="text-muted-foreground mb-4">
              Au-delà de l'évaluation, la méthodologie WEL vise à structurer une trajectoire de progrès durable.
            </p>
            <p className="text-muted-foreground">
              Chaque organisation bénéficie de résultats concrets pour piloter et faire évoluer ses pratiques dans le temps.
            </p>
          </Section>

          {/* Performance extra-financière */}
          <Section title="Des outils au service de votre performance extra-financière">
            <p className="text-muted-foreground mb-4">
              Le label WEL constitue un levier de valorisation extra-financière et un atout dans le cadre des appels d'offres, où les critères ESG et d'égalité professionnelle prennent une place croissante.
            </p>
            <p className="text-muted-foreground">
              Il permet de structurer, objectiver et valoriser les engagements de l'organisation auprès de ses parties prenantes.
            </p>
          </Section>

          {/* Résultats */}
          <Section title="Des résultats concrets pour structurer votre démarche">
            <p className="text-muted-foreground mb-6">
              La démarche WEL s'accompagne de résultats concrets, parmi lesquels :
            </p>
            <div className="space-y-3">
              {resultsList.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border p-4 bg-card">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Modèle accessible */}
          <Section title="Un modèle accessible et structuré">
            <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
              <p className="text-muted-foreground mb-2">L'accompagnement débute à partir de</p>
              <p className="text-3xl font-bold text-primary">3 900€</p>
              <p className="text-muted-foreground text-sm mt-2">en fonction de la taille et de la complexité de l'organisation.</p>
            </div>
          </Section>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodologie;
