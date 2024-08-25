"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ImageArticle from "@/assets/articel-picture-10.png";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { FaPlusCircle } from "react-icons/fa";
import Create from "@/components/modal/Create";
import Link from "next/link";
import Edit from "@/components/modal/Edit";
import { useRouter } from "next/router";

type DataTable = {
  id?: number;
  judul?: string;
  gambar?: string;
  deskripsi?: string;
  tag?: string[];
  number_reader?: number;
  trending?: boolean;
};

const Index = () => {
  const router = useRouter();
  const [isCreated, setIsCreated] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [datatables, setDatatables] = React.useState<DataTable[] | []>([]);
  const [isUpdated, setIsUpdated] = React.useState<{
    popup: boolean;
    id: number;
  }>({
    popup: false,
    id: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/pembaca");
      const json = await data.json();

      setDatatables(json.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const refreshFetch = async () => {
    setIsSuccess(false);
    const data = await fetch("/api/pembaca");
    const json = await data.json();
    setDatatables(json.data);
    setIsSuccess(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleEdit = (id: number) => {
    setIsUpdated({
      popup: true,
      id,
    });
  };

  const handleDelete = async (id: number) => {
    const del = await fetch(`/api/pembaca/${id}`, {
      method: "DELETE",
    });

    refreshFetch();
  };

  const handleCloseModal = () => {
    setIsCreated(false);
    setIsUpdated({ ...isUpdated, popup: false });
    setIsSuccess(false);
    refreshFetch();
  };
  return (
    <div>
      {isUpdated.popup && <Edit id={isUpdated.id} close={handleCloseModal} />}
      <Link
        href={"/"}
        className="text-sm underline uppercase text-emerald-600 mt-5 px-10"
      >
        Kembali
      </Link>
      <div className="flex w-full px-10">
        <div className="border border-grey-2 rounded-lg overflow-hidden w-full overflow-x-scroll mt-5 mx-10 ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="h-20 border-b border-grey-2">
                <th className="w-[10px]">No</th>
                <th className="w-[40px]">Judul</th>
                <th className="w-[20px]">Gambar</th>
                <th className="w-[100px]">Deskripsi</th>
                <th className="w-[40px]">Tag</th>
                <th className="w-[16px]">Trending</th>
                <th className="w-[50px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {datatables?.map((item, index) => (
                <tr key={item?.id} className="h-32 ">
                  <td className="text-center px-2 border-r border-grey-2 break-words">
                    {index + 1}
                  </td>
                  <td className="text-center px-2 border-r border-grey-2 break-words">
                    {item.judul}
                  </td>
                  <td className="text-center px-2 border-r border-grey-2 break-words mx-auto ">
                    <div className="flex justify-center items-center">
                      <img
                        src={item.gambar}
                        alt="item"
                        className="size-20 object-cover rounded-lg"
                      />
                      {/* <Image
                      src={`http://localhost:3000/uploads/Screenshot 2024-01-21 at 20.56.24.png`}
                      alt="image ar1"
                      width={100}
                      height={100}
                      className="size-20 object-cover rounded-lg"
                    ></Image> */}
                    </div>
                  </td>
                  <td className="text-center px-2 border-r border-grey-2 break-words">
                    {item.deskripsi}
                  </td>
                  <td className="text-center px-2 border-r border-grey-2 break-words">
                    <div className="flex flex-wrap items-center gap-2">
                      {item?.tag?.map((item) => (
                        <Tag key={item} className="bg-linear">
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </td>
                  <td className="text-center px-2 border-r border-grey-2  ">
                    <Tag
                      className={`${
                        item.trending ? "bg-emerald-400" : "bg-red-400"
                      }`}
                    >
                      {item.trending ? "true" : "false"}
                    </Tag>
                  </td>
                  <td className="text-center px-2 ">
                    <div className="w-full grid grid-cols-2 gap-2">
                      <Button
                        className="flex bg-emerald-400 justify-center items-center text-sm py-1 text-white-1 rounded-md"
                        onClick={() => handleEdit(item.id!)}
                      >
                        Edit
                      </Button>

                      <Button
                        className="flex bg-red-400 justify-center items-center text-sm py-1 text-white-1 rounded-md"
                        onClick={() => handleDelete(item.id!)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <Button
          className="flex gap-2 items-center"
          onClick={() => setIsCreated(true)}
        >
          <FaPlusCircle />
          Additional Data
        </Button>
        {isCreated && <Create close={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Index;
