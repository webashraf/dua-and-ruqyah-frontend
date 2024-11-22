import Image from "next/image";

const icons = [
  { src: "https://i.ibb.co/278fYn2/home-1.png", alt: "Home" },
  { src: "https://i.ibb.co/GCbZHFX/54-menu-2.png", alt: "Menu" },
  { src: "https://i.ibb.co/Tv6Gx0G/memorize-1.png", alt: "Memorize" },
  { src: "https://i.ibb.co/Wz5CnVM/3-keep-minus.png", alt: "Keep Minus" },
  { src: "https://i.ibb.co/Wz5CnVM/3-keep-minus.png", alt: "Another Icon" },
  {
    src: "https://i.ibb.co/6FVvpgn/ruqyah-1.png",
    alt: "Ruqyah",
    hiddenOnSmall: true,
  },
  {
    src: "https://i.ibb.co/NLxpC8X/dua-info-1.png",
    alt: "Dua Info",
    hiddenOnSmall: true,
  },
  {
    src: "https://i.ibb.co/9gCDMjY/books-1.png",
    alt: "Books",
    hiddenOnSmall: true,
  },
];

const SideIconNav = () => {
  return (
    <div className="lg:h-[92vh] mt-10 rounded-3xl bg-white flex flex-col justify-between items-center py-5 lg:min-w-[100px] min-w-[100vw] lg:static fixed bottom-0 z-20">
      {/* Logo */}
      <div className="hidden lg:block">
        <Image
          alt="Dua Logo"
          height={90}
          src="https://i.ibb.co/ZTCrp4L/unnamed-1.png"
          width={90}
        />
      </div>

      {/* Icons */}
      <div className="flex lg:flex-col gap-7">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`h-[38px] w-[38px] bg-[#e8f0f5] flex justify-center items-center rounded-full ${
              icon.hiddenOnSmall ? "hidden lg:flex" : ""
            }`}
          >
            <Image alt={icon.alt} height={20} src={icon.src} width={20} />
          </div>
        ))}
      </div>

      {/* Bottom Icon */}
      <div className="hidden lg:block">
        <div className="bg-primary h-[57px] w-[57px] flex justify-center items-center rounded-lg">
          <Image
            alt="Bottom Icon"
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
