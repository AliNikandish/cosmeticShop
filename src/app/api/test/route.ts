import { NextResponse } from "next/server";
import { generateAccessToken } from "../../../../utils/auth";


export async function  GET(req:Request){
    const response = NextResponse.json(
        {
            message: "User Logged In Successfully :))"
        },
        { status: 200 }
      )
    
    const name='ali'
      const accessToken = generateAccessToken({ name });

      console.log('hi');
      console.log(accessToken);
      
    
    
        return response

    }