import { z } from "zod";

export const eligibiliteSchema = z.object({
  companyName: z.string().trim().min(1, "Veuillez entrer le nom de votre entreprise").max(200),
  employeeCount: z.string().trim().min(1, "Veuillez entrer le nombre de salariés").max(50),
  conventionCollective: z.string().trim().min(1, "Veuillez entrer votre convention collective").max(300),
  contactNom: z.string().optional(),
  contactPrenom: z.string().optional(),
  contactEmail: z.string().email("Veuillez entrer un e-mail valide").optional().or(z.literal("")),
  contactFonction: z.string().optional(),
});

export type EligibiliteFormData = z.infer<typeof eligibiliteSchema>;

export const stepFields: Record<number, (keyof EligibiliteFormData)[]> = {
  1: ["companyName", "employeeCount", "conventionCollective"],
  2: ["contactNom", "contactPrenom", "contactEmail", "contactFonction"],
};
