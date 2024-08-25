import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";

type ResponseData = {
  data?:
    | {
        id?: number;
        name?: string;
        year?: number;
        color?: string;
        pantone_value?: string;
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

  const colors = await prisma.color.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
      year: true,
      color: true,
      pantone_value: true,
    },
  });

  if (!colors) {
    return res.status(404).json({});
  }

  return res.status(200).json({
    data: colors,
    support: {
      url: "https://reqres.in/#support-heading",
      text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    },
  });
}
