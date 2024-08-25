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

type TagsResponse = {
  tag: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const trending = await prisma.pembaca.findMany({
    select: {
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const tags_: any = [];

  trending.forEach((item) => {
    item.tag.forEach((tag) => {
      if (!tags_.includes(tag)) {
        tags_.push(tag);
      }
    });
  });

  return res.status(200).json({
    message: "",
    error: "",
    data: tags_,
  });
}
