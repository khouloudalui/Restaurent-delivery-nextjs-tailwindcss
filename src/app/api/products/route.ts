import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

//FETCH all PRODUCTS
export const GET = async () => {
  try {
    const products = await prisma.product.findMany(); // return an array of objects in JSON format
    return new NextResponse(JSON.stringify(products), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Something wrong!" }), {
      status: 500,
    });
  }
};
