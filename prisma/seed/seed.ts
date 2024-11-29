import { db } from "../db";
import { seedCountries } from "./countries";

async function main() {
  seedCountries();
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
