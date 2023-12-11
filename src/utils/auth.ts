import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!, //The ! is used to assert that process.env.GOOGLE_SECRET is not null or undefined. This is useful when you are confident that the value won't be null or undefined at runtime, but TypeScript cannot statically analyze it.
    }),
  ],
};
