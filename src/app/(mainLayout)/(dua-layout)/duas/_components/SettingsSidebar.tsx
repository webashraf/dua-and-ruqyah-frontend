"use client";

import { Switch } from "@nextui-org/switch";
import { cn } from "@nextui-org/theme";
import { useState } from "react";
import { HiOutlineLanguage } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";

const SettingsSidebar = () => {
  const [activeTab, setActiveTab] = useState("appearance");
  const [nightMode, setNightMode] = useState(false);

  const tabs = [
    { id: "language", name: "Language Settings", icon: <HiOutlineLanguage /> },
    { id: "general", name: "General Settings", icon: <RxDashboard /> },
    { id: "font", name: "Font Settings", icon: <RxDashboard /> },
    { id: "appearance", name: "Appearance Settings", icon: <RxDashboard /> },
  ];

  return (
    <div className="w-full max-w-sm mx-auto p-4 h-full rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Settings
      </h2>
      <div className="flex flex-col space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 rounded-sm text-sm font-medium border-l-4 border-l-transparent ${
              activeTab === tab.id
                ? "bg-white  border-l-green-600 text-green-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className="flex items-center gap-2">
              {" "}
              {tab.icon} {tab.name}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "appearance" && (
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-800">Night Mode</h3>

            <Switch
              classNames={{
                base: cn(
                  "inline-flex flex-row-reverse w-full  items-center",
                  "justify-between cursor-pointer rounded-lg gap-2 px-4 border-2 border-transparent",
                  "",
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn(
                  "w-6 h-6 border-2 shadow-lg",
                  "group-data-[hover=true]:border-primary",
                  //selected
                  "group-data-[selected=true]:ml-6",
                  // pressed
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4",
                ),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsSidebar;
