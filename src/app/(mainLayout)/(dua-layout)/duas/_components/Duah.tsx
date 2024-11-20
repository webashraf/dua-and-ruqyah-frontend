import Image from "next/image";

import { IDuah, IDuaSubCategory } from "@/src/types/duah";

const Duah = async ({ sub_cat }: { sub_cat: IDuaSubCategory }) => {
  const res = await fetch(`http://localhost:5000/dua/${sub_cat.subcat_id}`);
  const data: IDuah[] = await res.json();

  return (
    <div className=" px-5">
      <div className="">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="font-semibold">
            <span className="text-green-600">Section: </span>
            <span className="text-gray-800">{sub_cat.subcat_name_en}</span>
          </h4>
        </div>
        {data.map((dua: IDuah) => (
          <div
            key={dua.id}
            className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-[10px]"
          >
            {dua.dua_name_en && (
              <div className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2 text-green-600">
                <Image
                  alt="Allah"
                  height={35}
                  src="https://i.ibb.co/C8g0WXX/allah-1-Traced.png"
                  width={35}
                />
                <h4>
                  {dua.id}. {dua.dua_name_en}
                </h4>
              </div>
            )}
            {dua.top_en && <p className="text-gray-700 mb-4">{dua.top_en}</p>}
            {dua.clean_arabic && (
              <>
                <p className="text-gray-800 p-4 rounded-lg text-sm mb-4 text-right">
                  {dua.clean_arabic}
                </p>
              </>
            )}

            {dua.transliteration_en && (
              <p className="text-gray-600 font-medium">
                <strong className="">Transliteration:</strong>{" "}
                {dua.transliteration_en}
              </p>
            )}
            {dua.translation_en && (
              <p className="text-gray-600 font-medium">
                <strong className="">Translation:</strong> {dua.translation_en}
              </p>
            )}
            {dua.bottom_en && (
              <p className="text-gray-600 font-medium">
                <strong className="">The Prophet (ﷺ) said:</strong>{" "}
                {dua.bottom_en}
              </p>
            )}
            {dua.refference_en && (
              <p className="text-gray-600 font-medium">
                <strong className="text-green-600">Reference:</strong>{" "}
                {dua.refference_en}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duah;
