import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompanyCard from "./CompanyCard";
import { mockCompanies } from "@/lib/eligibilite-mock-data";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepSiretProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepSiret = ({ form }: StepSiretProps) => {
  const [siretQuery, setSiretQuery] = useState("");
  const [results, setResults] = useState<typeof mockCompanies>([]);
  const selectedCompany = form.watch("selectedCompany");

  const handleSearch = () => {
    if (!siretQuery.trim()) return;
    const filtered = mockCompanies.filter(
      (c) =>
        c.siret.includes(siretQuery.replace(/\s/g, "")) ||
        c.name.toLowerCase().includes(siretQuery.toLowerCase())
    );
    setResults(filtered);
  };

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

      <label className="block text-sm font-semibold text-foreground mb-2">SIRET</label>
      <div className="flex gap-3 mb-6">
        <Input
          value={siretQuery}
          onChange={(e) => setSiretQuery(e.target.value)}
          placeholder="845 405 711 00027"
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleSearch())}
        />
        <Button type="button" variant="outline" onClick={handleSearch}>
          Rechercher
        </Button>
      </div>

      {results.length > 0 && (
        <p className="text-sm text-muted-foreground mb-4">
          {results.length} entreprise{results.length > 1 ? "s" : ""} trouvée
          {results.length > 1 ? "s" : ""}
        </p>
      )}

      <div className="space-y-3">
        {results.map((company) => (
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
