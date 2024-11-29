import { db } from "~/server/db";
import { seedCountries } from "./countries";
import { seedAdmins } from "./users";

async function main() {
  seedCountries();
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
