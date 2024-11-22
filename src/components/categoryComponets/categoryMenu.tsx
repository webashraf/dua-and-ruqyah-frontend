"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import SubCategories from "./subCategories";

import { ICategory } from "@/src/types/duah";

const CategoryMenu = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeAccordion, setActiveAccordion] = useState<string | any>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `https://dua-rukiyah-backend.vercel.app/categories`
        );

        if (!res.ok) throw new Error("Failed to fetch categories.");
        const data = await res.json();

        setCategories(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Filter categories based on the search term
  const filteredCategories = categories.filter((category) =>
    category?.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-2 min-w-[350px] rounded-xl lg:overflow-hidden bg-white">
      <div className="bg-primary flex items-center justify-center text-[17px] font-sans h-[57px]">
        <h4>Category</h4>
      </div>

      <div className="bg-white px-2">
        <Input
          aria-label="Search"
          className="relative bg-white"
          classNames={{
            inputWrapper: [
              "bg-white border pl-1 h-[50px] py-[2px] ",
              "hover:bg-white",
              "dark:hover:bg-white ",
              "focus-within:!bg-white",
              "dark:focus-within:!bg-white",
              "focus-within:!text-black",
              "dark:focus-within:!text-black",
              "text-black",
            ],
            input: [
              "text-black",
              "text-black dark:text-black",
              "placeholder:text-[#868686] dark:placeholder:text-[#868686]",
            ],
          }}
          color="primary"
          placeholder="Search by Categories"
          startContent={
            <div className=" px-2 h-full flex items-center justify-center rounded-lg">
              <IoIosSearch
                className="text-base text-default-400 pointer-events-none flex-shrink-0"
                size={26}
              />
            </div>
          }
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mt-[15px] h-[90vh] custom-scrollbar overflow-y-scroll">
          {loading && <p>Loading categories...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && filteredCategories.length > 0
            ? filteredCategories.map((category: ICategory) => (
                <div
                  key={category?.id}
                  className="flex items-center justify-between rounded-md"
                >
                  <Accordion
                    disableAnimation={true}
                    itemClasses={{
                      base: "py-2 w-full",
                      trigger: `px-2 py-2 data-[hover=true]:bg-[#e8f0f5] rounded-lg  flex items-center ${
                        activeAccordion === category?.id ? "bg-[#e8f0f5]" : ""
                      }`,
                      content: "text-small px-2 py-2",
                    }}
                  >
                    <AccordionItem
                      key={category?.id}
                      hideIndicator
                      aria-label={category?.cat_name_en}
                      startContent={
                        <div
                          className={`flex items-center justify-between gap-4 text-default-800 min-h-10 rounded-lg w-[290px] `}
                        >
                          <div className="w-full flex gap-2 items-center">
                            <span className="bg-[#cfe0e5] p-2 rounded-lg">
                              <Image
                                alt={"Category Icon"}
                                height={40}
                                src={"https://i.ibb.co/rwg3421/005-fever.png"}
                                width={40}
                              />
                            </span>
                            <div className="flex flex-col items-start">
                              <h3 className="text-sm font-sans font-semibold text-green-600">
                                {category?.cat_name_en}
                              </h3>
                              <p className="text-[14px] text-gray-500">
                                Subcategory: {category?.no_of_subcat}
                              </p>
                            </div>
                          </div>
                          <div className=" ">
                            <h4 className="text-[16px] text-gray-800 font-semibold">
                              {category?.no_of_dua}
                            </h4>
                            <h4 className="text-[#7E7E7E]">Duas</h4>
                          </div>
                        </div>
                      }
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === category?.id ? null : category?.id
                        )
                      }
                    >
                      <div className="px-2">
                        <SubCategories id={category?.id} />
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))
            : !loading && <p className="text-gray-500">No categories found.</p>}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
