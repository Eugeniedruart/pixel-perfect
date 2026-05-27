import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepSiretProps {
  form: UseFormReturn<EligibiliteFormData>;
}

const StepSiret = ({ form }: StepSiretProps) => {
  const { register, formState: { errors } } = form;
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        {t("eligibilite.siretTitle1")}{" "}
        <span className="font-serif-display italic font-normal text-primary">
          {t("eligibilite.siretTitle2")}
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        {t("eligibilite.siretSubtitle")}
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t("eligibilite.companyName")}
          </label>
          <Input {...register("companyName")} placeholder={t("eligibilite.companyNamePh")} />
          {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t("eligibilite.employeeCount")}
          </label>
          <Input {...register("employeeCount")} placeholder={t("eligibilite.employeeCountPh")} />
          {errors.employeeCount && <p className="text-sm text-destructive mt-1">{errors.employeeCount.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            {t("eligibilite.convention")}
          </label>
          <Input {...register("conventionCollective")} placeholder={t("eligibilite.conventionPh")} />
          {errors.conventionCollective && <p className="text-sm text-destructive mt-1">{errors.conventionCollective.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default StepSiret;
