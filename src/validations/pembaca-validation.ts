import { z } from "zod";

const uploadSchema = z.object({
  judul: z.string().min(5),
  gambar: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "File tidak boleh kosong" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Hanya menerima file gambar",
    }),
  deskripsi: z.string().min(10),
  tag: z.string().min(1),
  trending: z.string(),
});

const editSchema = z.object({
  judul: z.string().min(5),
  gambar: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "File tidak boleh kosong" })
    .refine((file) => file.type.startsWith("image/"), {
      message: "Hanya menerima file gambar",
    })
    .optional(),
  deskripsi: z.string().min(10),
  tag: z.string().min(1),
  trending: z.string(),
});

export const addPembaca = async (formData: FormData) => {
  const validationField = uploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validationField.success) {
    return {
      error: validationField.error.flatten().fieldErrors,
    };
  }
};

export const editPembaca = async (formData: FormData) => {
  const validationField = editSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validationField.success) {
    return {
      error: validationField.error.flatten().fieldErrors,
    };
  }
};
