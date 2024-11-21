"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useState } from "react";

import { ISubCategory } from "../../types/duah";
import "./styles/CategoryMenuStyle.css";

import DuahMenu from "./duahMenu";

const SubCategories = ({ id }: { id: number }) => {
  const [data, setData] = useState<ISubCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dua-rukiyah-backend.vercel.app/sub-category/${id}`);
        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data.length) {
    return <p>No subcategories found.</p>;
  }

  return (
    <div className="relative">
      {data.map((subCategory) => (
        <Accordion
          key={subCategory?.id}
          className="border-l-1 border-l-green-500 border-dashed rounded-none "
          disableAnimation={true}
          itemClasses={{
            title: "text-default-800 leading-tight",
            base: "py-0 w-full",
            trigger: ` px-0 py-0 rounded-lg  flex items-center sub-category-target`,
            content: "text-small px-0 py-0",
          }}
          variant="bordered"
        >
          <AccordionItem
            key={subCategory?.id}
            hideIndicator
            aria-label={`Accordion ${subCategory?.id}`}
            className="text-black "
            title={
              <span className="text-green-600 font-medium text-[14px]">
                {subCategory?.subcat_name_en}
              </span>
            }
          >
            <DuahMenu id={subCategory?.subcat_id} />
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default SubCategories;
