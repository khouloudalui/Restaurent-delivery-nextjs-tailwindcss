import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("HELLO", { status: 200 });
};
