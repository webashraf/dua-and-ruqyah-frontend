import { ReactNode } from "react";
import { IoMdSettings } from "react-icons/io";

import SettingsSidebar from "./duas/_components/SettingsSidebar";

import { Navbar } from "@/src/components/navbar";
import SideIconNav from "@/src/components/sideIconNav";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:h-[100vh] ">
      <div className="flex items-start gap-7">
        <SideIconNav />
        <div>
          <Navbar />
          <div className="flex w-full justify-between items-center lg:hidden p-5">
            <h4 className="text-gray-800 text-xl">Duas Page</h4>
            <IoMdSettings color="green" size={26} />
          </div>
          <div className=" w-full flex gap-2">
            {children}
            <SettingsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
