import Image from "next/image";

const SideIconNav = () => {
  return (
    <div className="lg:h-[92vh] mt-10 rounded-3xl bg-white flex flex-col justify-between items-center py-5 lg:min-w-[100px]  min-w-[100vw] lg:static fixed bottom-0 z-20">
      <div className="hidden lg:block">
        <Image
          alt="dua-logo"
          className=""
          height={90}
          src="https://i.ibb.co/ZTCrp4L/unnamed-1.png"
          width={90}
        />
      </div>

      <div className="flex lg:flex-col gap-[27]">
        <div className="size-[38] bg-[#e8f0f5] flex justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/278fYn2/home-1.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] flex justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/GCbZHFX/54-menu-2.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] flex justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/Tv6Gx0G/memorize-1.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] flex justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/Wz5CnVM/3-keep-minus.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] flex justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/Wz5CnVM/3-keep-minus.png"
            width={20}
          />
        </div>

        <div className="size-[38] bg-[#e8f0f5] lg:flex hidden justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/6FVvpgn/ruqyah-1.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] lg:flex hidden justify-center items-center rounded-full">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/NLxpC8X/dua-info-1.png"
            width={20}
          />
        </div>
        <div className="size-[38] bg-[#e8f0f5] lg:flex justify-center items-center rounded-full hidden">
          <Image
            alt="dua-logo"
            height={20}
            src="https://i.ibb.co/9gCDMjY/books-1.png"
            width={20}
          />
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="bg-primary size-[57px] flex justify-center items-center rounded-lg">
          <Image
            alt="dua-logo"
            height={24}
            src="https://i.ibb.co/mDqPmnS/icon.png"
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default SideIconNav;
