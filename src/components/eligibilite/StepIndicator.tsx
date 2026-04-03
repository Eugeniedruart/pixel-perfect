interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const StepIndicator = ({ currentStep, totalSteps = 4 }: StepIndicatorProps) => {
  return (
    <div className="mb-10">
      <p className="text-sm text-muted-foreground mb-2">
        Étape {currentStep}/{totalSteps}
      </p>
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < currentStep ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
