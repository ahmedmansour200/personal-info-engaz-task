import ItemInput from "./ItemInput";

const GeneralInput = ({ listInput, title }: any) => {
  return (
    <div className="flex-col justify-start items-start inline-flex">
      <div className=" px-6 py-3 justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[27px] text-[#003465] text-2xl font-bold font-['Manrope'] leading-7">
          {title}
        </div>
      </div>
      <div className="px-6 pt-6 pb-2  grid grid-cols-3 gap-6">
        {listInput.map((input: any, index: number) => (
          <ItemInput
            listSelect={input.listSelect ? input.listSelect : []}
            key={index}
            idInput={input.idInput}
            labelName={input.labelName}
            placeholder={input.placeholder}
            InputType={input.InputType}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralInput;
