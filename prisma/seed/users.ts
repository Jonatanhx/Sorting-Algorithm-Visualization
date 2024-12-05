import { db } from "prisma/db";

export async function seedAdmins() {
  const email = process.env.OWNER_IDENTIFIER;
  const name = process.env.OWNER_NAME;
  const image = process.env.OWNER_IMAGE;

  await db.user.upsert({
    where: { email: email },
    update: {},
    create: {
      name: name,
      email: email,
      isAdmin: true,
      image: image,
    },
  });
}
