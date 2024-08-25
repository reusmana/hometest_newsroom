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
        email?: string;
        first_name?: string;
        last_name?: string;
        avatar?: string;
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
  const delay = Number(req.query.delay) || 0;
  const page = Number(req.query.page) || 1;
  const perPage = Number(6);
  const skip = (page - 1) * perPage;

  // Fetch users with pagination
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      avatar: true,
    },
    skip,
    take: perPage,
  });

  // Fetch total number of users
  const total = await prisma.user.count();

  // Calculate total pages
  const totalPages = Math.ceil(total / perPage);

  setTimeout(() => {
    return res.status(200).json({
      page,
      per_page: perPage,
      total,
      total_pages: totalPages,
      data: users,
      support: {
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!",
      },
    });
  }, delay * 1000);
}
