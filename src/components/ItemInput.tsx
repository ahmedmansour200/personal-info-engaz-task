const ItemInput = ({
  labelName,
  placeholder,
  InputType,
  idInput,
  listSelect = [],
}: {
  labelName: string;
  placeholder: string;
  InputType: string;
  idInput: string;
  listSelect: string[];
}) => {
  return (
    <div className="w-[313px] h-[70px] flex-col justify-center items-start gap-1.5 inline-flex">
      <label
        htmlFor={idInput}
        className="justify-end items-center inline-flex text-[#323f49] text-base font-bold font-['Manrope'] leading-tight"
      >
        {labelName}
      </label>
      <div className="self-stretch h-11 px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#e0e0e0] justify-start items-center gap-2 inline-flex overflow-hidden">
        {InputType === "select" ? (
          <select
            id={idInput}
            className="grow shrink basis-0 h-6 text-[#b1b1b1] text-base font-normal font-['Manrope'] leading-normal border-none outline-none bg-transparent"
          >
            <option>{placeholder}</option>
            {listSelect.map((option: string, index: number) => (
              <>
                <option key={index} value={option}>
                  {option}
                </option>
              </>
            ))}
          </select>
        ) : (
          <input
            id={idInput}
            type={InputType}
            placeholder={placeholder}
            className="grow shrink basis-0 h-6 text-[#b1b1b1] text-base font-normal font-['Manrope'] leading-normal border-none outline-none bg-transparent"
          />
        )}
      </div>
    </div>
  );
};

export default ItemInput;
