import Image from "next/image";

const page = () => {
  const data = [
    {
      number: 1,
      title: "The servant is dependent on his Lord #1",
      content:
        "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
      reference: "Surah Al-Fatir 35:15",
    },
    {
      number: 2,
      title: "Conditions for Dua to be successful",
      content:
        "Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): 'And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.' (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.",
      transliteration:
        "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      translation:
        "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
      duaReference: "Bukhari: 844",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-green-600 font-bold text-xl mb-6">
          The servant is dependent on his Lord
        </h1>
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2 text-green-600">
              <Image
                alt="Allah"
                height={35}
                src="https://i.ibb.co/C8g0WXX/allah-1-Traced.png"
                width={35}
              />
              {item.number}. {item.title}
            </h2>
            <p className="text-gray-700 mb-4">{item.content}</p>
            {item.reference && (
              <p className="text-gray-800 font-medium mb-4">
                <strong className="text-green-600">Reference:</strong>{" "}
                {item.reference}
              </p>
            )}
            {item.transliteration && (
              <>
                <p className="text-gray-800 p-4 rounded-lg text-sm mb-4 text-right">
                  {item.transliteration}
                </p>
              </>
            )}
            {item.translation && (
              <>
                <p className="text-gray-800 font-semibold text-md mb-2">
                  Translation:
                </p>
                <p className="text-gray-700 mb-4">{item.translation}</p>
              </>
            )}
            {item.duaReference && (
              <p className="text-gray-600 font-medium">
                <strong className="text-green-600">Reference:</strong>{" "}
                {item.duaReference}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
