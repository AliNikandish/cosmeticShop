import ArticleCard from '@/components/ArticleCard'
import Contact from '@/components/Contact/Contact'
import React from 'react'
import prisma from '../../../lib/prismaDB';


type ArticleCardProps = {
  title: string
  mainImage: string
  createdAt: Date
  summary: string
  id: string
  category: { title: string|null }
}

const page = async() => {

  const articles = await prisma.article.findMany({
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
      summary:true,
      id:true,
      category:{
        select:{
          title:true
        }
      }
    }
  });

  return (
    <div className="w-full px-20 mt-10">
      <div className='grid grid-cols-1  md:grid-cols-2 w-[350px] md:w-[700px] gap-y-2 justify-items-center'>

        {articles.map((article:ArticleCardProps)=>{
          return  <ArticleCard key={article.id} article={article}/>
        })}
      </div>
      <div className='mt-2 md:flex flex-row-reverse hidden'>
    <div className='w-[250px] h-[130px] border-2 p-2'>
      <p className='text-sm font-bold font-IRANSansMedium'>عضویت در خبرنامه</p>
      <input type="text" placeholder='آدرس ایمیل' className='rounded-lg py-1 px-2 border w-full text-sm my-3' />
      <button className='bg-rose-500 text-white w-full rounded-lg text-sm p-1  '>عضویت</button>
    </div>
      </div>
    </div>
  )
}

export default page