import { cookies } from "next/headers";
import { verifyAccessToken } from "../../../../../utils/auth";
import prisma from "../../../../../lib/prismaDB";

export async function GET(req:Request) {  
  const token = cookies().get("token");
  let user = null;
  if (token) {
    const tokenPayload:any = verifyAccessToken(token.value);

    if (tokenPayload) {
      // user = await UserModel.findOne(
      //   { email: tokenPayload.email },
      //   "-password -refreshToken -__v"
      // );

      
      
      user = await prisma.user.findFirst(
        {
          where:{email:{
            // equals:tokenPayload.email
            contains:tokenPayload.email
          }},
          select:{
            password:true,
            refreshToken:true,
            email:true
          }
        
        }
      )

    }


    
    return Response.json(user);
  } else {
    return Response.json(
      {
        data: null,
        message: "Not access !!",
      },
      { status: 401 }
    );
  }
}
