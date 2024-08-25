import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";

type ResponseData = {
  message: string;
  error?: string;
  data?:
    | {
        id?: number;
        judul?: string;
        gambar?: string;
        deskripsi?: string;
        tag?: string[];
        number_reader?: number;
        trending?: boolean;
      }[]
    | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const trending = await prisma.pembaca.findMany({
    select: {
      id: true,
      judul: true,
      gambar: true,
      deskripsi: true,
      tag: true,
      number_reader: true,
      trending: true,
    },
    take: 4,
    orderBy: {
      number_reader: "desc",
    },
  });

  const aggregate = await prisma.pembaca.aggregate({
    _max: {
      number_reader: true,
      id: true,
    },

    take: 1,
  });
  return res.status(200).json({
    message: "",
    error: "",
    data: aggregate,
  });
}
