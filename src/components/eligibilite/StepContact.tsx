import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepContactProps {
  form: UseFormReturn<EligibiliteFormData>;
  onSkip?: () => void;
}

const StepContact = ({ form }: StepContactProps) => {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        C'est bientôt{" "}
        <span className="font-serif-display italic font-normal text-primary">
          fini !
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Indiquez-nous un contact afin de recevoir un 1er rapport d'éligibilité
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Nom</label>
          <Input {...register("contactNom")} placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Prénom</label>
          <Input {...register("contactPrenom")} placeholder="Votre prénom" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
          <Input {...register("contactEmail")} type="email" placeholder="votre@email.com" />
          {errors.contactEmail && (
            <p className="text-sm text-destructive mt-1">{errors.contactEmail.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Fonction</label>
          <Input {...register("contactFonction")} placeholder="Votre fonction" />
        </div>
      </div>
    </div>
  );
};

export default StepContact;
