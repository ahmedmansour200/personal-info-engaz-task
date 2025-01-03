export const ItemSidebar = ({ icon, title, isActive, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`w-[220px] h-[50px] relative flex justify-center gap-4 items-center ${
        isActive ? "bg-white/20 rounded-tr-[10px] rounded-br-[10px]" : ""
      }`}
    >
      <img src={`/icons/${icon}.svg`} alt={`${title} icon`} />
      <div
        className={`w-[151px] text-base font-medium font-['Poppins'] leading-normal
      ${isActive ? "text-white" : "text-[#d9d9d9]/50 "}
       `}
      >
        {title}
      </div>
      {isActive && (
        <div className="w-[3px] h-[50px] left-0 top-0 absolute bg-white rounded-[10px]" />
      )}
    </div>
  );
};
