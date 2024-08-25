import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/client";
import { fileHelperSaveToPublicFolder } from "@/utils/handle-image";

import formidable from "formidable";
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
  } | null;
};

type Data = {
  id?: number;
  judul?: string;
  gambar?: string;
  deskripsi?: string;
  tag?: string[];
  number_reader?: number;
  trending?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const id = req.query.id;
  if (req.method === "GET") {
    const data = await prisma.pembaca.findUnique({
      where: { id: Number(id) },
    });
    // handle pembaca sementara, when modal edit is opened, data number of reader will be additioal
    // checkfirs all max all
    const number_reader_max = await prisma.pembaca.aggregate({
      _max: {
        number_reader: true,
      },
    });
    if (data?.number_reader! < number_reader_max._max.number_reader!) {
      await prisma.pembaca.update({
        where: { id: Number(id) },
        data: { number_reader: data?.number_reader! + 1 },
      });
    } else {
      await prisma.pembaca.updateMany({
        data: {
          trending: false,
        },
      });
      await prisma.pembaca.update({
        where: { id: Number(id) },
        data: { number_reader: data?.number_reader! + 1, trending: true },
      });
    }

    // end handle
    return res.status(200).json({
      message: "",
      error: "",
      data: data,
    });
  } else if (req.method === "PATCH") {
    try {
      const form = formidable({});
      let fields;
      let files;
      try {
        [fields, files] = await form.parse(req);
      } catch (err) {
        throw new Error("Error parsing form data");
      }

      let gambar: string = "";
      if (Object.values(files).length > 0) {
        const handleImage = await fileHelperSaveToPublicFolder(files);
        if (handleImage.error) {
          throw new Error("Error saving image");
        }

        const host = req.headers.host; // e.g., "localhost:3000" or "example.com"

        // Determine if the request is secure (HTTPS)
        const protocol = req.headers["x-forwarded-proto"] || "http";

        // Construct the full URL
        const fullUrl = `${protocol}://${host}`;
        gambar = `${fullUrl}${handleImage.filepath}`;
      }

      const judul = fields.judul?.toString();
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

      let data: Data;
      if (gambar === "") {
        data = await prisma.pembaca.update({
          where: { id: Number(id) },
          data: {
            judul: judul ?? "",
            deskripsi: deskripsi ?? "",
            tag: tag ? tag.split(",") : [],
            number_reader,
            trending,
          },
        });
      } else {
        data = await prisma.pembaca.update({
          where: { id: Number(id) },
          data: {
            judul: judul ?? "",
            gambar,
            deskripsi: deskripsi ?? "",
            tag: tag ? tag.split(",") : [],
            number_reader,
            trending,
          },
        });
      }
      if (!data) {
        throw new Error("Error update data");
      }
      return res.status(200).json({
        message: "",
        error: "",
        data: data,
      });
    } catch (err) {
      return res.status(400).json({
        message: "",
        error: err?.toString(),
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const data = await prisma.pembaca.delete({
        where: { id: Number(id) },
      });
      return res.status(200).json({
        message: "",
        error: "",
        data: data,
      });
    } catch (err) {
      return res.status(400).json({
        message: "",
        error: err?.toString(),
      });
    }
  }

  return res.status(200).json({
    message: "",
    error: "alowed method else",
  });
}
