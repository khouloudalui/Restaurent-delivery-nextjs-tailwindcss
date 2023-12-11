import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/utils/connect";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!, //The ! is used to assert that process.env.GOOGLE_SECRET is not null or undefined. This is useful when you are confident that the value won't be null or undefined at runtime, but TypeScript cannot statically analyze it.
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions); //we can get user and status in a server components and api
