import NextAuth from "next-auth";
import { authConfig } from "@/config";
 // correct path from src/auth.ts
import GitHub from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig, // <- spread the config
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
});
