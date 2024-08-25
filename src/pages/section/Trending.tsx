"use client";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import image_news1 from "@/assets/articel-picture-1.png";
import image_news2 from "@/assets/articel-picture-2.png";
import image_news3 from "@/assets/articel-picture-3.png";
import image_news4 from "@/assets/articel-picture-4.png";
import image_news5 from "@/assets/articel-picture-6.png";

import Image from "next/image";

type ResponseData = {
  id: number;
  judul: string;
  gambar: string;
  deskripsi: string;
  tag: string[];
  number_reader: number;
  trending: boolean;
};

const Trending = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [trending, setTrending] = React.useState<ResponseData>();
  const [trendingSub, setTrendingSub] = React.useState<ResponseData[]>([]);

  useEffect(() => {
    const trending_s = async () => {
      const data = await fetch("/api/trending");
      const _json = await data.json();
      const value = _json.data;
      value.forEach((item: any, index: number) => {
        if (item.trending) {
          setTrending(item);
        }
      });

      setTrendingSub(value.filter((item: any) => item.trending === false));
    };
    trending_s();
  }, []);
  return (
    <div className="px-24 pb-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-slate-2">
          Paling Sering Dibaca
        </h2>
        <div className="grid grid-cols-2 gap-16">
          <Card className="flex flex-col">
            <img
              src={trending?.gambar}
              alt="image-news"
              className="w-full max-w-[609px] min-h-[500px] bg-cover rounded-2xl object-cover"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              {trending?.tag?.map((tag: string, index: number) => (
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
              <h2 className="font-semibold text-2xl text-slate-2 max-w-[609px]">
                {trending?.judul}
              </h2>
            </a>
          </Card>
          <div className="flex flex-col gap-7">
            {trendingSub?.map((item: any, index: number) => (
              <Card key={index} className="flex flex-row gap-3">
                {/* <Image
                  src={image_news2}
                  alt="image-news"
                  className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl"
                /> */}
                <img
                  src={item.gambar}
                  alt="image-news"
                  className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl object-cover"
                />
                <div className="flex flex-col">
                  <div className="flex  divide-x divide-slate-4 gap-2 py-2">
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
                  <a href="" className="max-w-xs">
                    <h2 className="font-semibold text-sm text-slate-2">
                      {item.judul}
                    </h2>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
