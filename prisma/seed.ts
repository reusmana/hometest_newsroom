// import prisma from "@/client";
const { pembacaSeeder, users, colors } = require("./data.ts");
const { bcrypt } = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const load = async () => {
  try {
    // const pass = await bcrypt.hash("cityslicka", 10); // bcrypt.hash("cityslicka", 10);
    const auth = [
      {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    ];
    await prisma.pembaca.deleteMany();
    await prisma.user.deleteMany();
    await prisma.auth.deleteMany();
    await prisma.color.deleteMany();
    await prisma.pembaca.createMany({
      data: pembacaSeeder,
    });
    await prisma.user.createMany({
      data: users,
    });
    await prisma.auth.createMany({
      data: auth,
    });
    await prisma.color.createMany({
      data: colors,
    });
  } catch (err) {
    console.log(err);
  }
};
load();
