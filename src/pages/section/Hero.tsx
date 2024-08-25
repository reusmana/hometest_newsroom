"use client";
import React, { useEffect, useRef } from "react";
import search from "@/assets/search.svg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [tags, setTags] = React.useState<[]>([]);

  useEffect(() => {
    const _tags = async () => {
      const data = await fetch("/api/tags");
      const json = await data.json();
      setTags(json.data);
    };

    _tags();
  }, []);

  return (
    <div className="py-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-1 font-bold text-9xl text-center">
          Newsroom
        </h1>
        <div className="py-1 px-24">
          <hr className="w-full border-t-4 border-slate-4" />
          <div className="flex items-center py-2 justify-between px-2">
            <ul className="flex items-center divide-x gap-x-2 divide-slate-4">
              {tags?.map((tag: any, index: number) => (
                <li key={index} className="pl-2 text-slate-4 ">
                  <span className="text-base cursor-pointer">{tag}</span>
                </li>
              ))}
              {/* <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Bisnis</span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Desain</span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Teknologi</span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Media Sosial</span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">
                  Digital marketing
                </span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Penulisan</span>
              </li>
              <li className="pl-2 text-slate-4 ">
                <span className="text-base cursor-pointer">Gaya Hidup</span>
              </li> */}
            </ul>
            <div className="flex">
              <input
                ref={searchInput}
                type="text"
                placeholder="Cari"
                className={`${
                  searchInput.current?.focus() ? "w-full" : "w-10"
                } h-[36px] pl-3  outline-none placeholder:text-slate-4 placeholder:font-medium placeholder:text-sm text-sm font-medium`}
              />
              <Button className="h-[36px]  flex justify-center items-center w-10">
                <Image src={search} alt="search-bar" />
              </Button>
            </div>
          </div>
          <hr className="w-full  border-slate-4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
