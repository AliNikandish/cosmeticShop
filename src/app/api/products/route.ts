// import fs from "fs";
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";
import prisma from "../../../../lib/prismaDB";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("");
    const description = formData.get("");
    const isExist = formData.get("");
    const isInDiscount = formData.get("");
    const isInOffer = formData.get("");
    const price = formData.get("");
    const brand = formData.get("");
    const category = formData.get("");
    const categoryId = formData.get("");
    const categoryName = formData.get("");
    const color = formData.get("");
    const image = formData.get("");
    const feature = formData.get("");

    // const newProduct = await prisma.product.create({
    //   data: {
    //     title,
    //     description,
    //     isExist,
    //     isInDiscount,
    //     isInOffer,
    //     price,
    //     brand,
    //     category,
    //     categoryId,
    //     categoryName,
    //     color,
    //     image,
    //     feature,
    //   },
    // });
    const newProduct='';
    

    return Response.json(
      { message: "Product created successfully :))", data: newProduct },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({});

    return Response.json(products);
  } catch (error) {
    return Response.json({ message: "Some error occured" }, { status: 500 });
  }
}
