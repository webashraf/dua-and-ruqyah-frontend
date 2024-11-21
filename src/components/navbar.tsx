import { Input } from "@nextui-org/input";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { IoIosSearch } from "react-icons/io";

import NavAvatar from "./navAvatar";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      className="relative bg-white"
      classNames={{
        inputWrapper: "bg-white border pr-1 h-[50px] w-[400px] py-[2px]",
        input: "text-sm ",
      }}
      endContent={
        <div className="bg-[#f3f4f6] px-2 h-full flex items-center justify-center rounded-lg">
          <IoIosSearch
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            size={26}
          />
        </div>
      }
      labelPlacement="outside"
      placeholder="Search by Dua Name"
      type="search"
    />
  );

  return (
    <NextUINavbar className="bg-transparent" maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <h3 className="text-[24px] font-poppins font-bold text-black">
              Dua Page
            </h3>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5  sm:basis-full "
        justify="end"
      >
        <div className="flex items-center justify-between w-[90%]">
          <NavbarItem className="hidden lg:flex hobv">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <NavAvatar />
          </NavbarItem>
        </div>
      </NavbarContent>
    </NextUINavbar>
  );
};