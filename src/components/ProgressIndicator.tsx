import React from "react";
import { useProgress } from "../context/ProgressContext";

const ProgressIndicator: React.FC<any> = () => {
  const { currentStep, mainStep } = useProgress();
  const steps: string[] = [
    "Personal Info",
    "Work Info",
    "Education",
    "Payroll",
  ];
  const subStepsPerMain: number = 4;

  const calculateSubStepForMainStep = (
    currentStep: number,
    mainStep: number
  ): number => {
    const startSubStep = (mainStep - 1) * subStepsPerMain;
    return currentStep > startSubStep ? currentStep - startSubStep : 0;
  };

  const currentSubStep: number = calculateSubStepForMainStep(
    currentStep,
    mainStep
  );

  const isMainStepComplete = (index: number): boolean => {
    const mainStepStart = index * subStepsPerMain + 1;
    const mainStepEnd = mainStepStart + subStepsPerMain - 1;
    return currentStep > mainStepEnd;
  };

  return (
    <div className="flex items-center">
      {/* Main Step Indicators */}
      <div className="flex items-center justify-between w-full mt-8 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Main Step Circle */}
            <div
              className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                mainStep === index + 1
                  ? "border-4 border-green-500"
                  : mainStep > index
                  ? "border-2 border-green-500"
                  : "border-2 border-gray-300"
              }`}
            >
              {/* Sub-Step Indicators (Nested within Main Step Circle) */}
              {mainStep === index + 1 && (
                <div className="absolute flex items-center justify-center w-full h-full">
                  {[...Array(subStepsPerMain)].map((_, subIndex) => {
                    const subStepNumber: number =
                      (mainStep - 1) * subStepsPerMain + subIndex + 1;
                    const angle = (subIndex / subStepsPerMain) * 360 - 135;
                    const radius = 3;

                    const x = Math.cos((angle * Math.PI) / 180) * radius * 10;
                    const y = Math.sin((angle * Math.PI) / 180) * radius * 10;
                    return (
                      <div
                        key={subIndex}
                        className="absolute flex items-center justify-center"
                        style={{
                          top: `calc(50% + ${y}px)`,
                          left: `calc(50% + ${x}px)`,
                        }}
                      >
                        <div
                          className={`relative w-3 h-3 rounded-full
                                                    ${
                                                      currentStep ===
                                                      subStepNumber
                                                        ? "bg-green-500 border-2 border-white"
                                                        : currentStep >
                                                          subStepNumber
                                                        ? "bg-green-500 border-2 border-white"
                                                        : "bg-[#d9d9d9]/20 border-2 border-gray-300"
                                                    }
                                                  `}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              )}
              <div
                className={`absolute w-10 h-10 rounded-full flex items-center justify-center ${
                  mainStep === index + 1
                    ? "bg-white text-black"
                    : isMainStepComplete(index)
                    ? "bg-green-500 text-gray-800"
                    : "bg-gray-300 "
                }`}
              >
                {isMainStepComplete(index) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
            </div>

            {/* Step Name & Connecting Line Wrapper */}
            <div className="flex flex-col items-center relative">
              {/* Step Name */}
              <p
                className={`mt-2 text-sm ${
                  mainStep === index + 1
                    ? "text-green-500 font-semibold"
                    : mainStep > index
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {step}
              </p>
              {/* Connecting Line (Between Main Steps) */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute h-[0px] border-2
                    ${
                      mainStep > index + 1
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  style={{
                    top: "-60%",
                    left: "200%",
                    width: "calc(200% - 2rem)",
                    transform: "translateX(-50%)",
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
