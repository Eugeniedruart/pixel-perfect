import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ai-je le droit d'utiliser le logo ?",
    answer: "Oui, une fois labellisé, vous recevez le droit d'utiliser le logo WEL sur vos supports de communication selon les conditions définies dans votre contrat de labellisation.",
  },
  {
    question: "Quels documents dois-je fournir ?",
    answer: "Les documents nécessaires dépendent de la taille de votre entreprise et de votre secteur d'activité. Notre équipe vous guidera à chaque étape pour vous assurer de fournir les éléments requis.",
  },
  {
    question: "Comment garantissez-vous la\u00a0confidentialité\u00a0?",
    answer: "WEL s'est engagé dans une mise en conformité RGPD, contractualisée en amont. La confidentialité des réponses est une priorité absolue.",
  },
  {
    question: "Pourquoi WEL n'est pas du \"women washing\" ?",
    answer: "WEL repose sur des preuves, des critères mesurables et une analyse indépendante. L'objectif est de transformer durablement les pratiques, pas de valoriser une image.",
  },
  {
    question: "Qui est derrière le label WEL ?",
    answer: "L'audit est réalisé par les équipes WEL selon une méthodologie structurée. Un comité éthique indépendant supervise le référentiel et garantit la rigueur de la démarche.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-10 md:py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-12">
          Foire aux <span className="font-serif-display italic text-primary font-normal">questions</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-4 md:px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-xs md:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
