import { cookies } from "next/headers";

export async function POST() {
try {
  cookies().delete("token");
  return Response.json({ message: "Logout is done"} ,{
    status: 200,
  });
} catch (error) {
  
  return Response.json(
    { message: error },
    {
      status: 500,
    }
  );
}
}
