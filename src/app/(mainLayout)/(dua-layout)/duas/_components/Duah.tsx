import Image from "next/image";

import { IDuah, ISubCategory } from "@/src/types/duah";

const ALLAH_IMAGE_URL = "https://i.ibb.co/C8g0WXX/allah-1-Traced.png";

const generateSafeId = (text: string, id: number): string => {
  return text
    ? text.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "") || `dua_${id}`
    : `dua_${id}`;
};

const Duah = async ({ sub_cat }: { sub_cat: ISubCategory }) => {
  const res = await fetch(`https://dua-rukiyah-backend.vercel.app/dua/${sub_cat.subcat_id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Duas: ${res.statusText}`);
  }

  const data: IDuah[] = await res.json();

  return (
    <div className="px-5">
      <div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="font-semibold">
            <span className="text-green-600">Section: </span>
            <span className="text-gray-800">{sub_cat.subcat_name_en}</span>
          </h4>
        </div>
        {data.length === 0 ? (
          <p className="text-gray-600 text-center mt-4">
            No Duas found for this category.
          </p>
        ) : (
          data.map((dua: IDuah) => (
            <div
              key={dua.id}
              className="bg-white p-6 rounded-lg shadow-md mb-6 space-y-[10px]"
              id={generateSafeId(dua.dua_name_en || "", dua.id)}
            >
              {dua.dua_name_en && (
                <div className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2 text-green-600">
                  <Image
                    alt="Allah"
                    height={35}
                    src={ALLAH_IMAGE_URL}
                    width={35}
                  />
                  <h4>
                    {dua.id}. {dua.dua_name_en}
                  </h4>
                </div>
              )}
              {dua.top_en && <p className="text-gray-700 mb-4">{dua.top_en}</p>}
              {dua.clean_arabic && (
                <p className="text-gray-800 p-4 rounded-lg text-sm mb-4 text-right">
                  {dua.clean_arabic}
                </p>
              )}
              {dua.transliteration_en && (
                <p className="text-gray-600 font-medium">
                  <strong>Transliteration:</strong> {dua.transliteration_en}
                </p>
              )}
              {dua.translation_en && (
                <p className="text-gray-600 font-medium">
                  <strong>Translation:</strong> {dua.translation_en}
                </p>
              )}
              {dua.bottom_en && (
                <p className="text-gray-600 font-medium">
                  <strong>The Prophet (ﷺ) said:</strong> {dua.bottom_en}
                </p>
              )}
              {dua.refference_en && (
                <p className="text-gray-600 font-medium">
                  <strong className="text-green-600">Reference:</strong>{" "}
                  {dua.refference_en}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Duah;
