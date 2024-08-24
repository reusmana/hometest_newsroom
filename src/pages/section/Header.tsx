import Image from "next/image";
import React from "react";
import logo from "@/assets/logo-news.svg";
import search from "@/assets/search.svg";
import comment from "@/assets/comment.svg";
import love from "@/assets/likes.svg";
import bell from "@/assets/bell.svg";
import Button from "@/components/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-3 px-5 border-b border-grey-4 w-full">
      <div className="flex justify-between items-center max-w-[1440px] w-full mx-auto ">
        <Image src={logo} alt="logo-news" />
        <div className="max-w-[767px] w-full  border border-grey-4 flex items-center rounded-lg overflow-clip">
          <input
            type="text"
            placeholder="Coba ketikkan “Diskusi”"
            className="w-full h-[36px] pl-3  outline-none placeholder:text-grey-1 placeholder:font-medium placeholder:text-sm text-sm font-medium  "
          />

          <Button className="bg-grey-4 w-10 h-[36px]  flex justify-center items-center">
            <Image src={search} alt="search-bar" />
          </Button>
        </div>
        <div className="flex items-center gap-6">
          <Button className="">
            <Image src={comment} alt="search-bar" />
          </Button>
          <Button className="">
            <Image src={love} alt="search-bar" />
          </Button>
          <Button className="">
            <Image src={bell} alt="search-bar" />
          </Button>
          <span className="w-[1px] h-6 bg-grey-4"></span>
          <div className=" inline-flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-400"></span>
            <Link
              href="/dashboard"
              className="font-medium text-sm text-slate-1"
            >
              Reusmana
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
