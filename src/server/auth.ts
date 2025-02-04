import Github from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type SolidAuthConfig } from "@solid-mediakit/auth";
import { serverEnv } from "~/env/server";
import { db } from "../../prisma/db";

declare module "@auth/core/types" {
  export interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github" && profile) {
        const githubProfile = profile as {
          avatar_url?: string;
          name?: string;
          email?: string;
        };

        const existingUser = await db.user.findUnique({
          where: { email: githubProfile.email ?? undefined },
        });

        if (!existingUser) {
          await db.user.create({
            data: {
              name: githubProfile.name ?? undefined,
              email: githubProfile.email ?? undefined,
              image: githubProfile.avatar_url ?? undefined,
              accounts: {
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  token_type: account.token_type,
                  scope: account.scope,
                },
              },
            },
          });
        }
      }
      return true;
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: serverEnv.GITHUB_ID,
      clientSecret: serverEnv.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  debug: false,
  basePath: import.meta.env.VITE_AUTH_PATH,
};
