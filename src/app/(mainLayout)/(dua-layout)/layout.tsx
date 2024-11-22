import { ReactNode } from "react";

import SettingsSidebar from "./duas/_components/SettingsSidebar";

import MobileNav from "@/src/components/mobileNav";
import { Navbar } from "@/src/components/navbar";
import SideIconNav from "@/src/components/sideIconNav";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:h-[100vh] ">
      <div className="flex items-start gap-7">
        <SideIconNav />

        <div>
          <Navbar />
          <div className=" w-full flex ">
            {children}
            <SettingsSidebar />
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default layout;
