export const Navbar = () => {
  return (
    <div className="h-[82px] w-full py-[9px] bg-[#003465] rounded-br-2xl border-l border-[#dadada] justify-end items-center gap-2.5 flex">
      <div className="w-full justify-end items-center gap-[619px] inline-flex">
        <div className="h-[50px] justify-center items-center gap-5 flex">
          <div className="h-[50px] justify-end pe-12 items-center gap-8 flex">
            <img src="/icons/settings.svg" alt="icon" />
            <div className="justify-start items-center gap-8 flex">
              <img src="/icons/group3.svg" alt="icon" />
              <img
                className="w-[50px] h-[50px] left-0 top-0"
                src="/imgs/maskgroup.png"
              />
            </div>
            <img src="/icons/caret_down_md.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
