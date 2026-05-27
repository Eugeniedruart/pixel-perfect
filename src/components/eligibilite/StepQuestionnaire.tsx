import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepQuestionnaireProps {
  form: UseFormReturn<EligibiliteFormData>;
}

type AnswerOption = { label: string; value: string };

const OptionButton = ({ option, isSelected, onSelect }: { option: AnswerOption; isSelected: boolean; onSelect: () => void }) => (
  <button
    type="button"
    onClick={onSelect}
    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
      isSelected
        ? "bg-primary text-primary-foreground border-primary shadow-sm"
        : "bg-background text-foreground border-border hover:border-primary/40 hover:bg-accent/30"
    }`}
  >
    {option.label}
  </button>
);

const StepQuestionnaire = ({ form }: StepQuestionnaireProps) => {
  const { setValue, watch, formState: { errors } } = form;
  const { t } = useTranslation();

  const yesNo = t("eligibilite.yesNo", { returnObjects: true }) as Record<string, string>;
  const part = t("eligibilite.part", { returnObjects: true }) as Record<string, string>;
  const engagement = t("eligibilite.engagement", { returnObjects: true }) as Record<string, string>;
  const pillarTexts = t("eligibilite.pillars", { returnObjects: true }) as Array<{ title: string; q1: string; q2: string }>;

  const yesNoOptions: AnswerOption[] = [
    { label: yesNo.oui, value: "oui" },
    { label: yesNo.non, value: "non" },
    { label: yesNo.en_cours, value: "en_cours" },
    { label: yesNo.na, value: "na" },
  ];
  const partOptions: AnswerOption[] = [
    { label: part.lt20, value: "lt20" },
    { label: part["20_40"], value: "20_40" },
    { label: part.gt40, value: "gt40" },
  ];
  const engagementOptions: AnswerOption[] = [
    { label: engagement.oui, value: "oui" },
    { label: engagement.en_reflexion, value: "en_reflexion" },
    { label: engagement.non, value: "non" },
  ];

  const pillars = [
    { num: 1, title: pillarTexts[0].title, questions: [
      { field: "q_remuneration_mesure" as const, label: pillarTexts[0].q1, options: yesNoOptions },
      { field: "q_remuneration_actions" as const, label: pillarTexts[0].q2, options: yesNoOptions },
    ]},
    { num: 2, title: pillarTexts[1].title, questions: [
      { field: "q_gouvernance_part" as const, label: pillarTexts[1].q1, options: partOptions },
      { field: "q_gouvernance_objectifs" as const, label: pillarTexts[1].q2, options: yesNoOptions },
    ]},
    { num: 3, title: pillarTexts[2].title, questions: [
      { field: "q_prevention_actions" as const, label: pillarTexts[2].q1, options: yesNoOptions },
      { field: "q_prevention_formation" as const, label: pillarTexts[2].q2, options: yesNoOptions },
    ]},
    { num: 4, title: pillarTexts[3].title, questions: [
      { field: "q_equilibre_dispositifs" as const, label: pillarTexts[3].q1, options: yesNoOptions },
      { field: "q_equilibre_politiques" as const, label: pillarTexts[3].q2, options: yesNoOptions },
    ]},
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
        {t("eligibilite.qTitle1")}{" "}
        <span className="font-serif-display italic font-normal text-primary">{t("eligibilite.qTitle2")}</span>
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">{t("eligibilite.qSubtitle")}</p>

      {pillars.map((pillar, idx) => (
        <div key={pillar.num}>
          <div className="flex items-center gap-3 mb-1 mt-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
              <span className="text-xs font-bold text-primary">{pillar.num}</span>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-primary">
                {t("eligibilite.pillarLabel")} {pillar.num}
              </p>
              <p className="text-base font-bold text-foreground">{pillar.title}</p>
            </div>
          </div>

          <div className="ml-4 border-l-2 border-primary/15 pl-6">
            {pillar.questions.map((q) => (
              <div key={q.field} className="py-4">
                <p className="text-sm font-medium text-foreground mb-3">{q.label}</p>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <OptionButton
                      key={opt.value}
                      option={opt}
                      isSelected={watch(q.field) === opt.value}
                      onSelect={() => setValue(q.field, opt.value, { shouldValidate: true })}
                    />
                  ))}
                </div>
                {errors[q.field] && (
                  <p className="text-xs text-destructive mt-2">{t("eligibilite.answerRequired")}</p>
                )}
              </div>
            ))}
          </div>

          {idx < pillars.length - 1 && <div className="h-px bg-border my-4" />}
        </div>
      ))}

      <div className="mt-8 rounded-xl border-2 border-primary/30 bg-primary/[0.03] p-6">
        <p className="text-sm font-medium text-foreground mb-4">{t("eligibilite.engagementQuestion")}</p>
        <div className="flex flex-wrap gap-2">
          {engagementOptions.map((opt) => (
            <OptionButton
              key={opt.value}
              option={opt}
              isSelected={watch("q_engagement_12mois") === opt.value}
              onSelect={() => setValue("q_engagement_12mois", opt.value, { shouldValidate: true })}
            />
          ))}
        </div>
        {errors.q_engagement_12mois && (
          <p className="text-xs text-destructive mt-2">{t("eligibilite.answerRequired")}</p>
        )}
      </div>
    </div>
  );
};

export default StepQuestionnaire;
