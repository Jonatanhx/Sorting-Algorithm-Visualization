import { db } from "../db";

export async function seedPatients() {
  await db.patients.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "Johan",
      age: 24,
      weight: 75,
      height: 170,
    },
  });

  await db.patients.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Sven",
      age: 56,
      weight: 89,
      height: 165,
    },
  });

  await db.patients.upsert({
    where: { id: 3 },
    update: {},
    create: {
      firstName: "Nicklas",
      age: 31,
      weight: 80,
      height: 198,
    },
  });

  await db.patients.upsert({
    where: { id: 4 },
    update: {},
    create: {
      firstName: "Joe",
      age: 49,
      weight: 104,
      height: 188,
    },
  });

  await db.patients.upsert({
    where: { id: 5 },
    update: {},
    create: {
      firstName: "Anders",
      age: 29,
      weight: 60,
      height: 176,
    },
  });
}
