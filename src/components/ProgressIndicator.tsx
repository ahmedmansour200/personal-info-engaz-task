import React from "react";
import { useProgress } from "../context/ProgressContext";
import { IsComplect } from "../icons/IsComplect";

const ProgressIndicator: React.FC = () => {
  const { currentStep, mainStep } = useProgress();

  const steps: string[] = [
    "Personal Information",
    "Work Information",
    "Education",
    "Payroll",
  ];
  const subStepsPerMain: number = 4;

  const isMainStepComplete = (index: number): boolean => {
    const mainStepStart = index * subStepsPerMain + 1;
    const mainStepEnd = mainStepStart + subStepsPerMain - 1;
    return currentStep > mainStepEnd;
  };

  const calculateSubStepPosition = (subIndex: number) => {
    const angle = (subIndex / subStepsPerMain) * 360 - 135;
    const radius = 3;
    const x = Math.cos((angle * Math.PI) / 180) * radius * 10;
    const y = Math.sin((angle * Math.PI) / 180) * radius * 10;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
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
              {/* Sub-Step Indicators */}
              {mainStep === index + 1 && (
                <div className="absolute flex items-center justify-center w-full h-full">
                  {[...Array(subStepsPerMain)].map((_, subIndex) => {
                    const subStepNumber: number =
                      (mainStep - 1) * subStepsPerMain + subIndex + 1;

                    return (
                      <div
                        key={subIndex}
                        className="absolute flex items-center justify-center sub-step-position"
                        style={calculateSubStepPosition(subIndex)}
                      >
                        <div
                          className={`relative w-3 h-3 rounded-full sub-step-circle ${
                            currentStep === subStepNumber
                              ? "bg-green-500 border-2 border-white"
                              : currentStep > subStepNumber
                              ? "bg-green-500 border-2 border-white"
                              : "bg-[#d9d9d9]/20 border-2 border-gray-300"
                          }`}
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
                    : "bg-gray-300"
                }`}
              >
                {isMainStepComplete(index) ? <IsComplect /> : index + 1}
              </div>
            </div>

            {/* Step Name & Connecting Line */}
            <div className="flex flex-col items-center relative">
              <p
                className={`mt-2 text-base font-medium font-['Manrope'] leading-normal
                } ${
                  isMainStepComplete(index)
                    ? "text-[#003465]"
                    : "text-[#637D92]"
                }`}
              >
                {step}
              </p>
              {index < steps.length - 1 && (
                <div
                  className={`absolute  h-[0px] border-2 ${
                    mainStep > index + 1
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                  style={{
                    top: "-60%",
                    left: "180px",
                    width: "265px",
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
