import { db } from "../db";

export async function seedCountries() {
  await db.countries.upsert({
    where: { name: "Sweden" },
    update: {},
    create: {
      name: "Sweden",
      populationSize: 10540000,
      landArea: 450295,
    },
  });

  await db.countries.upsert({
    where: { name: "Pakistan" },
    update: {},
    create: {
      name: "Pakistan",
      populationSize: 240500000,
      landArea: 881913,
    },
  });

  await db.countries.upsert({
    where: { name: "United States" },
    update: {},
    create: {
      name: "United States",
      populationSize: 331900000,
      landArea: 9833517,
    },
  });

  await db.countries.upsert({
    where: { name: "Brazil" },
    update: {},
    create: {
      name: "Brazil",
      populationSize: 214300000,
      landArea: 8515770,
    },
  });

  await db.countries.upsert({
    where: { name: "India" },
    update: {},
    create: {
      name: "India",
      populationSize: 1408000000,
      landArea: 3287263,
    },
  });

  await db.countries.upsert({
    where: { name: "Japan" },
    update: {},
    create: {
      name: "Japan",
      populationSize: 125360000,
      landArea: 377915,
    },
  });

  await db.countries.upsert({
    where: { name: "Nigeria" },
    update: {},
    create: {
      name: "Nigeria",
      populationSize: 218500000,
      landArea: 923768,
    },
  });

  await db.countries.upsert({
    where: { name: "Germany" },
    update: {},
    create: {
      name: "Germany",
      populationSize: 83240000,
      landArea: 357022,
    },
  });

  await db.countries.upsert({
    where: { name: "Australia" },
    update: {},
    create: {
      name: "Australia",
      populationSize: 25690000,
      landArea: 7741220,
    },
  });

  await db.countries.upsert({
    where: { name: "Mexico" },
    update: {},
    create: {
      name: "Mexico",
      populationSize: 128900000,
      landArea: 1964375,
    },
  });

  await db.countries.upsert({
    where: { name: "Egypt" },
    update: {},
    create: {
      name: "Egypt",
      populationSize: 104260000,
      landArea: 1001450,
    },
  });

  await db.countries.upsert({
    where: { name: "Canada" },
    update: {},
    create: {
      name: "Canada",
      populationSize: 38250000,
      landArea: 9984670,
    },
  });
}
