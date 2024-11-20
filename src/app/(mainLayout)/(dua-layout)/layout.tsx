import { ReactNode } from "react";

import SettingsSidebar from "./duas/_components/SettingsSidebar";

import CategoryMenu from "@/src/components/categoryMenu";
import { Navbar } from "@/src/components/navbar";
import SideIconNav from "@/src/components/sideIconNav";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />

      <div className="flex items-start justify-between gap-[30]">
        <div className="w-[80px]">
          <SideIconNav />
        </div>
        <div className="w-[500px]  rounded-xl overflow-hidden">
          <CategoryMenu />
        </div>
        <div className="min-w-[50%] max-w-[60%]  h-[90vh] overflow-y-scroll custom-scrollbar">
          {children}
        </div>
        <div className="w-[400px] bg-white h-[90vh] rounded-3xl overflow-hidden">
          <SettingsSidebar />
        </div>
      </div>
    </div>
  );
};

export default layout;
