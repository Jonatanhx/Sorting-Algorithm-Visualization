import Github from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type SolidAuthConfig } from "@solid-mediakit/auth";
import { serverEnv } from "~/env/server";
import { prisma } from "./db";

declare module "@auth/core/types" {
  export interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: serverEnv.GITHUB_ID,
      clientSecret: serverEnv.GITHUB_SECRET,
    }),
  ],
  debug: false,
  basePath: import.meta.env.VITE_AUTH_PATH,
};
