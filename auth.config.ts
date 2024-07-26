import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!(credentials.email && credentials.password)) return null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) return user;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
