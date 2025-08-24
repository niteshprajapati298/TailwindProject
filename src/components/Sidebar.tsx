import {
  ChartNoAxesColumnIncreasing,
  CreditCard,
  House,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="left w-[264px] h-auto bg-gradient-to-r from-[#060B26] to-[#1A1F37] rounded-4xl m-4 flex flex-col items-center pt-4">
      <div className="logo">
        <span className="bg-gradient-to-r from-[#FFFFFF] to-[#757ABC] bg-clip-text text-transparent font-jakarta font-bold">
          VISION UI FREE
        </span>
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#757ABC] text-transparent font-jakarta font-bold w-full h-1"></div>
      </div>
      <div className="left-items flex-col items-center justify-center">
        <ul className="flex-1 items-center justify-center pt-10 space-y-2">
  <li className="flex items-center gap-4 pt-2 text-white font-jakarta rounded-lg hover:bg-gray-600 cursor-pointer px-2 py-2">
    <a
      href="pages"
      className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500"
    >
      <House className="text-white w-5 h-5" />
    </a>
    DashBoard
  </li>

  <li className="flex items-center gap-4 pt-2 text-white font-jakarta rounded-lg hover:bg-gray-600 cursor-pointer px-2 py-2">
    <a
      href="pages"
      className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500"
    >
      <ChartNoAxesColumnIncreasing className="text-white w-5 h-5" />
    </a>
    Tables
  </li>

  <li className="flex items-center gap-4 pt-2 text-white font-jakarta rounded-lg hover:bg-gray-600 cursor-pointer px-2 py-2">
    <a
      href="pages"
      className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500"
    >
      <CreditCard className="text-white w-5 h-5" />
    </a>
    Billing
  </li>

  <li className="flex items-center gap-4 pt-2 text-white font-jakarta rounded-lg hover:bg-gray-600 cursor-pointer px-2 py-2">
    <a
      href="pages"
      className="flex items-center justify-center h-10 w-10 rounded-2xl bg-blue-500"
    >
      <Settings className="text-white w-5 h-5" />
    </a>
    RTL
  </li>
</ul>

      </div>
    </div>
  );
};

export default Sidebar;
