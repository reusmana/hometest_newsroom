import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import world from "@/assets/world.svg";
import Image from "next/image";

const footerData = [
  {
    title: "Kategori",
    list: [
      "Desain Grafis",
      "Pemograman & Teknologi",
      "Teknik & Arsitektur",
      "Penilsan dan Translasi",
      "Pemasaran Digital",
      "Animasi Video",
      "Musik & Video",
      "Bisnis",
      "Data",
      "Gaya Hidup",
      "Lainnya",
    ],
  },
  {
    title: "About",
    list: [
      "Daftar Sebagai Freelancer",
      "Cara Mulai Pekerjaan",
      "Pembayaran",
      "Jaminan Pekerjaan",
      "Blog Informasi",
      "FAQ",
      "Aturan Penggunaan Personal",
    ],
  },
  {
    title: "Tentang Onanmedia",
    list: [
      "Bekerja dengan Onanmedia",
      "Syarat & Ketentuan",
      "Kebijakan Privasi",
    ],
  },
  {
    title: "Hubungi Kami",
    list: ["cs@onanmedia.com", "Whatsapp"],
  },
];

const Footer = () => {
  return (
    <footer className="py-16 px-24 bg-linear mt-5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-4 items-start gap-24">
          {footerData.map((data, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h2 className="text-base font-bold text-white-1">{data.title}</h2>
              <ul className="text-white-1 font-normal text-base flex flex-col gap-4">
                {data.list.map((list, indexli) => (
                  <li key={indexli}>{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="border-white-1 my-4" />
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-sm font-normal text-white-1">
            © Onanmedia. 2022
          </h3>

          <div className="flex gap-4 items-center">
            <FaTwitter className="text-white-1" />
            <FaFacebook className="text-white-1" />
            <FaLinkedin className="text-white-1" />
            <FaPinterest className="text-white-1" />
            <FaInstagram className="text-white-1" />
            <div className="flex items-center gap-2 ml-4">
              <Image src={world} alt="world" className="size-3" />
              <span className=" text-white-1 font-bold text-sm">ID</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <CiMoneyBill className="text-white-1" />
              <span className=" text-white-1 font-bold text-sm">IDR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
