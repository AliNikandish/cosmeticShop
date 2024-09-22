import React from "react";
import "./style.css";
import DisCountCard from "./DisCountCard";
import prisma from "../../../../lib/prismaDB";

const Discount = async() => {

  const products = await prisma.product.findMany({
    take: 4,
   where:{
    isInDiscount:true
   },
    orderBy: {
      createdAt: "desc",
    },
  });

  
  return (
    <div className="w-full  px-20 px-5 mt-10  relative bg-orange-500 h-[400px] mb-44 hidden lg:block">
      <div className="discount-Trapezoid rounded-lg "></div>
        <div className="absolute discount-title">
          <span className="text-lg text-rose-500 z-10 ">
            تخفیف ویژه محصولات{" "}
          </span>{" "}
          <span className="text-lg">فروشگاه</span>
          <p className="text-gray-500 text-xs text-center">تضمین بهترین قیمت در سطح کشور</p>
        </div>
      <div className="absolute flex  bottom-[-90px] justify-evenly w-[98%]">

{products.map(product=>{
  return <DisCountCard key={product.id} product={product}/>

})}
 
      </div>
    </div>
  );
};

export default Discount;
