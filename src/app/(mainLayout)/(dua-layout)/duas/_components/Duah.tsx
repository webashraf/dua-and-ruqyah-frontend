import Image from "next/image";

import { IDuah, IDuaSubCategory } from "@/src/types/duah";

const Duah = async ({ sub_cat }: { sub_cat: IDuaSubCategory }) => {
  const res = await fetch(`http://localhost:5000/dua/${sub_cat.subcat_id}`);
  const data: IDuah[] = await res.json();

  return (
    <div className="min-h-screen  p-6">
      <div className="">
        <h1 className="text-green-600 font-bold text-xl mb-6">
          The servant is dependent on his Lord
        </h1>
        {data.map((dua: IDuah, index) => (
          <div key={dua.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2 text-green-600">
              <Image
                alt="Allah"
                height={35}
                src="https://i.ibb.co/C8g0WXX/allah-1-Traced.png"
                width={35}
              />
              {dua.id}. {dua.dua_name_en}
            </h2>
            <p className="text-gray-700 mb-4">{dua.translation_en}</p>
            {dua.refference_en && (
              <p className="text-gray-800 font-medium mb-4">
                <strong className="text-green-600">Reference:</strong>{" "}
                {dua.refference_en}
              </p>
            )}
            {dua.clean_arabic && (
              <>
                <p className="text-gray-800 p-4 rounded-lg text-sm mb-4 text-right">
                  {dua.clean_arabic}
                </p>
              </>
            )}
            {dua.transliteration_en && (
              <>
                <p className="text-gray-800 font-semibold text-md mb-2">
                  Translation:
                </p>
                <p className="text-gray-700 mb-4">{dua.transliteration_en}</p>
              </>
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
