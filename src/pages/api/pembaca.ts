import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";

import formidable from "formidable";
import { fileHelperSaveToPublicFolder } from "@/utils/handle-image";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's built-in body parsing
  },
};

type ResponseData = {
  message: string;
  error?: string;
  data?: {
    id?: number;
    judul?: string;
    gambar?: string;
    deskripsi?: string;
    tag?: string[];
    number_reader?: number;
    trending?: boolean;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const form = formidable({});
      let fields;
      let files;
      try {
        [fields, files] = await form.parse(req);
      } catch (err) {
        throw new Error("Error parsing form data");
      }

      const handleImage = await fileHelperSaveToPublicFolder(files);
      if (handleImage.error) {
        throw new Error("Error saving image");
      }

      const host = req.headers.host; // e.g., "localhost:3000" or "example.com"

      // Determine if the request is secure (HTTPS)
      const protocol = req.headers["x-forwarded-proto"] || "http";

      // Construct the full URL
      const fullUrl = `${protocol}://${host}`;

      const judul = fields.judul?.toString();
      const gambar = `${fullUrl}${handleImage.filepath}`;
      const deskripsi = fields.deskripsi?.toString();
      const tag = fields.tag?.toString();
      const number_reader = 0;
      const trending = fields.trending?.toString() === "true" ? true : false;

      if (trending) {
        await prisma.pembaca.updateMany({
          data: {
            trending: false,
          },
        });
      }
      const data = await prisma.pembaca.create({
        data: {
          judul: judul ?? "",
          gambar,
          deskripsi: deskripsi ?? "",
          tag: tag ? tag.split(",") : [],
          number_reader,
          trending,
        },
      });

      if (!data) {
        throw new Error("Error add data");
      }
      return res.status(200).json({
        message: "berhasil created",
        error: "",
        data: [data],
      });
    } catch (err) {
      return res.status(400).json({
        message: "",
        error: err?.toString(),
      });
    }
  } else if (req.method === "GET") {
    const data = await prisma.pembaca.findMany();
    return res.status(200).json({
      message: "",
      error: "",
      data: data,
    });
  }

  return res.status(200).json({
    message: "",
    error: "alowed method else",
  });
}
