import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";
import { v4 as uuid } from "uuid";
import { z } from "zod";

type ResponseData = {
  name?: string;
  job?: string;
  id?: number;
  createdAt?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = await prisma.crud.create({
    data: {
      name: req.body.name,
      job: req.body.job,
    },
  });
  return res.status(201).json({
    name: user.name,
    job: user.job,
    id: user.id,
    createdAt: user.createdAt,
  });
}
