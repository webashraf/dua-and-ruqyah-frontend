"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IDuah } from "@/src/types/duah";

const DuahMenu = ({ id }: { id: number }) => {
  const [duah, setDuah] = useState<IDuah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dua-rukiyah-backend.vercel.app/dua/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setDuah(data);
      } catch (err: any) {
        console.error("Error fetching data:", err); // Debugging log
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!duah.length) return <p>No dua found.</p>;

  return (
    <div>
      {duah.map((dua: IDuah) => {
        const safeId = dua.dua_name_en
          ? dua.dua_name_en.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")
          : "";

        return (
          <div key={dua.id} className="flex items-center gap-2">
            <Image
              alt="arrow-down"
              height={15}
              src="https://i.ibb.co/vLXw43N/duaarrow.png"
              width={15}
            />
            {dua.dua_name_en && (
              <a
                className="text-[12px] text-green-600 py-2"
                // duration={1000}
                // smooth={true}
                href={`#${dua?.id}`}
              >
                {dua.dua_name_en}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DuahMenu;
