import { UseFormReturn } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { companySizeOptions } from "@/lib/eligibilite-mock-data";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepTailleProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepTaille = ({ form }: StepTailleProps) => {
  const companySize = form.watch("companySize");

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Quelle est la taille de votre{" "}
        <span className="font-serif-display italic font-normal text-primary">
          entreprise ?
        </span>
      </h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        L'effectif des salariés à prendre en compte pour le calcul des indicateurs est
        apprécié en effectif physique sur la période de référence annuelle considérée. Ne
        sont pas pris en compte dans l'effectif : les salariés mis à la disposition de
        l'entreprise par une entreprise extérieure (dont les intérimaires) ainsi que les
        expatriés.
      </p>

      <RadioGroup
        value={companySize}
        onValueChange={(value) => form.setValue("companySize", value, { shouldValidate: true })}
        className="space-y-3"
      >
        {companySizeOptions.map((option) => (
          <div key={option.value} className="flex items-center space-x-3">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-base font-normal cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {form.formState.errors.companySize && (
        <p className="text-sm text-destructive mt-3">
          {form.formState.errors.companySize.message}
        </p>
      )}
    </div>
  );
};

export default StepTaille;
