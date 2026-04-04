import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepSiretProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepSiret = ({ form }: StepSiretProps) => {
  const { register, formState: { errors } } = form;

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Parlez-nous de votre{" "}
        <span className="font-serif-display italic font-normal text-primary">
          entreprise
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Ces informations nous permettent d'évaluer votre éligibilité
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Nom de l'entreprise
          </label>
          <Input
            {...register("companyName")}
            placeholder="Ex : Dupont & Associés"
          />
          {errors.companyName && (
            <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Nombre de salariés
          </label>
          <Input
            {...register("employeeCount")}
            placeholder="Ex : 45"
          />
          {errors.employeeCount && (
            <p className="text-sm text-destructive mt-1">{errors.employeeCount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Nom de la convention collective
          </label>
          <Input
            {...register("conventionCollective")}
            placeholder="Ex : Convention collective nationale de la métallurgie"
          />
          {errors.conventionCollective && (
            <p className="text-sm text-destructive mt-1">{errors.conventionCollective.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepSiret;
