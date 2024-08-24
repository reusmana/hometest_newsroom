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

const Latest = () => {
  const [paginationList, setPaginationList] = React.useState<number>(1);

  return (
    <div className="px-24 py-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-slate-2 self-start">
          Terbaru
        </h2>
        <div className="grid grid-cols-4 gap-14">
          <Card className="flex flex-col">
            <Image
              src={image_news7}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news8}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news9}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news10}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news11}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news12}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news13}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
          <Card className="flex flex-col">
            <Image
              src={image_news14}
              alt="image-news"
              className="w-full max-w-[270px] min-h-[200px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-sm text-slate-2 max-w-[609px]">
                Cara menjadi KAYA dengan Digital Marketing dan SEO
              </h2>
            </a>
          </Card>
        </div>
        <Pagination count={10} setAction={setPaginationList} />
      </div>
    </div>
  );
};

export default Latest;
