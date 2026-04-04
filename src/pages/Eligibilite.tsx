import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EligibiliteHeader from "@/components/eligibilite/EligibiliteHeader";
import StepIndicator from "@/components/eligibilite/StepIndicator";
import StepSiret from "@/components/eligibilite/StepSiret";
import StepQuestionnaire from "@/components/eligibilite/StepQuestionnaire";
import StepContact from "@/components/eligibilite/StepContact";
import ResultScreen from "@/components/eligibilite/ResultScreen";
import { eligibiliteSchema, stepFields, type EligibiliteFormData } from "@/lib/eligibilite-schema";

const TOTAL_STEPS = 3;

const Eligibilite = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<EligibiliteFormData>({
    resolver: zodResolver(eligibiliteSchema),
    defaultValues: {
      companyName: "",
      employeeCount: "",
      conventionCollective: "",
      q_remuneration_mesure: "",
      q_remuneration_actions: "",
      q_gouvernance_part: "",
      q_gouvernance_objectifs: "",
      q_prevention_actions: "",
      q_prevention_formation: "",
      q_equilibre_dispositifs: "",
      q_equilibre_politiques: "",
      q_engagement_12mois: "",
      contactNom: "",
      contactPrenom: "",
      contactEmail: "",
      contactFonction: "",
    },
  });

  const handleNext = async () => {
    const fields = stepFields[currentStep];
    const valid = await form.trigger(fields);
    if (!valid) return;

    setCurrentStep((s) => s + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  const handleSkipContact = () => {
    setCurrentStep(TOTAL_STEPS + 1);
  };

  if (currentStep === TOTAL_STEPS + 1) {
    return (
      <div>
        <EligibiliteHeader />
        <ResultScreen data={form.getValues()} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <EligibiliteHeader />

      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 sm:px-10 py-8">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="flex-1">
          {currentStep === 1 && <StepSiret form={form} />}
          {currentStep === 2 && <StepQuestionnaire form={form} />}
          {currentStep === 3 && <StepContact form={form} onSkip={handleSkipContact} />}
        </div>

        <div className="flex items-center gap-4 mt-10 pb-8">
          {currentStep > 1 && (
            <Button type="button" variant="outline" onClick={handlePrevious} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Précédent
            </Button>
          )}
          <Button
            type="button"
            onClick={handleNext}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            {currentStep === TOTAL_STEPS ? "Découvrez votre éligibilité" : "Suivant"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Eligibilite;
