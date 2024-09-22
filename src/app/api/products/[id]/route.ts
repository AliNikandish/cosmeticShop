import prisma from "../../../../../lib/prismaDB";

export async function GET(req: Request,
    { params }: { params: { id: string } }) {
      try {
        const {id}=params
        const product = await prisma.product.findUnique({ where: { id } });
          return Response.json(product);
        } catch (error) {
          console.log(error);
          return Response.json(
            { message: "Some error occured" },
            { status: 500 }
          );
        }
  }