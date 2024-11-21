import Duah from "./_components/Duah";

import { ISubCategory } from "@/src/types/duah";

const page = async () => {
  const res = await fetch(`https://dua-rukiyah-backend.vercel.app/sub-category/1`);
  const sub_categories = await res.json();

  // console.log("sub_categories", sub_categories);

  return (
    <div>
      {sub_categories?.map((sub_category: ISubCategory) => (
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
