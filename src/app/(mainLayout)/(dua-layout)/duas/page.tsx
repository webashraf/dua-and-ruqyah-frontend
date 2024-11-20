import Duah from "./_components/Duah";

import { IDuaSubCategory } from "@/src/types/duah";

const page = async () => {
  const res = await fetch(`http://localhost:5000/sub-category/1`);
  const sub_categories = await res.json();

  console.log("sub_categories", sub_categories);

  return (
    <div>
      {sub_categories?.map((sub_category: IDuaSubCategory) => (
        <Duah
          key={sub_category.id}
          // section={sub_category.subcat_name_en}
          sub_cat={sub_category}
        />
      ))}
    </div>
  );
};

export default page;
