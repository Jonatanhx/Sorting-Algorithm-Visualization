import { db } from "prisma/db";

export async function seedAdmins() {
  const email = process.env.OWNER_IDENTIFIER;
  const name = process.env.OWNER_NAME;
  const image = process.env.OWNER_IMAGE;

  const examinatorEmail = process.env.EXAMINATOR_IDENTIFIER;
  const examinatorName = process.env.EXAMINATOR_NAME;

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

  await db.user.upsert({
    where: { email: examinatorEmail },
    update: {},
    create: {
      name: examinatorName,
      email: examinatorEmail,
      isAdmin: true,
      image: "",
    },
  });
}
