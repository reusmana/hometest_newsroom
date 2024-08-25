import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";
import { v4 as uuid } from "uuid";
import { z } from "zod";

type ResponseData = {
  id?: number;
  token?: string;
  error?: any;
};

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const validate = schema.safeParse(req.body);
  let message: string = "";
  if (!validate.success) {
    const parse = JSON.parse(validate.error.message);
    parse.forEach((element: any, index: number) => {
      message += `missing ${element.path.toString()}${
        parse.length > 1 && index < parse.length - 1 ? ", " : ""
      }`;
    });
    return res.status(400).json({ error: message });
  }

  const user = await prisma.auth.create({
    data: {
      email: validate.data.email,
      password: validate.data.password,
    },
  });
  return res.status(200).json({
    id: user.id,
    token: uuid(),
  });
}
