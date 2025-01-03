import { useState } from "react";
import { sidebarItems } from "../data/SidItemData";
import { ItemSidebar } from "./ItemSidebar";

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-[280px] h-screen px-[22px] pt-6 pb-9 bg-[#003465] rounded-br-2xl flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-[182px] flex-col justify-start items-center gap-2.5 flex">
        <img src="/icons/logo.svg" alt="icon logo" />
      </div>

      <div className="flex-col justify-start items-start gap-4 flex">
        {sidebarItems.map((item, index) => (
          <ItemSidebar
            key={index}
            icon={item.icon}
            title={item.title}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
