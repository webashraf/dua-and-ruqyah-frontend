"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import { ICategory } from "../types/duah";

const CategoryMenu = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeAccordion, setActiveAccordion] = useState<string | any>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`http://localhost:5000/categories`);

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
    category.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const itemClasses = {
  //   trigger: "px-0 py- rounded-lg flex items-center",
  // };

  return (
    <div className="space-y-2">
      <div className="bg-primary flex items-center justify-center text-[17px] font-sans h-[57px]">
        <h4>Category</h4>
      </div>

      <div className="bg-white">
        <Input
          aria-label="Search"
          className="relative bg-white"
          classNames={{
            inputWrapper: "bg-white border pl-1 h-[50px] py-[2px]",
            input: "text-sm",
          }}
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mt-[15px] h-[90vh] custom-scrollbar overflow-y-scroll">
          {loading && <p>Loading categories...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && filteredCategories.length > 0
            ? filteredCategories.map((category: ICategory) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between  rounded-md"
                >
                  <Accordion
                    // itemClasses={itemClasses}
                    selectionMode="multiple"
                  >
                    <AccordionItem
                      key={category.id}
                      hideIndicator
                      aria-label={category.cat_name_en}
                      startContent={
                        <div
                          className={`flex items-center justify-between gap-4 min-h-10 p-2 rounded-lg w-[290px]  ${
                            activeAccordion === category.id
                              ? "bg-[#e8f0f5]"
                              : ""
                          }`}
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
                                {category.cat_name_en}
                              </h3>
                              <p className="text-[14px] text-gray-500">
                                Subcategory: {category.no_of_subcat}
                              </p>
                            </div>
                          </div>
                          <div className="text-gray-800 font-semibold">
                            <h4>{category.no_of_dua}</h4>
                            <h4>Duas</h4>
                          </div>
                        </div>
                      }
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === category.id ? null : category.id
                        )
                      }
                    >
                      <p>Number of Duas: {category.no_of_dua}</p>
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