import { UseFormReturn } from "react-hook-form";
import type { EligibiliteFormData } from "@/lib/eligibilite-schema";

interface StepQuestionnaireProps {
  form: UseFormReturn<EligibiliteFormData>;
}

type AnswerOption = {
  label: string;
  value: string;
};

const yesNoOptions: AnswerOption[] = [
  { label: "Oui", value: "oui" },
  { label: "Non", value: "non" },
  { label: "En cours", value: "en_cours" },
  { label: "Non applicable", value: "na" },
];

const partOptions: AnswerOption[] = [
  { label: "< 20 %", value: "lt20" },
  { label: "20 – 40 %", value: "20_40" },
  { label: "> 40 %", value: "gt40" },
];

const engagementOptions: AnswerOption[] = [
  { label: "Oui", value: "oui" },
  { label: "En réflexion", value: "en_reflexion" },
  { label: "Non", value: "non" },
];

type PillarQuestion = {
  field: keyof EligibiliteFormData;
  label: string;
  options: AnswerOption[];
};

type Pillar = {
  num: number;
  title: string;
  questions: PillarQuestion[];
};

const pillars: Pillar[] = [
  {
    num: 1,
    title: "Écart de rémunération",
    icon: "💰",
    questions: [
      {
        field: "q_remuneration_mesure",
        label: "Avez-vous mesuré votre écart de rémunération femmes-hommes ?",
        options: yesNoOptions,
      },
      {
        field: "q_remuneration_actions",
        label: "Des actions ont-elles été mises en place pour le réduire ?",
        options: yesNoOptions,
      },
    ],
  },
  {
    num: 2,
    title: "Gouvernance",
    icon: "🏛️",
    questions: [
      {
        field: "q_gouvernance_part",
        label: "Quelle est la part de femmes dans vos instances dirigeantes ?",
        options: partOptions,
      },
      {
        field: "q_gouvernance_objectifs",
        label: "Avez-vous des objectifs de mixité définis ?",
        options: yesNoOptions,
      },
    ],
  },
  {
    num: 3,
    title: "Prévention & culture",
    icon: "🛡️",
    questions: [
      {
        field: "q_prevention_actions",
        label: "Avez-vous mis en place des actions de prévention du sexisme / VSS ?",
        options: yesNoOptions,
      },
      {
        field: "q_prevention_formation",
        label: "Les collaborateurs sont-ils formés sur ces sujets ?",
        options: yesNoOptions,
      },
    ],
  },
  {
    num: 4,
    title: "Équilibre & conditions de travail",
    icon: "⚖️",
    questions: [
      {
        field: "q_equilibre_dispositifs",
        label: "Proposez-vous des dispositifs favorisant l'équilibre vie professionnelle / personnelle ?",
        options: yesNoOptions,
      },
      {
        field: "q_equilibre_politiques",
        label: "Avez-vous des politiques spécifiques (retour maternité, congé paternité, etc.) ?",
        options: yesNoOptions,
      },
    ],
  },
];

const OptionButton = ({
  option,
  isSelected,
  onSelect,
}: {
  option: AnswerOption;
  isSelected: boolean;
  onSelect: () => void;
}) => (
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

const QuestionRow = ({
  question,
  value,
  onChange,
  hasError,
}: {
  question: PillarQuestion;
  value: string;
  onChange: (val: string) => void;
  hasError: boolean;
}) => (
  <div className="py-4">
    <p className="text-sm font-medium text-foreground mb-3">{question.label}</p>
    <div className="flex flex-wrap gap-2">
      {question.options.map((opt) => (
        <OptionButton
          key={opt.value}
          option={opt}
          isSelected={value === opt.value}
          onSelect={() => onChange(opt.value)}
        />
      ))}
    </div>
    {hasError && (
      <p className="text-xs text-destructive mt-2">Veuillez répondre à cette question</p>
    )}
  </div>
);

const StepQuestionnaire = ({ form }: StepQuestionnaireProps) => {
  const { setValue, watch, formState: { errors } } = form;

  return (
    <div className="space-y-2">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
        Test d'éligibilité{" "}
        <span className="font-serif-display italic font-normal text-primary">WEL</span>
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Évaluez en quelques minutes votre niveau de maturité et identifiez vos axes de progression.
      </p>

      {/* Pillars */}
      {pillars.map((pillar, idx) => (
        <div key={pillar.num}>
          {/* Pillar header */}
          <div className="flex items-center gap-3 mb-1 mt-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-base">
              {pillar.icon}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-primary">
                Pilier {pillar.num}
              </p>
              <p className="text-base font-bold text-foreground">{pillar.title}</p>
            </div>
          </div>

          <div className="ml-4 border-l-2 border-primary/15 pl-6">
            {pillar.questions.map((q) => (
              <QuestionRow
                key={q.field}
                question={q}
                value={watch(q.field) as string}
                onChange={(val) => setValue(q.field, val, { shouldValidate: true })}
                hasError={!!errors[q.field]}
              />
            ))}
          </div>

          {idx < pillars.length - 1 && <div className="h-px bg-border my-4" />}
        </div>
      ))}

      {/* Final engagement question */}
      <div className="mt-8 rounded-xl border-2 border-primary/30 bg-primary/[0.03] p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-base">
            🎯
          </div>
          <p className="text-base font-bold text-foreground">Question finale</p>
        </div>
        <p className="text-sm font-medium text-foreground mb-4">
          Êtes-vous prêt à structurer une démarche sur les 12 prochains mois ?
        </p>
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
          <p className="text-xs text-destructive mt-2">Veuillez répondre à cette question</p>
        )}
      </div>
    </div>
  );
};

export default StepQuestionnaire;
