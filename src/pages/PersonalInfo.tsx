import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const PersonalInfo = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[280px] h-[60px] md:h-screen">
        <Sidebar />
      </div>
      <div className="flex w-full flex-col">
        <div>
          <Navbar />
        </div>
        <div className="ms-8 my-[26px]">
          <Container />
        </div>
      </div>
    </div>
  );
};
