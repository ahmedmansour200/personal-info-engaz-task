import { useProgress } from "../context/ProgressContext";

const NextAndBack = () => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = useProgress();
  return (
    <div className="flex  justify-end me-9 mt-4">
      {!isFirstStep && (
        <button onClick={prevStep}>
          <img src="/icons/back.svg" alt="icon" />
        </button>
      )}
      {!isLastStep && (
        <button onClick={nextStep}>
          <img src="/icons/next.svg" alt="icon" />
        </button>
      )}
    </div>
  );
};

export default NextAndBack;
