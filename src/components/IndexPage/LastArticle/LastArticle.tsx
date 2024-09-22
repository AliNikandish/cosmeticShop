import React from "react";
import HeadSection from "../HeadSection";
import ArticleItem from "./ArticleItem";
import prisma from "../../../../lib/prismaDB";


type article={
  mainImage:string
  createdAt:Date
  id:string
  title:string
  category:{
    title:string|null
  }
}

const LastArticle = async() => {

  const articles:article[] = await prisma.article.findMany({
    take: 4,
    where:{
      published:true
    },
    orderBy: {
      createdAt: "desc",
    },
    select:{
      title:true,
      mainImage:true,
      createdAt:true,
      id:true,
      category:{
        select:{
          title:true
        }
      }
    }
  });

  


  return (
    <div className="w-full px-4 md:px-20 mb-20 pt-6 ">
      <HeadSection title="آخرین مطالب" subTitle="بلاگ" other="مشاهده مطالب" href='/blog' />
      <div className="flex gap-x-2 flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[175px] md:h-[365px] ">
          <ArticleItem ismain article={articles[0]}/>
        </div>

        <div className="w-full md:w-1/2 h-[365px] mt-4 md:mt-0 relative">
          <div className="h-[175px]">
            <ArticleItem article={articles[1]}/>

          </div>
          <div className="flex gap-x-2 mt-[15px] justify-between">
            <div className="w-1/2">
              <ArticleItem isSmall article={articles[2]}/>

            </div>
            <div className="w-1/2">
              <ArticleItem isSmall article={articles[3]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastArticle;
