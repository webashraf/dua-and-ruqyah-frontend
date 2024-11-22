"use client";

import { Switch } from "@nextui-org/switch";
import { cn } from "@nextui-org/theme";
import { useState } from "react";
import { HiOutlineLanguage } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";

const SettingsSidebar = () => {
  const [activeTab, setActiveTab] = useState("appearance");

  const handleTabClick = (id: string) => {
    setActiveTab((prev) => (prev === id ? "" : id));
  };

  const tabs = [
    {
      id: "language",
      name: "Language Settings",
      icon: (
        <div className="bg-[#E8F0F5] p-2 rounded-full">
          <HiOutlineLanguage size={20} />
        </div>
      ),
    },
    {
      id: "general",
      name: "General Settings",
      icon: (
        <div className="bg-[#E8F0F5] p-2 rounded-full">
          <RxDashboard size={20} />{" "}
        </div>
      ),
    },
    {
      id: "font",
      name: "Font Settings",
      icon: (
        <div className="bg-[#E8F0F5] p-2 rounded-full">
          <RxDashboard size={20} />{" "}
        </div>
      ),
    },
    {
      id: "appearance",
      name: "Appearance Settings",
      icon: (
        <div className="bg-[#E8F0F5] p-2 rounded-full">
          <RxDashboard size={20} />{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-sm mx-auto p-4 shadow min-w-[300px] bg-white h-[85vh] rounded-3xl overflow-hidden hidden lg:block">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Settings
      </h2>
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-3 rounded-sm text-sm font-light text-[#868686] border-l-4  bg-[#f7f8fa] ${
              activeTab === tab.id
                ? " border-l-green-600 text-green-700"
                : "text-gray-700 hover:bg-gray-100 border-l-transparent"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span
              className={`flex items-center gap-2  ${
                activeTab === tab.id
                  ? " text-green-700"
                  : "text-gray-700 hover:bg-gray-100 border-l-transparent"
              }`}
            >
              {tab.icon} {tab.name}
            </span>
          </button>
        ))}
      </div>
      <div className="mt- ">
        {activeTab === "appearance" && (
          <div className="flex items-center justify-between border border-t-0 py-6 px-2 rounded-b-sm">
            <h3 className="text-[16px] text-gray-800 font-sans">Night Mode</h3>

            <Switch
              classNames={{
                base: cn(
                  "inline-flex flex-row-reverse w-full  items-center",
                  "justify-between cursor-pointer rounded-lg gap-2 px-0 border-2 border-transparent",
                  ""
                ),
                wrapper: "p-0 h-3 w-8 bg-[#C1C1C1B2] overflow-visible",
                thumb: cn(
                  "w-4 h-4 shadow-lg bg-[#A4A4A4] border-[]",
                  "group-data-[hover=true]:border-primary",
                  //selected
                  "group-data-[selected=true]:ml-4",
                  // pressed
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4"
                ),
              }}
              size="sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsSidebar;
