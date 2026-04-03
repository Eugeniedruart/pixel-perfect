import { z } from "zod";

export const eligibiliteSchema = z.object({
  selectedCompany: z.string().min(1, "Veuillez sélectionner une entreprise"),
  companySize: z.string().min(1, "Veuillez sélectionner la taille de votre entreprise"),
  conventionCollective: z.string().min(1, "Veuillez sélectionner votre convention collective"),
  contactNom: z.string().optional(),
  contactPrenom: z.string().optional(),
  contactEmail: z.string().email("Veuillez entrer un e-mail valide").optional().or(z.literal("")),
  contactFonction: z.string().optional(),
});

export type EligibiliteFormData = z.infer<typeof eligibiliteSchema>;

export const stepFields: Record<number, (keyof EligibiliteFormData)[]> = {
  1: ["selectedCompany"],
  2: ["companySize"],
  3: ["conventionCollective"],
  4: ["contactNom", "contactPrenom", "contactEmail", "contactFonction"],
};
