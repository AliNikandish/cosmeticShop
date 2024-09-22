import ProductCard from "@/components/ProductCard";
import React from "react";
import { FaAngleLeft, FaBasketShopping } from "react-icons/fa6";
import HeadSection from "../HeadSection";
import prisma from "../../../../lib/prismaDB";

type ProductCardProps={
  feature: any[]
  id:string 
  title:string
  shortDescription:string 
  longDescription:string |null
  image:string |null
  price: number 
  discountPrice: number |null
  categoryId:string 
  categoryName:string |null
  color:string  |null
  brand:string |null
  isExist: boolean,
  isInOffer: boolean,
  isInDiscount: boolean,
  weight: number 
  createdAt: Date
}

const Latest = async () => {
  const products = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="w-full px-4 lg:px-20 mb-20 pt-6">
      <HeadSection
        title="جدیدترین محصولات "
        subTitle="آخرین محصولات فروشگاه"
        other="مشاهده محصولات"
        href="products"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-5 justify-items-center	 ">

        {products.map((product:ProductCardProps)=>{
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  );
};

export default Latest;
