"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IDuah } from "../types/duah";

const DuahMenu = ({ id }: { id: number }) => {
  const [duah, setDuah] = useState<IDuah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/dua/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setDuah(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!duah.length) {
    return <p>No dua found.</p>;
  }

  return (
    <div>
      {duah.map((dua: IDuah) => (
        <div key={dua.id} className="flex items-center gap-2">
          <Image
            alt="arrow-down"
            height={15}
            src="https://i.ibb.co/vLXw43N/duaarrow.png"
            width={15}
          />
          {dua.dua_name_en && (
            <h4 className="text-[12px] text-green-600 py-2">
              {dua.dua_name_en}
            </h4>
          )}
        </div>
      ))}
    </div>
  );
};

export default DuahMenu;
