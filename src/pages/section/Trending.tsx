import Card from "@/components/Card";
import React from "react";
import image_news1 from "@/assets/articel-picture-1.png";
import image_news2 from "@/assets/articel-picture-2.png";
import image_news3 from "@/assets/articel-picture-3.png";
import image_news4 from "@/assets/articel-picture-4.png";
import image_news5 from "@/assets/articel-picture-6.png";

import Image from "next/image";

const Trending = () => {
  return (
    <div className="px-24 pb-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-slate-2">
          Paling Sering Dibaca
        </h2>
        <div className="grid grid-cols-2 gap-16">
          <Card className="flex flex-col">
            <Image
              src={image_news1}
              alt="image-news"
              className="w-full max-w-[609px] min-h-[500px] bg-cover rounded-2xl"
            />
            <div className="flex divide-x divide-slate-4 gap-2 py-2">
              <span className="text-linear pl-2">
                <h3 className="flex  text-base font-medium">Tips</h3>
              </span>
              <span className="text-linear pl-2">
                <h3 className="flex  text-base font-medium">Gaya Hidup</h3>
              </span>
            </div>
            <a href="">
              <h2 className="font-semibold text-2xl text-slate-2 max-w-[609px]">
                Tips membuat Brand Desain Lebih Baik dan Sukses di Tahun 2024
              </h2>
            </a>
          </Card>
          <div className="flex flex-col gap-7">
            <Card className="flex flex-row gap-3">
              <Image
                src={image_news2}
                alt="image-news"
                className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex  divide-x divide-slate-4 gap-2 py-2">
                  <span className="text-linear">
                    <h3 className="flex  text-sm font-medium">Tips</h3>
                  </span>
                  <span className="text-linear pl-2">
                    <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
                  </span>
                </div>
                <a href="" className="max-w-xs">
                  <h2 className="font-semibold text-sm text-slate-2">
                    Langkah-langkah membuat illustrasi beruang pada aplikasi
                    Adobe Illustrator
                  </h2>
                </a>
              </div>
            </Card>
            <Card className="flex flex-row gap-3">
              <Image
                src={image_news3}
                alt="image-news"
                className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex  divide-x divide-slate-4 gap-2 py-2">
                  <span className="text-linear">
                    <h3 className="flex  text-sm font-medium">Tips</h3>
                  </span>
                  <span className="text-linear pl-2">
                    <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
                  </span>
                </div>
                <a href="" className="max-w-xs">
                  <h2 className="font-semibold text-sm text-slate-2">
                    Langkah-langkah membuat illustrasi beruang pada aplikasi
                    Adobe Illustrator
                  </h2>
                </a>
              </div>
            </Card>
            <Card className="flex flex-row gap-3">
              <Image
                src={image_news4}
                alt="image-news"
                className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex  divide-x divide-slate-4 gap-2 py-2">
                  <span className="text-linear">
                    <h3 className="flex  text-sm font-medium">Tips</h3>
                  </span>
                  <span className="text-linear pl-2">
                    <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
                  </span>
                </div>
                <a href="" className="max-w-xs">
                  <h2 className="font-semibold text-sm text-slate-2">
                    Langkah-langkah membuat illustrasi beruang pada aplikasi
                    Adobe Illustrator
                  </h2>
                </a>
              </div>
            </Card>
            <Card className="flex flex-row gap-3">
              <Image
                src={image_news5}
                alt="image-news"
                className="max-w-[242px] w-ful min-h-[130px] bg-cover rounded-2xl"
              />
              <div className="flex flex-col">
                <div className="flex  divide-x divide-slate-4 gap-2 py-2">
                  <span className="text-linear">
                    <h3 className="flex  text-sm font-medium">Tips</h3>
                  </span>
                  <span className="text-linear pl-2">
                    <h3 className="flex  text-sm font-medium">Gaya Hidup</h3>
                  </span>
                </div>
                <a href="" className="max-w-xs">
                  <h2 className="font-semibold text-sm text-slate-2">
                    Langkah-langkah membuat illustrasi beruang pada aplikasi
                    Adobe Illustrator
                  </h2>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
