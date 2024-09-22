import prisma from "../../../../../lib/prismaDB";
import { generateAccessToken, generateRefreshToken, valiadteEmail, valiadtePassword, verifyPassword } from "../../../../../utils/auth";

export async function POST(req:Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    

    if (!email.trim() || !password.trim()) {
      return Response.json({ message: "Data is not valid !!" },{status:422});
    }


    const isUserExist = await prisma.user.findFirst({
      where: {
        email
      },
    });




    if (!isUserExist) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }

    const isCorrectPasswordWithHash = await verifyPassword(password, isUserExist.password);

    
    if (!isCorrectPasswordWithHash) {
      return Response.json(
        { message: "Email or password is not correct" },
        { status: 401 }
      );
    }



    const accessToken = generateAccessToken({ email });
    const refreshToken = generateRefreshToken({ email });

    

    const isUpdate=await prisma.user.update({
      where: {
        email
      },
        data: {
          refreshToken
        }
      
    });

    

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;max-age=${60*60*24*7}`);
    // headers.append(
    //   "Set-Cookie",
    //   `refresh-token=${refreshToken};path=/;httpOnly=true;`
    // );

    return Response.json(
      { message: "User logged in successfully :))" },
      {
        status: 200,
        headers,
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