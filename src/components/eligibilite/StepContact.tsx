import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepContactProps {
  form: UseFormReturn<EligibiliteFormData>;
  onSkip?: () => void;
}

const StepContact = ({ form }: StepContactProps) => {
  const { register, formState: { errors } } = form;
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        {t("eligibilite.contactTitle1")}{" "}
        <span className="font-serif-display italic font-normal text-primary">
          {t("eligibilite.contactTitle2")}
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">{t("eligibilite.contactSubtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t("eligibilite.contactNom")}</label>
          <Input {...register("contactNom")} placeholder={t("eligibilite.contactNomPh")} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t("eligibilite.contactPrenom")}</label>
          <Input {...register("contactPrenom")} placeholder={t("eligibilite.contactPrenomPh")} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t("eligibilite.contactEmail")}</label>
          <Input {...register("contactEmail")} type="email" placeholder={t("eligibilite.contactEmailPh")} />
          {errors.contactEmail && <p className="text-sm text-destructive mt-1">{errors.contactEmail.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">{t("eligibilite.contactFonction")}</label>
          <Input {...register("contactFonction")} placeholder={t("eligibilite.contactFonctionPh")} />
        </div>
      </div>
    </div>
  );
};

export default StepContact;
