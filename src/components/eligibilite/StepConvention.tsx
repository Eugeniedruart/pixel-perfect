import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { conventionOptions } from "@/lib/eligibilite-mock-data";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepConventionProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepConvention = ({ form }: StepConventionProps) => {
  const conventionCollective = form.watch("conventionCollective");

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Quelle est votre{" "}
        <span className="font-serif-display italic font-normal text-primary">
          convention collective ?
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Info supplémentaire pour comprendre la question si besoin
      </p>

      <label className="block text-sm font-semibold text-foreground mb-2">
        Nom de votre convention
      </label>
      <Select
        value={conventionCollective}
        onValueChange={(value) =>
          form.setValue("conventionCollective", value, { shouldValidate: true })
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sélectionnez votre convention" />
        </SelectTrigger>
        <SelectContent>
          {conventionOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {form.formState.errors.conventionCollective && (
        <p className="text-sm text-destructive mt-3">
          {form.formState.errors.conventionCollective.message}
        </p>
      )}
    </div>
  );
};

export default StepConvention;
