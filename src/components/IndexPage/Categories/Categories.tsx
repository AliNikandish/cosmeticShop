import React from "react";
import { PiFlowerFill } from "react-icons/pi";
import CategoryItem from "./CategoryItem";
import prisma from "../../../../lib/prismaDB";
import HeadSection from "../HeadSection";



const Categories = async () => {

  const categories = await prisma.category.findMany({
    take: 8,
    select:{
      id:true,
      image:true,
      title:true,
     _count:true
    }
  });

  return (
    <div className="w-full px-4 lg:px-20 mt-10 mb-20">
      <HeadSection
        subTitle="دسته بندی"
        title="دسته بندی محصولات"
        other="مشاهده دسته بندی ها"
        href="category"
      />
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-x-1 gap-y-1">

        {categories.map((category:any)=>{
          return<CategoryItem  key={category.id} category={category} />
        })}

      </div>
    </div>
  );
};

export default Categories;
