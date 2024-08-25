import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";

type ResponseData = {
  data?:
    | {
        id?: number;
        email?: string;
        first_name?: string;
        last_name?: string;
        avatar?: string;
      }
    | undefined;
  support?: {
    url: string;
    text: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const id = Number(req.query.id);

  const users = await prisma.user.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      avatar: true,
    },
  });

  if (!users) {
    return res.status(404).json({});
  }

  return res.status(200).json({
    data: users,
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  });
}
