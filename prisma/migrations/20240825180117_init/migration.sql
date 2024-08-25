-- CreateTable
CREATE TABLE "pembaca" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "tag" TEXT[],
    "number_reader" INTEGER NOT NULL,
    "trending" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pembaca_pkey" PRIMARY KEY ("id")
);
