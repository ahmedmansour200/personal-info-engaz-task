import { useProgress } from "../context/ProgressContext";
import {
  inputDataBankInformation,
  inputDataCertifications,
  inputDataDeductionDetails,
  inputDataEducationalInformation,
  inputDataJobInformation,
  inputDataOfGeneralInformation,
  inputDataSalaryInformation,
} from "../data/InputData";
import { CenterOfContainer } from "./CenterOfContainer";
import GeneralInput from "./GeneraInput";
import NextAndBack from "./NextAndBack";
import ProgressIndicator from "./ProgressIndicator";

export const Container = () => {
  const { mainStep } = useProgress();

  let content;
  switch (mainStep) {
    case 1:
      content = (
        <GeneralInput
          title={"General Information"}
          listInput={inputDataOfGeneralInformation}
        />
      );
      break;
    case 2:
      content = (
        <div className="gap-4 flex flex-col">
          <GeneralInput
            title={"Job Information"}
            listInput={inputDataJobInformation}
          />
          <GeneralInput
            title={"Salary Information"}
            listInput={inputDataSalaryInformation}
          />
        </div>
      );
      break;
    case 3:
      content = (
        <div className="gap-4 flex flex-col">
          <GeneralInput
            title={"Educational Information"}
            listInput={inputDataEducationalInformation}
          />
          <GeneralInput
            title={"Certifications & Training"}
            listInput={inputDataCertifications}
          />
        </div>
      );
      break;
    case 4:
      content = (
        <div className="flex flex-col gap-4">
          <div>
            <GeneralInput
              title={"Bank Information"}
              listInput={inputDataBankInformation}
            />
            <div className="px-6 pt-[36px]">
              <span className="text-[#003465] text-lg font-normal font-['Manrope'] leading-7">
                To have the employee complete this data,{" "}
              </span>
              <button
                onClick={() => {
                  window.location.href = "mailto:ahmedmansour@gmail.com";
                }}
                className="text-[#4c99fd] text-[19px] font-semibold font-['Manrope'] leading-7"
              >
                Click her
              </button>
              <span className="text-[#003465] text-lg font-normal font-['Manrope'] leading-7">
                {" "}
                to send an email.
              </span>
            </div>
          </div>
          <GeneralInput
            title={"Deduction Details"}
            listInput={inputDataDeductionDetails}
          />
        </div>
      );
      break;
    default:
      content = null;
      break;
  }

  return (
    <div className="p-6 flex-col justify-between  w-full flex">
      <CenterOfContainer />
      <div className="my-4">
        <ProgressIndicator />
      </div>
      <div>{content}</div>
      <div className="">
        <NextAndBack />
      </div>
    </div>
  );
};
