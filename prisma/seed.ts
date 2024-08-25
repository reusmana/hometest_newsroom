// import prisma from "@/client";
const { pembacaSeeder } = require("./data.ts");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.pembaca.deleteMany();
    await prisma.pembaca.createMany({
      data: pembacaSeeder,
    });
  } catch (err) {
    console.log(err);
  }
};
load();
