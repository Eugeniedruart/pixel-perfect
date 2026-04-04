import { z } from "zod";

export const eligibiliteSchema = z.object({
  // Step 1 — Company info
  companyName: z.string().trim().min(1, "Veuillez entrer le nom de votre entreprise").max(200),
  employeeCount: z.string().trim().min(1, "Veuillez entrer le nombre de salariés").max(50),
  conventionCollective: z.string().trim().min(1, "Veuillez entrer votre convention collective").max(300),

  // Step 2 — Questionnaire
  q_remuneration_mesure: z.string().min(1, "Veuillez répondre à cette question"),
  q_remuneration_actions: z.string().min(1, "Veuillez répondre à cette question"),
  q_gouvernance_part: z.string().min(1, "Veuillez répondre à cette question"),
  q_gouvernance_objectifs: z.string().min(1, "Veuillez répondre à cette question"),
  q_prevention_actions: z.string().min(1, "Veuillez répondre à cette question"),
  q_prevention_formation: z.string().min(1, "Veuillez répondre à cette question"),
  q_equilibre_dispositifs: z.string().min(1, "Veuillez répondre à cette question"),
  q_equilibre_politiques: z.string().min(1, "Veuillez répondre à cette question"),
  q_engagement_12mois: z.string().min(1, "Veuillez répondre à cette question"),

  // Step 3 — Contact
  contactNom: z.string().optional(),
  contactPrenom: z.string().optional(),
  contactEmail: z.string().email("Veuillez entrer un e-mail valide").optional().or(z.literal("")),
  contactFonction: z.string().optional(),
});

export type EligibiliteFormData = z.infer<typeof eligibiliteSchema>;

export const stepFields: Record<number, (keyof EligibiliteFormData)[]> = {
  1: ["companyName", "employeeCount", "conventionCollective"],
  2: [
    "q_remuneration_mesure", "q_remuneration_actions",
    "q_gouvernance_part", "q_gouvernance_objectifs",
    "q_prevention_actions", "q_prevention_formation",
    "q_equilibre_dispositifs", "q_equilibre_politiques",
    "q_engagement_12mois",
  ],
  3: ["contactNom", "contactPrenom", "contactEmail", "contactFonction"],
};
