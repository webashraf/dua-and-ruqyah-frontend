/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { IoMdClose } from "react-icons/io";

import CategoryMenu from "./categoryComponets/categoryMenu";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="py-5 mx-5">
      <Button
        className="w-full bg-white text-gray-800 py-8 shadow-md text-[16px] font-semibold flex justify-start"
        onClick={toggleDrawer}
      >
        <RxHamburgerMenu size={30} />
        Dua's importance
      </Button>
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

export default MobileNav;
