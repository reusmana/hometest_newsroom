/*
  Warnings:

  - You are about to drop the column `username` on the `auth` table. All the data in the column will be lost.
  - Added the required column `email` to the `auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "auth" DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL;
