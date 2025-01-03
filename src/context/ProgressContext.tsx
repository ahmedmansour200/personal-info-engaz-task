import { createContext, useContext, useState, ReactNode } from "react";

type ProgressContextType = {
  currentStep: number;
  mainStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1); // Tracks 1–16 steps

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 16));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const mainStep = Math.ceil(currentStep / 4); // Calculate main step (1–4)
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 16;

  return (
    <ProgressContext.Provider
      value={{
        currentStep,
        mainStep,
        nextStep,
        prevStep,
        isFirstStep,
        isLastStep,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
