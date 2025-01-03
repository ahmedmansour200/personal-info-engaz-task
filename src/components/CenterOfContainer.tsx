export const CenterOfContainer = () => {
  return (
    <>
      <div className="h-[50px] justify-center items-center gap-6 inline-flex">
        <div className="w-[1036px] h-[50px] justify-between items-center flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[#b1b1b1] text-xl font-bold font-['Manrope'] leading-normal">
              All Employees
            </div>
            <div className="w-5 h-5 relative  overflow-hidden" />
            <div className="text-[#003465] text-[22px] font-bold font-['Manrope'] leading-relaxed">
              New
            </div>
          </div>
          <div className="w-[233px] h-[50px] justify-center items-center gap-3 flex">
            <button className="w-[108px] h-[38px] px-4 py-2 bg-white rounded-md border border-[#012d67] justify-center items-center gap-2 flex">
              <div className="text-[#003465] text-base font-medium font-['Manrope'] leading-tight">
                Discard
              </div>
            </button>
            <button className="w-[108px] h-[38px] px-3 py-2 bg-[#003465] rounded-[7px] justify-center items-center gap-2 flex">
              <div className="w-[38px] h-[18px] text-white text-base font-semibold font-['Manrope'] leading-tight">
                Save
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 h-[0px] border border-[#e0e0e0]"></div>
    </>
  );
};
