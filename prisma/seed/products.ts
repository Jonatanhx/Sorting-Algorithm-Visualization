import { db } from "../db";

export async function seedProducts() {
  await db.products.upsert({
    where: { name: "T-shirt" },
    update: {},
    create: {
      name: "T-shirt",
      price: 499,
      quantity: 2000,
    },
  });
  await db.products.upsert({
    where: { name: "Hoodie" },
    update: {},
    create: {
      name: "Hoodie",
      price: 899,
      quantity: 2491,
    },
  });
  await db.products.upsert({
    where: { name: "Fedora" },
    update: {},
    create: {
      name: "Fedora",
      price: 1999,
      quantity: 409,
    },
  });
  await db.products.upsert({
    where: { name: "Beanie" },
    update: {},
    create: {
      name: "Beanie",
      price: 200,
      quantity: 4000,
    },
  });
  await db.products.upsert({
    where: { name: "Sweatshirt" },
    update: {},
    create: {
      name: "Sweatshirt",
      price: 799,
      quantity: 1004,
    },
  });
}
