import formidable from "formidable";
import fs from "fs";
import path from "path";

// helper
export const fileHelperSaveToPublicFolder = async (files: any) => {
  try {
    const uploadedFiles = files?.gambar?.map((file: any) => {
      return JSON.parse(JSON.stringify(file.filepath));
    });
    const originalFilename = files?.gambar?.map((file: any) => {
      return JSON.parse(JSON.stringify(file.originalFilename));
    });

    // const uploadDir = path.join(process.cwd(), "public/uploads");

    // const filePath = path.join(uploadDir, originalFilename?.[0]);

    // // Check if the file already exists
    // if (fs.existsSync(filePath)) {
    //   throw new Error("File already exists");
    // }

    // // Example: Move the uploaded file to a new location
    const oldPath = uploadedFiles?.[0];
    const newPath = `./public/uploads/${originalFilename?.[0]}`;
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw new Error("Error moving file");
      }
    });
    return {
      error: undefined,
      filepath: `/uploads/${originalFilename?.[0]}`,
    };
  } catch (err) {
    return {
      error: err,
      filepath: "",
    };
  }
};
