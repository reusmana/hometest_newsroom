import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";

type ResponseData = {
  page: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?:
    | {
        id?: number;
        name?: string;
        year?: number;
        color?: string;
        pantone_value?: string;
      }[]
    | undefined;
  support: {
    url: string;
    text: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const page = Number(req.query.page) || 1;
  const perPage = Number(6);
  const skip = (page - 1) * perPage;

  const colors = await prisma.color.findMany({
    select: {
      id: true,
      name: true,
      year: true,
      color: true,
      pantone_value: true,
    },
    skip,
    take: perPage,
  });

  const total = await prisma.color.count();

  const totalPages = Math.ceil(total / perPage);

  return res.status(200).json({
    page,
    per_page: perPage,
    total,
    total_pages: totalPages,
    data: colors,
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  });
}
