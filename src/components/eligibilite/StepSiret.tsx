import { UseFormReturn } from "react-hook-form";
import CompanyCard from "./CompanyCard";
import { mockCompanies } from "@/lib/eligibilite-mock-data";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepSiretProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepSiret = ({ form }: StepSiretProps) => {
  const selectedCompany = form.watch("selectedCompany");

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Quelle est votre{" "}
        <span className="font-serif-display italic font-normal text-primary">
          entreprise ?
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Info supplémentaire pour comprendre la question si besoin
      </p>

      <div className="space-y-3">
        {mockCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            isSelected={selectedCompany === company.id}
            onSelect={() => form.setValue("selectedCompany", company.id, { shouldValidate: true })}
          />
        ))}
      </div>

      {form.formState.errors.selectedCompany && (
        <p className="text-sm text-destructive mt-3">
          {form.formState.errors.selectedCompany.message}
        </p>
      )}
    </div>
  );
};

export default StepSiret;
