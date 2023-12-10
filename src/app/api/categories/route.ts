import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//FETCH all categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany(); // return an array of objects in JSON format 
    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something wrong!" }), {
      status: 500,
    });
  }
};
