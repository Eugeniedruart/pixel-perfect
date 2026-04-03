import { Building2 } from "lucide-react";
import type { MockCompany } from "@/lib/eligibilite-mock-data";

interface CompanyCardProps {
  company: MockCompany;
  isSelected: boolean;
  onSelect: () => void;
}

const CompanyCard = ({ company, isSelected, onSelect }: CompanyCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left p-5 rounded-lg border transition-colors ${
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border hover:border-muted-foreground/30"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-foreground">{company.name}</span>
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{company.siret}</span>
          </div>
          <p className="text-sm text-muted-foreground">{company.address}</p>
          <p className="text-sm text-muted-foreground">{company.city}</p>
        </div>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          <span className="text-sm text-muted-foreground">
            {isSelected ? "Sélectionné" : "Sélectionner"}
          </span>
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              isSelected ? "border-primary" : "border-border"
            }`}
          >
            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
          </div>
        </div>
      </div>
    </button>
  );
};

export default CompanyCard;
