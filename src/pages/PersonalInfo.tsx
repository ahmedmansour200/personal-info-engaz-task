import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const PersonalInfo = () => {
  return (
    <div className="h-screen flex flex-col 2xl:overflow-hidden md:flex-row">
      <div className="w-[280px]  h-screen">
        <Sidebar />
      </div>
      <div className="flex w-full flex-col">
        <div>
          <Navbar />
        </div>
        <div className="ms-8 mt-[26px] h-full">
          <Container />
        </div>
      </div>
    </div>
  );
};
