"use client";
import React from "react";
import Image from "next/image";
import ImageArticle from "@/assets/articel-picture-10.png";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { FaPlusCircle } from "react-icons/fa";
import Create from "@/components/modal/Create";
import Link from "next/link";

const Index = () => {
  const [isCreated, setIsCreated] = React.useState(false);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  return (
    <div>
      <Link
        href={"/"}
        className="text-sm underline uppercase text-emerald-600 mt-5 px-10"
      >
        Kembali
      </Link>
      <div className="border border-grey-2 rounded-lg overflow-clip overflow-x-scroll mt-5 ">
        <table className=" table-fixed w-full">
          <thead>
            <tr className="h-20 border-b border-grey-2">
              <th className="w-[10px]">No</th>
              <th className="w-[20px]">Judul</th>
              <th className="w-[20px]">Gambar</th>
              <th className="w-[100px]">Deskripsi</th>
              <th className="w-[40px]">Tag</th>
              <th className="w-[10px]">Trending</th>
              <th className="w-[50px]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-32 ">
              <td className="text-center px-2 border-r border-grey-2">1</td>
              <td className="text-center px-2 border-r border-grey-2">
                Laravel Pro Developer
              </td>
              <td className="text-center px-2 border-r border-grey-2 mx-auto ">
                <div className="flex justify-center items-center">
                  <Image
                    src={ImageArticle}
                    alt="image ar1"
                    className="size-20 object-cover rounded-lg"
                  ></Image>
                </div>
              </td>
              <td className="text-center px-2 border-r border-grey-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo sunt nulla cumque sapiente reiciendis dolores, facere
                veniam praesentium et eligendi.
              </td>
              <td className="text-center px-2 border-r border-grey-2">
                <div className="flex flex-wrap items-center gap-2">
                  {["items", "healty", "programming"].map((item) => (
                    <Tag key={item} className="bg-linear">
                      {item}
                    </Tag>
                  ))}
                </div>
              </td>
              <td className="text-center px-2 border-r border-grey-2 ">
                <Tag className="bg-emerald-500">Yes</Tag>
              </td>
              <td className="text-center px-2 ">
                <div className="w-full grid grid-cols-2 gap-2">
                  <Button className="flex bg-emerald-400 justify-center items-center text-sm py-1 text-white-1 rounded-md">
                    Edit
                  </Button>
                  <Button className="flex bg-red-400 justify-center items-center text-sm py-1 text-white-1 rounded-md">
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-10">
        <Button
          className="flex gap-2 items-center"
          onClick={() => setIsCreated(true)}
        >
          <FaPlusCircle />
          Additional Data
        </Button>
        {isCreated && <Create close={() => setIsCreated(false)} />}
      </div>
    </div>
  );
};

export default Index;
