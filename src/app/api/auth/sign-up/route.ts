
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prismaDB";
import { generateAccessToken, hashPassword } from "../../../../../utils/auth";

export async function POST(req: Request) {
  try {
    const { name, userName, email, password }: any = await req.json();

    if (!name.trim() || !userName.trim() || !email.trim() || !password.trim()) {
      return Response.json(
        { message: "Data is not valid !!" },
        { status: 422 }
      );
    }

    

    const isUserExist = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { userName }],
      },
    });
    
    if (isUserExist) {
      return Response.json(
        {
          message: "The username or email already exists!",
        },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "user",
        userName,
      },
    });


    return Response.json(
      { message: "User signed up successfully :))" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true:max-age=${60*60*24*7}` },
      }
    );
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
