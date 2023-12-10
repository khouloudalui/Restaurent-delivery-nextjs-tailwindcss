import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  {
    /*- Create a prismaClientSingleton function to ensure a single instance of PrismaClient.
     */
  }
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}
// Declare a global variable to hold the Prisma client instance.

const prisma = globalThis.prisma ?? prismaClientSingleton(); //- Use globalThis.prisma to access the Prisma client globally.
//- Ensure that the Prisma client is created only if it doesn't exist.

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma; //- Set globalThis.prisma in non-production environments for easy access in development.

// =======> This refactor improves the organization and access pattern for the Prisma client.
