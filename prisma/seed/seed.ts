import { db } from "../db";
import { seedCountries } from "./countries";
import { seedPatients } from "./patients";
import { seedProducts } from "./products";
import { seedAdmins } from "./users";

async function main() {
  seedCountries();
  seedProducts();
  seedPatients();
  seedAdmins();
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
