/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { IoMdClose } from "react-icons/io";

import CategoryMenu from "./categoryComponets/categoryMenu";

const CategoryNavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="py-5 mx-5 lg:hidden block">
      <button
        className="w-full bg-white text-gray-800 py-8 shadow-md text-[16px] font-semibold flex justify-start rounded-lg px-5"
        onClick={toggleDrawer}
      >
        <RxHamburgerMenu size={30} />  &nbsp;
        Dua's importance
      </button>
      <Drawer
        className="bla bla bla "
        direction="left"
        open={isOpen}
        size="large"
        onClose={toggleDrawer}
      >
        <div className="relative">
          <IoMdClose
            className="absolute top-5 right-5"
            color="black"
            size={20}
            onClick={toggleDrawer}
          />

          <CategoryMenu />
        </div>
      </Drawer>
    </div>
  );
};

export default CategoryNavMobile;
