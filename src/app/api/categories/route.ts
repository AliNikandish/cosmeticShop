import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaDB";

export async function GET(
    req: Request
  ) {
    try {
      const categories = await prisma.category.findMany()
      
      return NextResponse.json(categories);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Some error occured" },
        { status: 500 }
      );
    }
  }