import { cookies } from "next/headers";
import { verifyAccessToken } from "./auth";
import prisma from "../lib/prismaDB";

const authUser = async () => {
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload:any= verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await prisma.user.findUnique({where:{
        email:tokenPayload.email
      }})
    }
  }

  return user;
};



export { authUser };
