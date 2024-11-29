import { db } from "~/prismaClient";

export async function seedAdmins() {
  const email = process.env.OWNER_IDENTIFIER;
  const name = process.env.OWNER_NAME;

  await db.user.upsert({
    where: { email: email },
    update: {},
    create: {
      name: name,
      email: email,
      isAdmin: true,
    },
  });
}
