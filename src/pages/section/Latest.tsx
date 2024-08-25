"use client";
import Card from "@/components/Card";
import React, { useEffect } from "react";
import image_news7 from "@/assets/articel-picture-7.png";
import image_news8 from "@/assets/articel-picture-8.png";
import image_news9 from "@/assets/articel-picture-9.png";
import image_news10 from "@/assets/articel-picture-10.png";
import image_news11 from "@/assets/articel-picture-11.png";
import image_news12 from "@/assets/articel-picture-12.png";
import image_news13 from "@/assets/articel-picture-13.png";
import image_news14 from "@/assets/articel-picture-14.png";

import Image from "next/image";
import Pagination from "@/components/Pagination";

type ResponseData = {
  id: number;
  judul: string;
  gambar: string;
  deskripsi: string;
  tag: string[];
  number_reader: number;
  trending: boolean;
};

const Latest = () => {
  const [paginationList, setPaginationList] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [latest, setLatest] = React.useState<ResponseData[]>([]);

  useEffect(() => {
    const latest_s = async () => {
      const data = await fetch("/api/terbaru");
      const _json = await data.json();
      const value = _json.data;
      setLatest(value);
    };
    latest_s();
  }, []);

  return (
    <div className="px-24 py-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-slate-2 self-start">
          Terbaru
        </h2>
        <div className="grid grid-cols-4 gap-14">
          {latest?.map((item: any, index: number) => (
            <Card className="flex flex-col">
              <img
                src={item.gambar}
                alt="image-news"
                className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl object-cover"
              />
              <div className="flex divide-x divide-slate-4 gap-2 py-2">
                {item?.tag?.map((tag: string, index: number) => (
                  <span className="text-linear">
                    <h3
                      className={`flex  text-base font-medium ${
                        index > 0 && "pl-2"
                      } `}
                    >
                      {tag}
                    </h3>
                  </span>
                ))}
              </div>
              <a href="">
                <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                  {item.judul}
                </h2>
              </a>
            </Card>
          ))}
        </div>
        <Pagination count={10} setAction={setPaginationList} />
      </div>
    </div>
  );
};

export default Latest;
