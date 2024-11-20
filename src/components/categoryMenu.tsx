import { Input } from "@nextui-org/input";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const CategoryMenu = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      className="relative bg-white"
      classNames={{
        inputWrapper: "bg-white border pl-1 h-[50px]  py-[2px]",
        input: "text-sm ",
      }}
      labelPlacement="outside"
      placeholder="Search by Dua Name"
      startContent={
        <div className="bg-[#f3f4f6] px-2 h-full flex items-center justify-center rounded-lg">
          <IoIosSearch
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            size={26}
          />
        </div>
      }
      type="search"
    />
  );

  return (
    <div className="h-[90vh]">
      <div className="space-y-2">
        <div className="bg-primary flex items-center justify-center text-[17px] font-sans h-[57]">
          <h4>Category</h4>
        </div>
        <div className="bg-white h-screen px-[15px]">
          {searchInput}
          <div className="mt-[15px]">
            <div className="flex items-center justify-between p-2 bg-[#e8f0f5] rounded-md shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-[#cfe0e5] size-[50px] p-2 rounded-lg">
                  <Image
                    alt="Icon"
                    // className="w-10 h-10"
                    height={80}
                    src="https://i.ibb.co/1GFdpnF/005-fever.png"
                    width={80}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-semibold text-green-600">
                    Introduction to Dua
                  </h3>
                  <p className="text-[14px] text-gray-500">Subcategory: 11</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-600 text-center">
                <span> 15</span>
                <br />
                <span className="text-sm text-gray-500">Duas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
