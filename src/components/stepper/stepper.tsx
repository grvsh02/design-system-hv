import React from "react";

type StepperProps = {
  currentStep: number;
  totalStep: number;
}

const Stepper = ({ currentStep, totalStep }: StepperProps) => {
  const steps = Array.from({ length: totalStep }, (_, index) => index + 1);

  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              step <= currentStep
                ? "bg-purple-500 text-white"
                : "border-2 border-purple-500 text-purple-500"
            }`}
          >
            {step < currentStep ? (
              <span className="text-white text-xl">✓</span>
            ) : (
              <span className="text-xl">{step}</span>
            )}
          </div>
          {index < totalStep - 1 && (
            <div
              className={`flex-1 h-1 ${
                step < currentStep
                  ? "bg-purple-500"
                  : "bg-purple-200"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
