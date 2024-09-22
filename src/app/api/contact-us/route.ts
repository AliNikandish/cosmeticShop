import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaDB";

export async function POST(req: Request) {

    const { content, authorEmail }: { content:string, authorEmail:string} = await req.json();
    try {
     
    //   const comment = await prisma.comment.create({
    //     data: {
    //       content,authorEmail,productId,score
    //     },
    //   });
      
      
      return NextResponse.json("newComments");
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Some error occured" },
        { status: 500 }
      );
    }
  }