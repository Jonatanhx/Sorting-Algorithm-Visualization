import { db } from "prisma/db";

export async function seedCountries() {
  await db.countries.upsert({
    where: {
      name: "Sweden",
    },
    update: {},
    create: {
      name: "Sweden",
      populationSize: 10540000,
      landArea: 450295,
    },
  });
  await db.countries.upsert({
    where: {
      name: "Pakistan",
    },
    update: {},
    create: {
      name: "Pakistan",
      populationSize: 240500000,
      landArea: 881913,
    },
  });
}
