import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";
import { v4 as uuid } from "uuid";
import { z } from "zod";

type ResponseData = {
  name?: string;
  job?: string;
  updateAt?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | null>
) {
  const method = req.method;
  if (method === "PUT") {
    const user = await prisma.crud.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        name: req.body.name,
        job: req.body.job,
      },
    });
    return res.status(200).json({
      name: user.name,
      job: user.job,
      updateAt: user.updatedAt,
    });
  } else if (method === "PATCH") {
    const user = await prisma.crud.update({
      where: {
        id: Number(req.query.id),
      },
      data: {
        name: req.body.name,
        job: req.body.job,
      },
    });
    return res.status(200).json({
      name: user.name,
      job: user.job,
      updateAt: user.updatedAt,
    });
  } else if (method === "DELETE") {
    const user = await prisma.crud.delete({
      where: {
        id: Number(req.query.id),
      },
    });
    return res.status(204).json(null);
  }
}
