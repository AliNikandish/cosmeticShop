import { NextRequest } from "next/server";
import prisma from "../../../../lib/prismaDB";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const categoryParams = searchParams.getAll("categoryId");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const brandParams = searchParams.getAll("brand");
    const colorParams = searchParams.getAll("color");
    const isExistParam = searchParams.get("isExist");
    const isInOfferParam = searchParams.get("isInOffer");
    const isInDiscountParam = searchParams.get("isInDiscount");
    const skipParam = searchParams.get("skip") || "0";
    const takeParam = searchParams.get("take") || "10";
    const sortParam = searchParams.get("sort") || "newest";
    const searchParam = searchParams.get("search");

    const skip = Number(skipParam);
    const take = Number(takeParam);

    const whereClause: any = {};

    // categories
    let categoryIds: string[] = [];
    if (categoryParams.length > 0) {
      categoryIds = categoryParams[0].split(",");
    }

    if (categoryIds.length > 0) {
      whereClause.categoryId = { in: categoryIds };
    }

    // colors
    let colorNames: string[] = [];
    if (colorParams.length > 0) {
      colorNames = colorParams[0].split(",");
    }

    if (colorNames.length > 0) {
      whereClause.color = { in: colorNames };
    }

    // brand
    let brandNames: string[] = [];
    if (brandParams.length > 0) {
      brandNames = brandParams[0].split(",");
    }

    if (brandNames.length > 0) {
      whereClause.brand = { in: brandNames };
    }

    //price filtering without NaN
    if (minPriceParam || maxPriceParam) {
      const minPrice = Number(minPriceParam);
      const maxPrice = Number(maxPriceParam);

      if (!isNaN(minPrice) || !isNaN(maxPrice)) {
        whereClause.price = {};
        if (!isNaN(minPrice)) whereClause.price.gte = minPrice;
        if (!isNaN(maxPrice)) whereClause.price.lte = maxPrice;
      }
    }

    if (isExistParam) {
      whereClause.isExist = isExistParam === "true";
    }
    if (isInOfferParam) {
      whereClause.isInOffer = isInOfferParam === "true";
    }
    if (isInDiscountParam) {
      whereClause.isInDiscount = isInDiscountParam === "true";
    }

    if (searchParam) {
      whereClause.title = {
        contains: searchParam,
        mode: "insensitive",
      };
    }

    const hasFilters = Object.keys(whereClause).length > 0;

    // sort
    let orderBy: any = {};

    switch (sortParam) {
      case "expensive":
        orderBy = { price: "desc" };
        break;
      case "cheap":
        orderBy = { price: "asc" };
        break;
      case "newest":
        orderBy = { createdAt: "desc" };
        break;
      case "popular":
        
        let products = await prisma.product.findMany({
          where: whereClause,
          skip,
          take,
          include: {
            Comment: true,
          },
        });

        // calculate avg score product
        products = products.map((product) => {
          const comments = product.Comment;
          const avgScore =
            comments.length > 0
              ? comments.reduce((acc, curr) => acc + curr.score, 0) /
                comments.length
              : 0;
          return {
            ...product,
            avgScore,
          };
        });


        products.sort((a:any, b:any) => b.avgScore - a.avgScore);

        // paginate 
        const paginated = products.slice(skip, skip + take);

        return Response.json({
          products: paginated,
          total: products.length,
        });
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    const products = await prisma.product.findMany({
      ...(hasFilters && { where: whereClause }),
      skip,
      take,
      orderBy,
    });

    //( infinite scroll)
    const total = await prisma.product.count({
      ...(hasFilters && { where: whereClause }),
    });

    return Response.json({
      products,
      total,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Some error occurred" }, { status: 500 });
  }
}