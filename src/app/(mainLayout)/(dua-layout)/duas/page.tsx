import Duah from "./_components/Duah";

import CategoryMenu from "@/src/components/categoryComponets/categoryMenu";
import MobileNav from "@/src/components/CategoryNavMobile";
import { ISubCategory } from "@/src/types/duah";

const page = async () => {
  const res = await fetch(
    `https://dua-rukiyah-backend.vercel.app/sub-category/1`
  );
  const sub_categories = await res.json();

  return (
    <div className="lg:flex gap-7 lg:h-[85vh] overflow-hidden h-auto">
      <div className="">
        <MobileNav />
        <div className="lg:block hidden">
          <CategoryMenu />
        </div>
      </div>
      <div className="lg:h-[85vh] h-auto lg:overflow-y-scroll custom-scrollbar relative">
        {sub_categories?.map((sub_category: ISubCategory) => (
          <Duah key={sub_category.id} sub_cat={sub_category} />
        ))}
      </div>
    </div>
  );
};

export default page;
